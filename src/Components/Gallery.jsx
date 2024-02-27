// import React from 'react'

// function Gallery() {
//   return (
//     <div>
//       Gallery
//     </div>
//   )
// }

import React, { useState } from 'react';

function Gallery() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [purposeOfVisit, setPurposeOfVisit] = useState('');
  const [description, setDescription] = useState('');

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here
    console.log({
      selectedDate,
      name,
      phoneNumber,
      purposeOfVisit,
      description,
    });
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const days = daysInMonth(month, year);
    const startingDay = firstDayOfMonth(month, year);

    let calendarRows = [];
    let currentRow = [];
    let blankDays = startingDay;

    while (blankDays > 0) {
      currentRow.push(<div className="day"></div>);
      blankDays--;
    }

    for (let day = 1; day <= days; day++) {
      const isSelected = day === selectedDate.getDate();
      currentRow.push(
        <div
          className={`day ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(new Date(year, month, day))}
        >
          {day}
        </div>
      );

      if (currentRow.length === 7) {
        calendarRows.push(<div className="calendar-row">{currentRow}</div>);
        currentRow = [];
      }
    }

    if (currentRow.length > 0) {
      for (let i = 0; i < 7 - currentRow.length; i++) {
        currentRow.push(<div className="day"></div>);
      }
      calendarRows.push(<div className="calendar-row">{currentRow}</div>);
    }

    return calendarRows;
  };

  return (
    <div className="calendar">
      <h2>Select Reservation Date</h2>
      <div className="calendar-grid">{renderCalendar()}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="phoneNumber">Phone number*</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label htmlFor="purposeOfVisit">Purpose of Visit</label>
        <textarea
          id="purposeOfVisit"
          value={purposeOfVisit}
          onChange={(e) => setPurposeOfVisit(e.target.value)}
        />
        <label htmlFor="description">Description (No. of guest, Transportation etc)</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}



export default Gallery
