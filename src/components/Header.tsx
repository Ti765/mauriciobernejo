import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center w-full">
      <nav className="flex space-x-4">
        <a href="#" className="text-gray-500 hover:text-gray-700">Tab</a>
        <a href="#" className="text-gray-500 hover:text-gray-700">Tab</a>
        <a href="#" className="text-gray-500 hover:text-gray-700">Tab</a>
      </nav>
      <button className="bg-cta-bg text-cta-text px-4 py-2 rounded-md text-xs font-semibold hover:bg-gray-700">
        Call to action
      </button>
    </header>
  );
};

export default Header;
