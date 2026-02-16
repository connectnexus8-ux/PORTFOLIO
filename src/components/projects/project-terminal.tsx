'use client';

import React, { useState, useRef, useEffect } from 'react';
import { projects } from '@/lib/data';

const ProjectTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    "Welcome! Type 'help' to see available commands.",
    "Try 'ls' to list my projects or 'animate' for a surprise!",
  ]);
  const [isAnimating, setIsAnimating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const newHistory = [...history, `$ ${input}`];

    switch (input.toLowerCase()) {
      case 'help':
        newHistory.push('Available commands:');
        newHistory.push('- ls: List all projects');
        newHistory.push('- clear: Clear the terminal');
        newHistory.push('- animate: A little surprise');
        break;
      case 'ls':
        newHistory.push('Projects:');
        projects.forEach(p => {
          newHistory.push(`- ${p.title}: ${p.description}`);
          if (p.liveUrl) newHistory.push(`  Live: ${p.liveUrl}`);
          if (p.githubUrl) newHistory.push(`  Code: ${p.githubUrl}`);
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'animate':
        setIsAnimating(true);
        newHistory.push('Starting animation...');
        setTimeout(() => setIsAnimating(false), 5000); // Stop animation after 5s
        break;
      default:
        newHistory.push(`command not found: ${input}. Type 'help' for commands.`);
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl bg-[#1e1e1e] border border-gray-700" onClick={handleFocus}>
      {isAnimating && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-20 h-20 border-4 border-t-cyan-400 border-r-fuchsia-500 border-b-purple-500 border-l-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {/* Terminal Header */}
      <div className="flex items-center p-3 bg-[#333] rounded-t-lg">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-400">projects-terminal</div>
        <div className="text-xs text-gray-500">Click to focus</div>
      </div>

      {/* Terminal Body */}
      <div ref={terminalBodyRef} className="h-80 p-4 overflow-y-auto font-mono text-sm text-gray-300">
        <div className="mb-2 text-green-400 font-bold">Terminal Projects</div>
        {history.map((line, index) => (
          <div key={index} className={line.startsWith('$') ? 'text-cyan-400' : 'text-gray-300'}>{line}</div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
          <span className="text-green-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-gray-300 p-0"
            autoFocus
          />
        </form>
         <div className="animate-terminal-cursor w-2 h-4 bg-green-400"></div>
      </div>
      
       <div className="p-2 bg-[#333] rounded-b-lg text-right text-xs text-gray-500">
          Type 'help' for commands
      </div>
    </div>
  );
};

export default ProjectTerminal;
