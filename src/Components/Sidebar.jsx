import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                <i className={`fas fa-bars ${isOpen ? 'open' : ''}`}></i>
            </div>
            <div className="sidebar-header">
                <h2>Menu</h2>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <a href="#">
                        <div className="sidebar-item">
                            <i className="fas fa-home"></i>
                            <span>Dashboard</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="sidebar-item">
                            <i className="fas fa-user-graduate"></i>
                            <span>Students</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="sidebar-item">
                            <i className="fas fa-poll"></i>
                            <span>Results</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="sidebar-item">
                            <i className="fas fa-book"></i>
                            <span>Courses</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="sidebar-item">
                            <i className="fas fa-cog"></i>
                            <span>Settings</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
