import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

// SVGs para os ícones (Copied from previous working state)
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[color:var(--foreground)]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-[color:var(--background)] shadow-sm py-4 px-6 flex justify-end items-center w-full">
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button
          className="text-gray-500 dark:text-darkText2 hover:text-gray-700 dark:hover:text-darkText"
          aria-label="User profile"
        >
          <UserIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
