import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, setTimeLeft, onTimeUp }) => {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, setTimeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isUrgent = timeLeft < 300; // Less than 5 mins

  return (
    <div className={`fixed top-4 right-4 z-50 transition-transform duration-300 hover:scale-105`}>
      <div className={`
        relative overflow-hidden rounded-2xl border 
        ${isUrgent ? 'border-red-500/50 bg-red-900/80' : 'border-indigo-500/30 bg-slate-900/80'}
        backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.3)]
        px-6 py-3 flex items-center gap-3 text-white font-bold tracking-widest text-xl
      `}>
        <div className={`absolute inset-0 opacity-20 ${isUrgent ? 'animate-pulse bg-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`} />
        <Clock className={`w-6 h-6 ${isUrgent ? 'text-red-300' : 'text-cyan-400'}`} />
        <span className="relative z-10 font-mono">{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default Timer;