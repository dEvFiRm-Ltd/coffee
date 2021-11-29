import React from 'react';
import '../../vendor/css/all.css';
import '../../vendor/css/icons/icomoon/styles.min.css';
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
