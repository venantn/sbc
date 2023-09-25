import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import './calendar.css'; // Import CSS for styling
import moment from 'moment';
const localizer = momentLocalizer(moment); // You'll need to import the 'moment' library

const holidays = [
    {
      title: 'New Year',
      start: new Date(2023, 0, 1), // January 1, 2023
      end: new Date(2023, 0, 1),
    },
    {
      title: 'Independence Day',
      start: new Date(2023, 6, 4), // July 4, 2023
      end: new Date(2023, 6, 4),
    },
    // Add more holidays as needed
  ];

function MyCalendar() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={holidays}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }} // Adjust the height as needed
      />
    </div>
  );
}

export default MyCalendar;
