import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => {
    return (
        <div className="sidebar">
            <button onClick={() => onSelect('terms')}>Terms and Conditions</button>
            <button onClick={() => onSelect('cancellation')}>Cancellation and Refund Policy</button>
            <button onClick={() => onSelect('shipping')}>Shipping and Delivery Policy</button>
        </div>
    );
};

export default Sidebar;
