'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-pantone-text/5 dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5 text-pantone-coral" />
      ) : (
        <Moon className="w-5 h-5 text-pantone-blue" />
      )}
    </button>
  );
}
