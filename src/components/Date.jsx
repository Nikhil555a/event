import React from 'react';

// You will need to import a calendar icon. Here's a placeholder.
import calendarIcon from '../assets/calendar_icon.webp'; 

const DateCard = ({ title, subtitle, icon }) => {
  return (
    
         <div className="flex items-center p-4 border border-gray-300 rounded-lg shadow-sm w-48 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <img src={calendarIcon} alt="calendar icon" className="w-8 h-8 ml-4" />
    </div>
   
 
  );
};

const Date = () => {
  // Data for the date cards
  const dates = [
    { title: 'Today', subtitle: 'Sep 19' },
    { title: 'Tomorrow', subtitle: 'Sep 20' },
    { title: 'This Weekend', subtitle: 'Sep 20 - 21' },
    { title: 'This Week', subtitle: 'Sep 15 - 21' },
    { title: 'Custom Date', subtitle: 'Pick Range' }
  ];

  // A placeholder for your calendar icon
  const calendarIcon = "URL_TO_YOUR_CALENDAR_ICON_IMAGE";

  return (
    <div className="p-8 w-[1200px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore events by date</h2>
      <div className="flex flex-wrap gap-4">
        {dates.map((date, index) => (
          <DateCard
            key={index}
            title={date.title}
            subtitle={date.subtitle}
            icon={calendarIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default Date;