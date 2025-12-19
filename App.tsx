import React, { useState, useEffect, useRef } from 'react';
import { EXAM_VERSIONS } from './constants';
import { AnswersState, Question, QuestionType, TaskSection, ExamPageData, AnalysisResult } from './types';
import Timer from './components/Timer';
import ThreeDCard from './components/ThreeDCard';
import { ArrowRight, ArrowLeft, CheckCircle, Save, BookOpen, PenTool, Layout, Check, Layers, User, Star, AlertTriangle, RefreshCw, XCircle, Lock } from 'lucide-react';

const TOTAL_TIME = 70 * 60; // 70 minutes
const PASSING_THRESHOLD = 95; // Percent needed to unlock next version

// ------------------- WRITING ALGORITHM -------------------

const LINKING_WORDS = ['however', 'although', 'despite', 'in spite of', 'but', 'because', 'so', 'therefore', 'furthermore', 'on the other hand'];

const TOPIC_VOCAB = {
    'vA-writing-1': ['distract', 'cheat', 'safety', 'emergency', 'dictionary', 'search', 'learn', 'allow', 'ban', 'focus'], // Mobile Phones
    'vB-writing-1': ['convenient', 'delivery', 'price', 'cheap', 'expensive', 'crowd', 'queue', 'try on', 'touch', 'return'], // Shopping
};

interface WritingFeedback {
    pass: boolean;
    feedback: string[];
}

const evaluateWriting = (questionId: string, text: string): WritingFeedback => {
    const feedback: string[] = [];
    const cleanText = text.trim();
    
    // 1. Length Check (Target 80-100, allow 60-150 tolerance)
    const wordCount = cleanText.split(/\s+/).length;
    if (wordCount < 60) feedback.push(`Too short (${wordCount} words). Aim for 80-100.`);
    
    // 2. Linking Words Check
    const lowerText = cleanText.toLowerCase();
    const foundLinkers = LINKING_WORDS.filter(w => lowerText.includes(w));
    if (foundLinkers.length < 3) feedback.push(`Use more linking words (e.g., however, although, because). Found: ${foundLinkers.length}.`);

    // 3. Topic Vocabulary Check
    const keywords = TOPIC_VOCAB[questionId as keyof typeof TOPIC_VOCAB] || [];
    if (keywords.length > 0) {
        const foundKeywords = keywords.filter(w => lowerText.includes(w));
        if (foundKeywords.length < 2) feedback.push(`Use more topic vocabulary. Try words like: ${keywords.slice(0, 4).join(', ')}.`);
    }

    // 4. Mechanics (Basic Capitalization check)
    if (cleanText.length > 0 && cleanText[0] !== cleanText[0].toUpperCase()) {
        feedback.push("Start sentences with capital letters.");
    }

    const pass = feedback.length === 0;
    return { pass, feedback };
};

// ------------------- GRADING ALGORITHM -------------------

// Global variable to store latest writing feedback for UI display
let lastWritingFeedback: Record<string, string[]> = {};

const checkAnswer = (question: Question, userAnswer: string): boolean => {
    if (!userAnswer) return false;
    
    // --- WRITING ANALYSIS ---
    if (question.type === QuestionType.WRITING) {
        const result = evaluateWriting(question.id, userAnswer);
        if (!result.pass) {
            lastWritingFeedback[question.id] = result.feedback;
            return false;
        }
        return true;
    }

    const normalize = (str: string) => {
        return str.trim().toLowerCase()
            .replace(/n't/g, ' not')
            .replace(/'m/g, ' am')
            .replace(/'re/g, ' are')
            .replace(/'ll/g, ' will')
            .replace(/'ve/g, ' have')
            .replace(/\./g, '')
            .replace(/\s+/g, ' '); // Collapse spaces
    };

    const cleanUser = normalize(userAnswer);
    const cleanCorrect = normalize(question.correctAnswer || "");

    // Simple Match
    if (question.type === QuestionType.MCQ || question.type === QuestionType.DROPDOWN) {
        return cleanUser === cleanCorrect;
    }

    // Complex Match (Fill Blank / Sentence)
    if (question.type === QuestionType.FILL_BLANK || question.type === QuestionType.SENTENCE_BUILDER) {
        const userParts = cleanUser.split('|').map(s => s.trim());
        const correctParts = cleanCorrect.split('|').map(s => s.trim());

        if (userParts.length !== correctParts.length) return false;

        return userParts.every((u, i) => u === correctParts[i]);
    }

    return false;
}

const analyzeExam = (answers: AnswersState, questions: Question[]): AnalysisResult => {
    let score = 0;
    const mistakes: string[] = [];
    const total = questions.length;
    
    // Reset writing feedback container for this run
    lastWritingFeedback = {};

    questions.forEach(q => {
        if (checkAnswer(q, answers[q.id] || '')) {
            score++;
        } else {
            mistakes.push(q.id);
        }
    });

    const percentage = Math.round((score / total) * 100);
    let feedback = "";
    if (percentage >= 95) feedback = "Outstanding Mastery! You have unlocked the next version.";
    else if (percentage >= 90) feedback = "Excellent work, but you need 95% to unlock the next level.";
    else if (percentage >= 75) feedback = "Good job! Fix the errors to improve.";
    else if (percentage >= 50) feedback = "Good effort. Review the mistakes below.";
    else feedback = "You need more practice. Let's fix these errors together.";

    return { score, total, percentage, mistakes, feedback };
};

// ------------------- COMPONENT -------------------

export default function App() {
  // Load unlocked versions from localStorage
  const [unlockedVersions, setUnlockedVersions] = useState<string[]>(() => {
      try {
          const saved = localStorage.getItem('oxford_unlocked');
          return saved ? JSON.parse(saved) : ['A'];
      } catch {
          return ['A'];
      }
  });

  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [finished, setFinished] = useState(false);
  
  // Remediation State
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [remediationMode, setRemediationMode] = useState(false);
  const [mistakeQueue, setMistakeQueue] = useState<string[]>([]);
  const [currentMistakeIdx, setCurrentMistakeIdx] = useState(0);

  const handleAnswer = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const unlockNextVersion = (currentVer: string) => {
      const versions = ['A', 'B', 'C', 'D', 'E'];
      const idx = versions.indexOf(currentVer);
      if (idx !== -1 && idx < versions.length - 1) {
          const nextVer = versions[idx + 1];
          if (!unlockedVersions.includes(nextVer)) {
              const newUnlocked = [...unlockedVersions, nextVer];
              setUnlockedVersions(newUnlocked);
              localStorage.setItem('oxford_unlocked', JSON.stringify(newUnlocked));
          }
      }
  };

  const handleFinish = () => {
    setFinished(true);
    // Gather all questions
    const allQuestions = (EXAM_VERSIONS[selectedVersion!] || []).flatMap(page => page.tasks.flatMap(t => t.questions));
    const result = analyzeExam(answers, allQuestions);
    setAnalysis(result);

    // Check unlocking
    if (result.percentage >= PASSING_THRESHOLD && selectedVersion) {
        unlockNextVersion(selectedVersion);
    }
  };

  const startRemediation = () => {
    if (!analysis) return;
    setMistakeQueue([...analysis.mistakes]);
    setRemediationMode(true);
    setCurrentMistakeIdx(0);
    // Clear answers for mistakes so user has to type them again, 
    // BUT preserve writing text so they can edit it instead of rewrite from scratch
    const newAnswers = { ...answers };
    analysis.mistakes.forEach(id => {
        // If it is NOT a writing task, clear it. If it IS writing, keep it for editing.
        if (!id.includes('writing')) {
            delete newAnswers[id];
        }
    });
    setAnswers(newAnswers);
  };

  const submitRemediationQuestion = (qId: string) => {
    const allQuestions = (EXAM_VERSIONS[selectedVersion!] || []).flatMap(page => page.tasks.flatMap(t => t.questions));
    const q = allQuestions.find(qt => qt.id === qId);
    
    if (q && checkAnswer(q, answers[qId] || '')) {
        // Correct
        const nextQueue = mistakeQueue.filter(id => id !== qId);
        setMistakeQueue(nextQueue);
        if (nextQueue.length === 0) {
            alert("Congratulations! You have corrected all mistakes.");
            setRemediationMode(false);
            setFinished(true);
            
            // Re-analyze
            const newResult = analyzeExam(answers, allQuestions);
            setAnalysis(newResult);
            
            // Re-check unlocking logic after remediation
            if (newResult.percentage >= PASSING_THRESHOLD && selectedVersion) {
                unlockNextVersion(selectedVersion);
            }
        } else {
            setCurrentMistakeIdx(0); // Go to next
        }
    } else {
        // Prepare error message
        let msg = "Incorrect. Try again!";
        if (q?.type === QuestionType.WRITING && lastWritingFeedback[qId]) {
            msg = "Writing Issues:\n" + lastWritingFeedback[qId].map(s => "- " + s).join("\n");
        }
        alert(msg);
    }
  }

  // ------------------- VIEWS -------------------

  // 1. Version Selection
  if (!selectedVersion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white p-4 bg-grid overflow-hidden relative font-[Outfit]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
             <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-float"></div>
             <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <ThreeDCard>
          <div className="max-w-4xl w-full bg-slate-800/50 backdrop-blur-3xl border border-white/10 p-6 md:p-12 rounded-[2rem] shadow-2xl relative z-10 text-center ring-1 ring-white/5">
             <div className="mb-6 md:mb-8 flex justify-center">
                <div className="p-3 md:p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/40 animate-pulse-slow">
                    <Layers className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
             </div>
             <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">Select Exam Version</h1>
             <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg">You must score 95% on Version A to unlock Version B, and so on.</p>
             <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-6">
                {['A', 'B', 'C', 'D', 'E'].map((ver) => {
                    const isUnlocked = unlockedVersions.includes(ver);
                    return (
                        <button 
                            key={ver} 
                            onClick={() => isUnlocked ? setSelectedVersion(ver) : null} 
                            disabled={!isUnlocked}
                            className={`
                                group relative flex flex-col items-center justify-center w-full aspect-square md:w-36 md:h-36 p-4 rounded-3xl transition-all duration-300
                                ${isUnlocked 
                                    ? 'bg-slate-900/60 border border-slate-700/50 hover:bg-indigo-600/20 hover:border-indigo-500 hover:scale-105 md:hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/20 cursor-pointer' 
                                    : 'bg-slate-900/30 border border-slate-800 opacity-50 cursor-not-allowed grayscale'
                                }
                            `}
                        >
                            {isUnlocked ? (
                                <>
                                    <span className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{ver}</span>
                                    <span className="text-[10px] md:text-xs text-slate-400 group-hover:text-indigo-200 uppercase tracking-wider font-semibold">Version</span>
                                </>
                            ) : (
                                <Lock className="w-8 h-8 md:w-10 md:h-10 text-slate-600" />
                            )}
                        </button>
                    )
                })}
             </div>
          </div>
        </ThreeDCard>
      </div>
    )
  }

  // 2. Start Screen
  if (!started) {
     return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white p-4 bg-grid overflow-hidden relative font-[Outfit]">
        {/* ... (Background) ... */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
             <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-float"></div>
             <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <ThreeDCard>
          <div className="max-w-3xl w-full bg-slate-800/50 backdrop-blur-3xl border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform transition-all hover:shadow-indigo-500/20 relative z-10 text-center">
             <div className="mb-6 md:mb-8 flex justify-center">
                <div className="p-4 md:p-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-lg shadow-indigo-500/40">
                    <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-400 mb-4 tracking-tight drop-shadow-sm">Oxford Navigate</h1>
             <h2 className="text-xl md:text-2xl font-medium text-indigo-300 mb-8 md:mb-10 tracking-wide uppercase">Pre-Intermediate Exam Platform</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-10 text-left text-sm text-slate-300">
               <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/50 backdrop-blur-md">
                 <p className="font-semibold text-white">70 Mins / Version {selectedVersion}</p>
                 <p className="text-xs text-slate-400 mt-1">Pre-Intermediate</p>
               </div>
               <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/50 backdrop-blur-md">
                 <p className="font-semibold text-white">Mr. Aziz</p>
                 <p className="text-xs text-slate-400 mt-1">Head-Teacher</p>
               </div>
               <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/50 backdrop-blur-md">
                 <p className="font-semibold text-white">Ms. Malika</p>
                 <p className="text-xs text-slate-400 mt-1">Support</p>
               </div>
             </div>

             <div className="flex flex-col gap-4 items-center">
                <button onClick={() => setStarted(true)} className="group relative w-full md:w-auto inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-bold text-white transition-all duration-300 bg-indigo-600 rounded-full hover:bg-indigo-500 hover:scale-105 focus:outline-none ring-offset-4 focus:ring-2 ring-indigo-400 shadow-lg shadow-indigo-600/40 text-lg">
                    <span className="mr-3 tracking-wide">Start Examination</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => setSelectedVersion(null)} className="text-sm text-slate-500 hover:text-white transition-colors">Change Version</button>
             </div>
          </div>
        </ThreeDCard>
      </div>
    );
  }

  // 3. Remediation Mode
  if (remediationMode) {
      const allQuestions = (EXAM_VERSIONS[selectedVersion!] || []).flatMap(page => page.tasks.flatMap(t => t.questions));
      const currentQId = mistakeQueue[currentMistakeIdx];
      const question = allQuestions.find(q => q.id === currentQId);
      const isWriting = question?.type === QuestionType.WRITING;

      if (!question) return <div>Loading...</div>;

      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white p-4 bg-grid font-[Outfit]">
            <ThreeDCard>
                <div className="max-w-3xl w-full bg-red-900/20 backdrop-blur-3xl border border-red-500/30 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative">
                     <div className="flex items-center gap-4 mb-6 md:mb-8 text-red-400">
                        <AlertTriangle className="w-8 h-8 md:w-10 md:h-10" />
                        <h2 className="text-2xl md:text-3xl font-bold">Remediation Mode</h2>
                     </div>
                     <p className="text-slate-300 mb-6 md:mb-8 text-sm md:text-base">You must correct this answer to proceed. ({mistakeQueue.length} remaining)</p>
                     
                     {/* Show specific Writing Algorithm feedback if available */}
                     {isWriting && lastWritingFeedback[question.id] && (
                         <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl">
                            <h4 className="font-bold text-red-300 mb-2">Analysis Results:</h4>
                            <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                                {lastWritingFeedback[question.id].map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                         </div>
                     )}

                     <div className="bg-slate-900/80 p-4 md:p-8 rounded-2xl border border-red-500/20 mb-8">
                        <QuestionItem 
                            question={question} 
                            value={answers[question.id] || ''} 
                            onChange={(val) => handleAnswer(question.id, val)} 
                        />
                     </div>

                     <button 
                        onClick={() => submitRemediationQuestion(question.id)}
                        className="w-full py-4 bg-red-600 hover:bg-red-500 rounded-xl font-bold text-lg shadow-lg shadow-red-600/30 transition-all"
                     >
                        Check & Continue
                     </button>
                </div>
            </ThreeDCard>
        </div>
      )
  }

  // 4. Analysis / Finished Screen
  if (finished && analysis) {
    const allQuestions = (EXAM_VERSIONS[selectedVersion!] || []).flatMap(page => page.tasks.flatMap(t => t.questions));
    const passed = analysis.percentage >= PASSING_THRESHOLD;

    return (
      <div className="min-h-screen bg-[#0f172a] text-white p-4 md:p-8 bg-grid font-[Outfit] pb-32">
         <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            {/* Header Card */}
            <ThreeDCard>
                <div className="bg-slate-800/80 backdrop-blur-3xl border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-2 ${passed ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                    
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">Examination Results</h2>
                    <p className="text-slate-400 mb-6 md:mb-8">Version {selectedVersion}</p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">{analysis.percentage}%</div>
                            <div className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Score</div>
                        </div>
                        <div className="hidden md:block w-px h-24 bg-white/10"></div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">{analysis.score}/{analysis.total}</div>
                            <div className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Correct</div>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 p-4 md:p-6 rounded-2xl border border-white/5 inline-block w-full md:w-auto">
                        <p className="text-lg md:text-xl text-indigo-300 font-medium">"{analysis.feedback}"</p>
                    </div>

                    {passed && (
                        <div className="mt-6 md:mt-8 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-xl inline-block">
                             <div className="flex items-center gap-2 text-emerald-300 font-bold justify-center">
                                <Lock className="w-5 h-5" />
                                <span>Next Version Unlocked!</span>
                             </div>
                        </div>
                    )}

                    {analysis.mistakes.length > 0 && (
                        <div className="mt-6 md:mt-8">
                            <button 
                                onClick={startRemediation}
                                className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-all mx-auto animate-pulse"
                            >
                                <RefreshCw className="w-5 h-5" />
                                Redo Mistakes ({analysis.mistakes.length})
                            </button>
                        </div>
                    )}
                </div>
            </ThreeDCard>

            {/* Detailed Breakdown */}
            <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-300 ml-2 md:ml-4">Detailed Breakdown</h3>
                {allQuestions.map((q, idx) => {
                    const isCorrect = !analysis.mistakes.includes(q.id);
                    const isWriting = q.type === QuestionType.WRITING;
                    const writingErrors = isWriting && !isCorrect ? lastWritingFeedback[q.id] : [];

                    return (
                        <div key={q.id} className={`p-4 md:p-6 rounded-2xl border ${isCorrect ? 'bg-emerald-900/10 border-emerald-500/30' : 'bg-red-900/10 border-red-500/30'} flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center`}>
                            <div className={`p-2 md:p-3 rounded-full shrink-0 ${isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                {isCorrect ? <Check size={20} /> : <XCircle size={20} />}
                            </div>
                            <div className="flex-grow w-full">
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Question {idx + 1}</p>
                                <p className="text-base md:text-lg text-white font-medium mb-3 leading-relaxed">{q.prompt.replace(/_+/g, '___')}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-slate-900/50 p-3 rounded-lg border border-white/5 overflow-x-auto">
                                        <span className="text-xs text-slate-500 block mb-1">Your Answer</span>
                                        <span className={`font-mono ${isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>{answers[q.id] || '(Empty)'}</span>
                                    </div>
                                    {!isCorrect && !isWriting && (
                                        <div className="bg-slate-900/50 p-3 rounded-lg border border-white/5 overflow-x-auto">
                                            <span className="text-xs text-slate-500 block mb-1">Correct Answer</span>
                                            <span className="font-mono text-emerald-300">{q.correctAnswer}</span>
                                        </div>
                                    )}
                                    {!isCorrect && isWriting && writingErrors && (
                                         <div className="bg-slate-900/50 p-3 rounded-lg border border-red-500/30">
                                            <span className="text-xs text-red-400 block mb-1 font-bold">Feedback</span>
                                            <ul className="list-disc list-inside text-sm text-red-200">
                                                {writingErrors.map((err, i) => <li key={i}>{err}</li>)}
                                            </ul>
                                         </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
         </div>
      </div>
    );
  }

  // 5. Exam Interface
  const currentExamPages: ExamPageData[] = EXAM_VERSIONS[selectedVersion] || [];
  const currentPage = currentExamPages[currentPageIdx];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-[Outfit] pb-32 relative overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-900/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-indigo-900/20 rounded-full blur-[80px] md:blur-[120px]" style={{animationDuration: '10s'}}></div>
        <div className="absolute top-[40%] left-[50%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-900/10 rounded-full blur-[60px] md:blur-[100px] translate-x-[-50%]"></div>
      </div>

      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleFinish} />

      {/* Enhanced Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-slate-900 z-50 shadow-lg shadow-indigo-900/20">
        <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(99,102,241,0.6)] relative overflow-hidden"
            style={{ width: `${((currentPageIdx + 1) / currentExamPages.length) * 100}%` }}
        >
            <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full animate-pulse" style={{animationDuration: '2s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 max-w-5xl mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
            <div>
                <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2 md:pb-0">
                     {currentExamPages.map((_, idx) => (
                         <div 
                            key={idx}
                            className={`
                                h-1.5 rounded-full transition-all duration-500 flex-shrink-0
                                ${idx === currentPageIdx 
                                    ? 'w-8 md:w-12 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]' 
                                    : idx < currentPageIdx 
                                        ? 'w-4 md:w-6 bg-emerald-500/50' 
                                        : 'w-2 md:w-3 bg-slate-800'
                                }
                            `} 
                         />
                     ))}
                </div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold tracking-widest uppercase border border-indigo-500/30">
                        Section {currentPageIdx + 1} / {currentExamPages.length}
                    </span>
                    <span className="text-xs text-slate-500 font-mono hidden md:inline-block">ID: {currentPage.id}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">{currentPage.title}</h1>
            </div>
            <div className="hidden md:block text-right">
                 <div className="text-3xl font-bold text-white/10 font-[Outfit]">VER {selectedVersion}</div>
            </div>
        </div>

        <ThreeDCard className="w-full">
            <div className="space-y-6 md:space-y-10">
                {currentPage.tasks.map((task, tIdx) => (
                    <div key={task.id} className="group bg-slate-800/40 backdrop-blur-xl border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-xl hover:bg-slate-800/50 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-start gap-4 md:gap-5 mb-6 md:mb-8 border-b border-white/5 pb-4 md:pb-6">
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg shadow-indigo-900/20 text-white shrink-0">
                                    {task.id.includes('writing') ? <PenTool className="w-5 h-5 md:w-6 md:h-6" /> : <Layout className="w-5 h-5 md:w-6 md:h-6" />}
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 tracking-tight">{task.title}</h3>
                                    <p className="text-indigo-200 text-sm md:text-base font-medium">{task.instruction}</p>
                                </div>
                            </div>

                            <div className="space-y-6 md:space-y-8">
                                {task.questions.map((q) => (
                                    <QuestionItem 
                                        key={q.id} 
                                        question={q} 
                                        value={answers[q.id] || ''} 
                                        onChange={(val) => handleAnswer(q.id, val)} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ThreeDCard>

        <div className="mt-12 md:mt-16 flex flex-col-reverse md:flex-row justify-between items-center relative z-20 gap-4">
            <button
                disabled={currentPageIdx === 0}
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setCurrentPageIdx(prev => prev - 1);
                }}
                className={`w-full md:w-auto flex justify-center items-center px-8 py-4 rounded-full transition-all duration-300 font-semibold ${currentPageIdx === 0 ? 'opacity-0 pointer-events-none hidden md:flex' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'}`}
            >
                <ArrowLeft className="mr-2 w-5 h-5" /> Previous
            </button>

            {currentPageIdx < currentExamPages.length - 1 ? (
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setCurrentPageIdx(prev => prev + 1);
                    }}
                    className="w-full md:w-auto flex justify-center items-center px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:shadow-[0_10px_40px_rgba(79,70,229,0.5)] hover:scale-105 transition-all duration-300"
                >
                    Next Section <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            ) : (
                <button
                    onClick={() => {
                         if (window.confirm("Are you sure you want to finish the exam?")) {
                             handleFinish();
                         }
                    }}
                    className="w-full md:w-auto flex justify-center items-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white rounded-full font-bold shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300"
                >
                    Submit Exam <Save className="ml-2 w-5 h-5" />
                </button>
            )}
        </div>
      </div>
    </div>
  );
}

// Sub-component for rendering individual questions based on type
const QuestionItem: React.FC<{ question: Question; value: string; onChange: (val: string) => void }> = ({ question, value, onChange }) => {
    
    // MCQ Styles
    if (question.type === QuestionType.MCQ) {
        return (
            <div className="animate-fade-in-up">
                <p className="text-lg md:text-xl mb-4 text-slate-100 font-medium leading-relaxed tracking-wide">{question.prompt}</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                    {question.options?.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => onChange(opt)}
                            className={`
                                relative px-6 py-3 rounded-xl border-2 text-sm md:text-base font-bold transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto text-center
                                ${value === opt 
                                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_8px_20px_rgba(79,70,229,0.3)] ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900' 
                                    : 'bg-slate-900/50 border-slate-700/50 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-300 hover:bg-slate-800'
                                }
                            `}
                        >
                            {opt}
                            {value === opt && (
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                                    <Check size={12} className="text-white" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // Fill Blank / Sentence Builder
    // Advanced handling for multiple blanks (regex split)
    if (question.type === QuestionType.FILL_BLANK || question.type === QuestionType.SENTENCE_BUILDER) {
        // Look for underscores (flexible length)
        const parts = question.prompt.split(/(_+)/);
        const hasGaps = parts.length > 1 && question.prompt.match(/_+/);
        
        // If gaps detected, render inline inputs
        if (hasGaps) {
            // Split values by pipe | for storage
            const currentValues = value ? value.split('|').map(s => s.trim()) : [];
            
            // Map segments to match input indices
            let inputCounter = 0;

            const handleChange = (idx: number, val: string) => {
                const newValues = [...currentValues];
                // Ensure array is filled up to this index
                while(newValues.length <= idx) newValues.push('');
                newValues[idx] = val;
                onChange(newValues.join('|'));
            }

            return (
                <div className="bg-slate-900/30 p-4 md:p-5 rounded-2xl border border-slate-700/30 text-base md:text-lg leading-[2.5rem] md:leading-loose text-slate-200">
                    {parts.map((part, i) => {
                        if (part.match(/_+/)) {
                            const currentIndex = inputCounter++;
                            return (
                                <input
                                    key={i}
                                    type="text"
                                    value={currentValues[currentIndex] || ''}
                                    onChange={(e) => handleChange(currentIndex, e.target.value)}
                                    className="mx-1 md:mx-2 bg-slate-950/80 border-b-2 border-indigo-500/50 text-center text-indigo-300 font-bold w-24 md:w-40 px-1 md:px-2 py-1 focus:outline-none focus:border-indigo-400 focus:bg-indigo-900/20 transition-all rounded-t-md inline-block align-baseline"
                                    placeholder="type here"
                                    autoComplete="off"
                                />
                            );
                        }
                        return <span key={i} dangerouslySetInnerHTML={{ __html: part }} />;
                    })}
                    {question.subPrompt && <p className="text-sm text-indigo-400 mt-3 font-medium italic flex items-center gap-2"><Star size={12}/> {question.subPrompt}</p>}
                </div>
            );
        }

        // Fallback for "SENTENCE_BUILDER" or standard inputs without underscores
        return (
            <div className="bg-slate-900/30 p-4 md:p-5 rounded-2xl border border-slate-700/30 hover:border-indigo-500/30 transition-colors">
                <label className="block text-lg md:text-xl text-slate-200 mb-3 font-medium tracking-wide">{question.prompt}</label>
                {question.subPrompt && <p className="text-sm text-indigo-400 mb-3 italic">{question.subPrompt}</p>}
                <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 md:px-5 py-3 md:py-4 text-indigo-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono shadow-inner text-base md:text-lg"
                    autoComplete="off"
                />
            </div>
        );
    }

    // Dropdown (Task 23)
    if (question.type === QuestionType.DROPDOWN) {
        // Robust split by underscores
        const parts = question.prompt.split(/_+/);
        return (
            <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2 md:gap-3 text-lg md:text-xl bg-slate-900/20 p-4 rounded-xl border border-white/5">
               <span className="leading-relaxed">{parts[0]}</span>
               <div className="relative inline-block w-full sm:w-auto">
                   <select 
                     value={value} 
                     onChange={(e) => onChange(e.target.value)}
                     className="w-full sm:w-auto appearance-none bg-slate-950 border-2 border-indigo-500/50 text-indigo-300 font-bold rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.3)] cursor-pointer hover:bg-slate-900 transition-all"
                   >
                     <option value="" disabled>Select...</option>
                     {question.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                   </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                   </div>
               </div>
               <span className="leading-relaxed">{parts[1] || ''}</span>
            </div>
        )
    }

    // Writing
    if (question.type === QuestionType.WRITING) {
        const wordCount = value.trim().split(/\s+/).filter(w => w.length > 0).length;
        return (
            <div className="space-y-4">
                <div className="bg-indigo-900/20 p-4 md:p-6 rounded-2xl border border-indigo-500/30 flex flex-col md:flex-row gap-4">
                    <BookOpen className="text-indigo-400 shrink-0 mt-1 hidden md:block" />
                    <div>
                         <h4 className="font-bold text-indigo-300 mb-1 flex items-center gap-2 md:block">
                            <BookOpen className="text-indigo-400 md:hidden w-4 h-4" />
                            Essay Prompt
                         </h4>
                         <p className="text-slate-300 italic text-base md:text-lg leading-relaxed">{question.prompt}</p>
                    </div>
                </div>
                <div className="relative">
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={question.subPrompt}
                        rows={14}
                        className="w-full bg-slate-950/50 border border-slate-700 rounded-2xl p-4 md:p-6 text-base md:text-lg text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900/50 transition-all resize-none font-serif leading-relaxed shadow-inner"
                    />
                    <div className="absolute bottom-4 right-4 text-[10px] md:text-xs font-mono text-slate-500 bg-slate-900/80 px-2 py-1 rounded">
                        Autosave active
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/50 p-3 rounded-xl border border-slate-800 gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm text-slate-400">Target Length:</span>
                        <span className="text-white font-bold text-sm">80-100 words</span>
                    </div>
                    <div className={`flex items-center gap-2 ${wordCount >= 80 && wordCount <= 120 ? 'text-green-400' : 'text-orange-400'}`}>
                        <span className="text-xs md:text-sm">Current:</span>
                        <span className="text-lg md:text-xl font-bold">{wordCount}</span>
                        <span className="text-[10px] md:text-xs uppercase font-bold tracking-wider">words</span>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}