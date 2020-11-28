import React from 'react';
import './menu-item.scss';

const menuItem = ({ title }) => (
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>BUY NOW</span>
        </div>
    </div>
);

export default menuItem;