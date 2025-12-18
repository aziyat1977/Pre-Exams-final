import React, { useState, useEffect } from 'react';
import { EXAM_PAGES } from './constants';
import { AnswersState, Question, QuestionType, TaskSection } from './types';
import Timer from './components/Timer';
import ThreeDCard from './components/ThreeDCard';
import { ArrowRight, ArrowLeft, CheckCircle, Save, BookOpen, PenTool, Layout, Check } from 'lucide-react';

const TOTAL_TIME = 70 * 60; // 70 minutes

export default function App() {
  const [started, setStarted] = useState(false);
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [finished, setFinished] = useState(false);

  // Auto-save logic (simulated)
  useEffect(() => {
    const saved = localStorage.getItem('oxford_exam_state');
    if (saved) {
      // Restore logic could go here, but for this demo we start fresh or clear
    }
  }, []);

  const handleAnswer = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to finish the exam?")) {
      setFinished(true);
    }
  };

  const currentProgress = (Object.keys(answers).length / 70) * 100; // Approx total questions

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white p-4 bg-grid overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
             <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-float"></div>
             <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <ThreeDCard>
          <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-2xl border border-slate-700 p-12 rounded-3xl shadow-2xl transform transition-all hover:shadow-indigo-500/20 relative z-10 text-center">
             <div className="mb-8 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/40">
                    <BookOpen className="w-12 h-12 text-white" />
                </div>
             </div>
             <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-2 font-[Outfit]">
               Oxford Navigate
             </h1>
             <h2 className="text-2xl font-light text-indigo-300 mb-8">Pre-Intermediate Exam Platform</h2>
             
             <div className="grid grid-cols-2 gap-4 mb-8 text-left text-sm text-slate-300">
               <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                 <p className="text-slate-500 uppercase text-xs font-bold tracking-wider mb-1">Time Limit</p>
                 <p className="font-semibold text-white">70 Minutes</p>
               </div>
               <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                 <p className="text-slate-500 uppercase text-xs font-bold tracking-wider mb-1">Version</p>
                 <p className="font-semibold text-white">Version D</p>
               </div>
             </div>

             <button 
                onClick={() => setStarted(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-[Outfit] rounded-full hover:bg-indigo-700 hover:scale-105 focus:outline-none ring-offset-2 focus:ring-2 ring-indigo-400"
             >
                <span className="mr-2 text-lg">Start Examination</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </ThreeDCard>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white p-4 bg-grid">
         <ThreeDCard>
            <div className="max-w-xl w-full bg-slate-800/80 backdrop-blur-xl border border-green-500/30 p-10 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.2)] text-center">
                <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-green-500 rounded-full shadow-lg shadow-green-500/40 animate-bounce">
                        <Check className="w-12 h-12 text-white" />
                    </div>
                </div>
                <h2 className="text-4xl font-bold mb-4">Exam Submitted!</h2>
                <p className="text-slate-300 mb-8">Thank you for completing the Pre-Intermediate Exam Workshop. Your answers have been recorded.</p>
                
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400">Time Remaining</span>
                        <span className="text-white font-mono">{Math.floor(timeLeft / 60)}m {timeLeft % 60}s</span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span className="text-slate-400">Questions Answered</span>
                         <span className="text-white font-mono">{Object.keys(answers).length}</span>
                    </div>
                </div>

                <button onClick={() => window.location.reload()} className="text-indigo-400 hover:text-indigo-300 underline">Return to Home</button>
            </div>
         </ThreeDCard>
      </div>
    );
  }

  const currentPage = EXAM_PAGES[currentPageIdx];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-[Outfit] pb-20 relative overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" style={{animationDuration: '10s'}}></div>
      </div>

      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={() => setFinished(true)} />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            style={{ width: `${((currentPageIdx + 1) / EXAM_PAGES.length) * 100}%` }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h2 className="text-sm font-bold text-indigo-400 tracking-wider uppercase mb-1">Section {currentPageIdx + 1} of {EXAM_PAGES.length}</h2>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white">{currentPage.title}</h1>
            </div>
            <div className="hidden md:block">
                 <div className="text-right text-xs text-slate-500 font-mono">ID: {currentPage.id}</div>
            </div>
        </div>

        <ThreeDCard className="w-full">
            <div className="space-y-8">
                {currentPage.tasks.map((task, tIdx) => (
                    <div key={task.id} className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-slate-800/60 transition-colors">
                        <div className="flex items-start gap-4 mb-6 border-b border-slate-700/50 pb-4">
                            <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-300">
                                {task.id.includes('writing') ? <PenTool size={20} /> : <Layout size={20} />}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{task.title}</h3>
                                <p className="text-indigo-200 text-sm">{task.instruction}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
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
                ))}
            </div>
        </ThreeDCard>

        <div className="mt-12 flex justify-between items-center">
            <button
                disabled={currentPageIdx === 0}
                onClick={() => {
                    window.scrollTo(0,0);
                    setCurrentPageIdx(prev => prev - 1);
                }}
                className={`flex items-center px-6 py-3 rounded-xl transition-all ${currentPageIdx === 0 ? 'opacity-0 pointer-events-none' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
            >
                <ArrowLeft className="mr-2 w-5 h-5" /> Previous
            </button>

            {currentPageIdx < EXAM_PAGES.length - 1 ? (
                <button
                    onClick={() => {
                        window.scrollTo(0,0);
                        setCurrentPageIdx(prev => prev + 1);
                    }}
                    className="flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-900/50 hover:scale-105 transition-all"
                >
                    Next Section <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            ) : (
                <button
                    onClick={handleSubmit}
                    className="flex items-center px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold shadow-lg shadow-green-900/50 hover:scale-105 transition-all"
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
                <p className="text-lg mb-3 text-slate-100 font-medium leading-relaxed">{question.prompt}</p>
                <div className="flex flex-wrap gap-3">
                    {question.options?.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => onChange(opt)}
                            className={`
                                relative px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0
                                ${value === opt 
                                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_4px_12px_rgba(79,70,229,0.4)]' 
                                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-300'
                                }
                            `}
                        >
                            {opt}
                            {value === opt && <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-800"></div>}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // Fill Blank / Sentence Builder
    if (question.type === QuestionType.FILL_BLANK || question.type === QuestionType.SENTENCE_BUILDER) {
        // Simple regex replace for visual cues if prompt has underscores
        const parts = question.prompt.split('_______');
        
        return (
            <div className="bg-slate-900/30 p-4 rounded-xl border border-slate-700/30">
                <label className="block text-slate-300 mb-2 font-medium">{question.prompt.replace(/_______/g, '___')}</label>
                {question.subPrompt && <p className="text-xs text-slate-500 mb-2 italic">{question.subPrompt}</p>}
                <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Type answer here..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-indigo-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
                />
            </div>
        );
    }

    // Dropdown (Task 23)
    if (question.type === QuestionType.DROPDOWN) {
        const parts = question.prompt.split('__________');
        return (
            <div className="flex items-center flex-wrap gap-2 text-lg">
               <span>{parts[0]}</span>
               <select 
                 value={value} 
                 onChange={(e) => onChange(e.target.value)}
                 className="bg-slate-950 border border-slate-600 text-indigo-400 rounded-lg px-3 py-1 focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer hover:bg-slate-900"
               >
                 <option value="" disabled>Select...</option>
                 {question.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
               </select>
               <span>{parts[1]}</span>
            </div>
        )
    }

    // Writing
    if (question.type === QuestionType.WRITING) {
        return (
            <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                    <p className="text-slate-300 italic">{question.prompt}</p>
                </div>
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={question.subPrompt}
                    rows={12}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl p-5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900/50 transition-all resize-none font-sans leading-relaxed"
                />
                <div className="flex justify-between text-sm text-slate-500">
                    <span>Target: 80-100 words</span>
                    <span>Current: {value.trim().split(/\s+/).filter(w => w.length > 0).length} words</span>
                </div>
            </div>
        );
    }

    return null;
}