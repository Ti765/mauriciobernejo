import React from 'react';

// Placeholder icons - you can replace these with actual SVG icons or a library
const HomeIcon = () => <span className="w-5 h-5 text-[color:var(--sidebar-foreground)]">🏠</span>;
const BrowseIcon = () => <span className="w-5 h-5 text-[color:var(--sidebar-foreground)]">🔍</span>;
const NewsIcon = () => <span className="w-5 h-5 text-[color:var(--sidebar-foreground)]">📰</span>;

const NavItem = ({ icon, label, isActive }) => (
  <a
    href="#"
    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium 
                ${isActive 
                  ? 'bg-gray-200 dark:bg-[#2A2A2A] text-gray-900 dark:text-[color:var(--foreground)]' 
                  : 'text-gray-700 dark:text-[color:var(--muted-foreground)] hover:bg-gray-50 dark:hover:bg-[#313131] hover:text-gray-900 dark:hover:text-[color:var(--foreground)]'}`}
  >
    {icon}
    <span className="text-[color:var(--sidebar-foreground)]">{label}</span>
  </a>
);

const Sidebar = () => {
  return (
    <aside id="main-sidebar" className="w-60 bg-[color:var(--sidebar)] h-screen p-4 flex flex-col fixed top-0 left-0">
      <div className="text-2xl font-bold text-glip-deep-blue dark:text-[color:var(--foreground)] mb-8 pt-2">Glip 360°</div>
      <nav className="space-y-1">
        <div className="px-3 pb-2">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-[color:var(--muted-foreground)] uppercase tracking-wider mb-2">Discover</h3>
        </div>
        <NavItem icon={<HomeIcon />} label="Home" isActive={true} />
        <NavItem icon={<BrowseIcon />} label="Browse" isActive={false} />
        <NavItem icon={<NewsIcon />} label="News" isActive={false} />
      </nav>
    </aside>
  );
};

export default Sidebar;
