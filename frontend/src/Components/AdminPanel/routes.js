import React from 'react';
import Content from './Content';
import Header from './Header';
import Navbar from './Navbar';

const AdminPanel = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Content />
        </>
    );
};

export default AdminPanel;
