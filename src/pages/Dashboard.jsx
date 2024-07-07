


import React from 'react';
import SummaryCard from '../components/SummaryCard';
import Graph from '../components/Graph';
import CalendarComponent from '../components/CalendarComponent';
import { Profile } from '../components/Profile';

export const Dashboard = () => {
  const summaryData = [
    { title: 'Total Members', count: 0 },
    { title: 'Total Admin', count: 0 },
  ];

  return (
    <div className="p-2 pt-0 pl-0 w-full">
      <div className="flex justify-end w-full bg-custom-blue p-2 mt-0 pt-0">
        <Profile />
      </div>
      <div className="bg-white shadow-lg rounded-lg border-t-4 border-b-4 p-4">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <section className="flex justify-around mt-4 md:w-3/4">
            {summaryData.map((data, index) => (
              <SummaryCard key={index} title={data.title} count={data.count} />
            ))}
          </section>
        </div>
      </div>

      <section className="m-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Graph />
        <CalendarComponent />
      </section>
    </div>
  );
};

export default Dashboard;
