import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/kanban">Kanban</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/color-picker">Color Picker</Link></li>
        <li><Link to="/line">Line Chart</Link></li>
        <li><Link to="/area">Area Chart</Link></li>
        <li><Link to="/bar">Bar Chart</Link></li>
        <li><Link to="/pie">Pie Chart</Link></li>
        <li><Link to="/color-mapping">Color Mapping</Link></li>
        <li><Link to="/pyramid">Pyramid Chart</Link></li>
        <li><Link to="/stacked">Stacked Chart</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
