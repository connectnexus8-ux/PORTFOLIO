'use client';

import React, { useState, useRef, useEffect } from 'react';
import { projects } from '@/lib/data';

const themes = {
  dark: {
    '--bg': '#1e1e1e',
    '--header-bg': '#333',
    '--text': '#e2e8f0',
    '--muted-text': '#94a3b8',
    '--prompt': '#38bdf8',
    '--green': '#34d399',
    '--border': '#4b5563',
  },
  light: {
    '--bg': '#ffffff',
    '--header-bg': '#f3f4f6',
    '--text': '#1f2937',
    '--muted-text': '#6b7280',
    '--prompt': '#0ea5e9',
    '--green': '#10b981',
    '--border': '#d1d5db',
  },
  matrix: {
    '--bg': '#000000',
    '--header-bg': '#0a0a0a',
    '--text': '#00ff41',
    '--muted-text': '#00ff41',
    '--prompt': '#00ff41',
    '--green': '#00ff41',
    '--border': '#00ff41',
  },
};

const commandsList = {
  help: 'Show available commands',
  ls: 'List projects',
  view: 'View project details (e.g., `view portfolio-website`)',
  about: 'Show information about this terminal',
  theme: 'Change theme (e.g., `theme light`, `theme list`)',
  date: 'Display current date and time',
  echo: 'Echo the input text',
  clear: 'Clear the terminal',
  exit: 'Switch to standard grid mode',
  sudo: 'Run a command with "superuser" privileges',
  animate: 'Show a cool animation',
};

const projectSlugs = projects.map(p => ({
    ...p,
    slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}));

interface ProjectTerminalProps {
  onExit: () => void;
}

const ProjectTerminal = ({ onExit }: ProjectTerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    "Welcome! Type 'help' to see available commands.",
    "Try 'ls' to list my projects or 'animate' for a surprise!",
  ]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [theme, setTheme] = useState('dark');
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
    const newHistory = [...history, `> ${input}`];
    const [command, ...args] = input.trim().toLowerCase().split(/\s+/);

    switch (command) {
      case 'help':
        newHistory.push('Available commands:');
        Object.entries(commandsList).forEach(([cmd, desc]) => {
          newHistory.push(`  <span class="text-[var(--green)]">${cmd.padEnd(10)}</span> ${desc}`);
        });
        break;
      case 'ls':
        newHistory.push('Projects:');
        projectSlugs.forEach(p => {
            newHistory.push(`- <span class="text-[var(--green)]">[${p.slug}]</span> ${p.title}`);
        });
        newHistory.push("Use 'view [id]' to see details.");
        break;
      case 'view':
        const slug = args[0];
        const project = projectSlugs.find(p => p.slug === slug);
        if (project) {
            newHistory.push(`--- Project: ${project.title} ---`);
            newHistory.push(project.description);
            newHistory.push(`Tags: ${project.tags.join(', ')}`);
            if (project.liveUrl) newHistory.push(`Live: <a href="${project.liveUrl}" target="_blank" class="underline hover:text-[var(--prompt)]">${project.liveUrl}</a>`);
            if (project.githubUrl) newHistory.push(`Code: <a href="${project.githubUrl}" target="_blank" class="underline hover:text-[var(--prompt)]">${project.githubUrl}</a>`);
            newHistory.push('--------------------');
        } else {
            newHistory.push(`Error: Project '${slug}' not found. Use 'ls' to see available project IDs.`);
        }
        break;
      case 'about':
        newHistory.push('This is an interactive terminal to showcase my projects.');
        newHistory.push('Built with Next.js, React, and Tailwind CSS.');
        break;
      case 'theme':
        const themeArg = args[0];
        if (themeArg === 'list') {
            newHistory.push('Available themes: ' + Object.keys(themes).join(', '));
        } else if (themeArg && themes[themeArg as keyof typeof themes]) {
            setTheme(themeArg);
            newHistory.push(`Theme changed to ${themeArg}.`);
        } else {
            newHistory.push('Usage: `theme [name]` or `theme list`');
        }
        break;
      case 'date':
        newHistory.push(new Date().toLocaleString());
        break;
      case 'echo':
        newHistory.push(input.substring(5));
        break;
      case 'exit':
        newHistory.push('Switching to standard mode...');
        setTimeout(onExit, 300);
        break;
      case 'sudo':
        newHistory.push('Permission denied... just kidding! You have full access.');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'animate':
        setIsAnimating(true);
        newHistory.push('Starting animation...');
        setTimeout(() => setIsAnimating(false), 5000);
        break;
      default:
        if (input.trim() === '') {
            newHistory.pop(); // Remove the empty prompt line
        } else {
            newHistory.push(`Command not found: ${command}. Type 'help' for commands.`);
        }
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div 
        className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl border transition-colors" 
        onClick={handleFocus}
        style={themes[theme as keyof typeof themes] as React.CSSProperties}
    >
      {isAnimating && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-20 h-20 border-4 border-t-cyan-400 border-r-fuchsia-500 border-b-purple-500 border-l-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="flex items-center p-3 rounded-t-lg" style={{ backgroundColor: 'var(--header-bg)'}}>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center text-sm" style={{ color: 'var(--muted-text)'}}>projects-terminal</div>
        <div className="text-xs" style={{ color: 'var(--muted-text)'}}>Click to focus</div>
      </div>

      <div 
        ref={terminalBodyRef} 
        className="h-80 p-4 overflow-y-auto font-mono text-sm terminal-scrollbar"
        style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
      >
        <div className="mb-2 font-bold" style={{ color: 'var(--green)'}}>Terminal Projects</div>
        {history.map((line, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: line.startsWith('>') ? `<span style="color: var(--prompt)">${line.split(' ')[0]}</span> ${line.substring(line.indexOf(' ') + 1)}` : line }} />
        ))}
        <div className="flex items-center gap-2 mt-2">
          <span style={{ color: 'var(--green)'}}>&gt;</span>
          <form onSubmit={handleCommand} className="flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent border-none outline-none p-0"
              style={{ color: 'var(--text)'}}
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </form>
          <div className="animate-terminal-cursor w-2 h-4" style={{ backgroundColor: 'var(--green)'}}></div>
        </div>
      </div>
      
       <div className="p-2 rounded-b-lg text-right text-xs" style={{ backgroundColor: 'var(--header-bg)', color: 'var(--muted-text)'}}>
          Type 'help' for commands
      </div>
    </div>
  );
};

export default ProjectTerminal;
