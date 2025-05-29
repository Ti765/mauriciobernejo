import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import './index.css'; // Ensure Tailwind styles are imported

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-60"> {/* Adjust ml-60 to match sidebar width */}
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default App;
