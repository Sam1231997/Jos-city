// EventCard.js
import React from 'react';
// import Test from './Test';
// import Restaurant from './Restaurant';
const EventCard = ({ item, image,title, date, address }) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
      <img src={image[0]} alt={title} className="w-full min-h-48 object-cover lg:p-4" />
      <div className="p-4">
        <h3 className="text-[1rem] lg:text-xl font-bold text-gray-800 pb-2">{title}</h3>
        <p className="text-[.75rem] lg:text-[1rem] text-gray-600 pb-1">{address}</p>
        <p className="text-[.75rem] lg:text-[1rem] text-gray-600">{date}</p>
        <div className="flex items-center justify-between mt-4">
          <a href="details.html" className="bg-green-200 text-green-600 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:text-green-700 text-[.75rem] lg:text-[1rem]">More Info</a>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
