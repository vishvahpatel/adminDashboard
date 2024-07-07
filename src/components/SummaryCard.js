
import React from 'react';

const SummaryCard = ({ title, count }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md inline-flex items-center justify-between w-auto transition-transform duration-300 hover:scale-105 mb-5">
  <h4 className="text-cyan-500 text-lg md:text-xl mb-0">
    {title}: <span className="text-gray-800 text-xl md:text-2xl ml-1">{count}</span>
  </h4>
</div>

  
  );
};

export default SummaryCard;
