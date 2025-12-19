import React, { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, setTimeLeft, onTimeUp }) => {
  const endTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
           clearInterval(timer);
           setTimeout(onTimeUp, 0);
           return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setTimeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isUrgent = timeLeft < 300; // Less than 5 mins

  return (
    <div className={`fixed top-2 right-2 md:top-4 md:right-4 z-50 transition-all duration-500 origin-top-right scale-75 md:scale-100 hover:scale-90 md:hover:scale-110`}>
      <div className={`
        relative overflow-hidden rounded-full border-2
        ${isUrgent ? 'border-red-500/50 bg-red-950/90' : 'border-indigo-400/30 bg-slate-900/90'}
        backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.2)]
        px-4 py-1 md:px-6 md:py-2 flex items-center gap-2 md:gap-3 text-white
      `}>
        <div className={`absolute inset-0 opacity-10 ${isUrgent ? 'animate-pulse bg-red-500' : 'bg-gradient-to-r from-cyan-500 to-indigo-500'}`} />
        <Clock className={`w-4 h-4 md:w-5 md:h-5 ${isUrgent ? 'text-red-400 animate-pulse' : 'text-cyan-400'}`} />
        <span className={`relative z-10 font-mono text-lg md:text-xl font-bold tracking-widest ${isUrgent ? 'text-red-100' : 'bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200'}`}>
            {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};

export default Timer;