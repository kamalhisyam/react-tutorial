import React from 'react';
import  "./HomePage.scss";
import menuItem from '../components/menu-item';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <menuItem/>
            <menuItem/>
            <menuItem/>
            <menuItem/>
            <menuItem/>
        </div>
    </div>
);

export default HomePage;