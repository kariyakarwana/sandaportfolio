"use client";
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-6 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800 shadow-md hover:scale-110 transition"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-green-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
