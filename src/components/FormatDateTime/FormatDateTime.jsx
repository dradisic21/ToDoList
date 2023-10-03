import React from 'react';
import "../../styles/FormatDateTime.scss"

const options = {
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
};

export function FormatDateTime({ created }) {
  const dateObject = new Date(created); 

  const formattedDate = dateObject.toLocaleString('hr-HR', options);

  const [date, month, time] = formattedDate.split(' ');

  return (
    <>
      <span>{date}</span>
      <div className="month">{month}</div>
      <div className="time">{time}</div>
    </>
  );
}
