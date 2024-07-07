
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const customGreen = '#23eaa1a9';
const holidayRed = '#FF0000';

const holidays = [
  new Date(2024, 0, 1), // Example: New Year's Day
  new Date(2024, 11, 25), // Example: Christmas Day
  // Add more holidays as needed
];

export const CalendarWrapper = styled.div`
  .react-calendar {
    width: 100%;
    max-width: 500px; /* Adjust max-width as needed */
    height: 400px; /* Adjust height as needed */
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .react-calendar__navigation button {
    color: ${customGreen};
    font-size: 1rem;
    margin-top: 8px;
    border: none;
    background: none;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e0f7fa;
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${customGreen};
  }

  .react-calendar__tile {
    padding: 10px;
    background: none;
    border: none;
  }

  .react-calendar__tile--active {
    background: #4a90e2;
    color: white;
    border-radius: 4px;
  }

  .react-calendar__tile--now {
    background: #e0f7fa;
    border-radius: 4px;
  }

  .react-calendar__tile--now:hover,
  .react-calendar__tile--active:hover {
    background: #007bb5;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
    color: ${customGreen};
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${customGreen};
  }

  .react-calendar__month-view__weekdays__weekday,
  .react-calendar__navigation__label {
    color: ${customGreen};
  }
`;

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const isHoliday = (date) => {
    return holidays.some(
      (holiday) =>
        date.getDate() === holiday.getDate() &&
        date.getMonth() === holiday.getMonth() &&
        date.getFullYear() === holiday.getFullYear()
    );
  };

  return (
    <CalendarWrapper>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) =>
          isHoliday(date) ? 'holiday' : ''
        }
        tileContent={({ date }) => (
          <div
            style={{
              color: isHoliday(date) ? holidayRed : '',
              color:
                date.getDay() >= 1 && date.getDay() <= 5
                  ? customGreen
                  : '',
            }}
          />
        )}
      />
    </CalendarWrapper>
  );
};

export default CalendarComponent;
