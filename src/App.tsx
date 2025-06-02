import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import './index.css'; // Ensure Tailwind styles are imported

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar /> 
      <div className="flex-1 flex flex-col lg:ml-60 bg-white dark:bg-[color:var(--background)]">
        <Header />
        <DashboardContent /> 
      </div>
    </div>
  );
};

export default App;
