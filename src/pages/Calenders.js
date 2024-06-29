// src/pages/Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Typography } from '@mui/material';
import './Calenders.css';

const Calendar = () => {
  const handleDateClick = (arg) => {
    alert('Date clicked: ' + arg.dateStr);
  };

  return (
    <div>
      <Typography variant="h4">Calendar</Typography>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Calendar;