import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Sidebar } from './Sidebar';
import './MainContent.css';

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-content">
      <nav className="navbar">
        <div className="nav-left">
          <button onClick={toggleSidebar} className="sidebar-toggle">
            {isSidebarOpen ? '◀' : '▶'}
          </button>
          <div className="user-info">
            Welcome, {user?.username}!
          </div>
        </div>
        <div className="nav-controls">
          <div className="theme-control">
            <span className="theme-text">Theme: <span className="theme-value">{theme}</span></span>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      </nav>
      <div className="layout">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`main-area ${!isSidebarOpen ? 'sidebar-collapsed' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
}; 