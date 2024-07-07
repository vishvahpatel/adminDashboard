
import React from 'react';

export const Profile = () => {
  return (
    <div className="flex items-center space-x-4 p-4 ">
      <img
        className="w-10 h-10 md:w-12 md:h-12 rounded-full"
        src="https://via.placeholder.com/50"
        alt="Admin Profile"
      />
      <div>
        <h2 className="font-semibold text-base md:text-lg">Admin Name</h2>
        <p className="text-sm text-gray-500">abc@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;

