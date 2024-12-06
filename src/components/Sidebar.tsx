import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange, isOpen }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
    { id: 'contact', label: 'Contact Us', icon: '📞' },
  ];

  return (
    <div className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => onPageChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}; 