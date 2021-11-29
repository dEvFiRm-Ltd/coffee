import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './main.css';

const Content = () => {
    return (
        <div className="page-content pt-0">
            <Outlet />
            <Sidebar />
        </div>
    );
};

export default Content;
