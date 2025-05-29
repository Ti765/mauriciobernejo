import React from 'react';

// Placeholder icons - you can replace these with actual SVG icons or a library
const HomeIcon = () => <span className="w-5 h-5">🏠</span>;
const BrowseIcon = () => <span className="w-5 h-5">🔍</span>;
const NewsIcon = () => <span className="w-5 h-5">📰</span>;

const NavItem = ({ icon, label, isActive }) => (
  <a
    href="#"
    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium 
                ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

const Sidebar = () => {
  return (
    <aside className="w-60 bg-sidebar-bg h-screen p-4 flex flex-col fixed top-0 left-0">
      <div className="text-2xl font-bold text-glip-deep-blue mb-8 pt-2">Glip 360°</div>
      <nav className="space-y-1">
        <div className="px-3 pb-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Discover</h3>
        </div>
        <NavItem icon={<HomeIcon />} label="Home" isActive={true} />
        <NavItem icon={<BrowseIcon />} label="Browse" isActive={false} />
        <NavItem icon={<NewsIcon />} label="News" isActive={false} />
      </nav>
    </aside>
  );
};

export default Sidebar;
