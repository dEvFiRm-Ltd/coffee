import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Sidebar from '../Sidebar';
import './main.css';

const Content = () => {
    return (
        <div className="page-content pt-0">
            <Sidebar />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
};

export default Content;
