// src/pages/AllUsers.js

/*import React, { useEffect, useState } from 'react';
import { users } from '../data/users';
import { FaEye, FaEdit, FaTrash} from 'react-icons/fa';

export const AllUsers = () => {
  const [allUsers, setAllUsers] = useState(users);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(storedUsers);
  }, []);

  return (
    <div className="p-4 ml-[5%] ">
      <h1 className="text-2xl mb-4">All Users</h1>
      <table className="min-w-full border-collapse bg-white shadow-lg w-[1000px]">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Status</th>
           
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.length > 0 ? (
            allUsers.map((user) => (
              <tr key={user.id} className="text-center border-t">
                <td className="py-2 px-4 border">{user.id}</td>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.status}</td>
                
                <td className="py-2 px-4 border">
                <button className="bg-green-500 text-white py-1 px-2 rounded mr-2">
                    <FaEye />
                  </button>
                  <button className="bg-yellow-500 text-white py-1 px-2 rounded mr-2">
                    <FaEdit />
                  </button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-2 px-4 border text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

*/

/*import React, { useEffect, useState } from 'react';
import { users } from '../data/users';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

export const AllUsers = () => {
  const [allUsers, setAllUsers] = useState(users);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(storedUsers);
  }, []);

  return (
    <div className="p-4 md:ml-5 md:mr-5">
      <h1 className="text-2xl mb-4 text-center">All Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse shadow-md">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.length > 0 ? (
              allUsers.map((user) => (
                <tr key={user.id} className="text-center border-t">
                  <td className="py-2 px-4 border">{user.id}</td>
                  <td className="py-2 px-4 border">{user.name}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                  <td className="py-2 px-4 border">{user.status}</td>
                  <td className="py-2 px-4 border">
                    <div className="flex justify-center space-x-2">
                      <button className="bg-green-500 text-white py-1 px-2 rounded">
                        <FaEye />
                      </button>
                      <button className="bg-yellow-500 text-white py-1 px-2 rounded">
                        <FaEdit />
                      </button>
                      <button className="bg-red-500 text-white py-1 px-2 rounded">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 border text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
*/


import React, { useEffect, useState } from 'react';
import { users } from '../data/users';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

export const AllUsers = () => {
  const [allUsers, setAllUsers] = useState(users);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(storedUsers);
  }, []);

  return (
    <div className="p-4 ml-[5%]">
      <h1 className="text-2xl mb-4">All Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white shadow-lg md:w-[700px] lg:w-[900px] xl:w-[1000px] mx-auto">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="py-2 px-4 border">USER ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.length > 0 ? (
              allUsers.map((user) => (
                <tr key={user.id} className="text-center border-t">
                  <td className="py-2 px-4 border">{user.id}</td>
                  <td className="py-2 px-4 border">{user.name}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                  <td className="py-2 px-4 border">{user.status}</td>
                  <td className="py-2 px-4 border">
                    <button className="bg-green-500 text-white py-1 px-2 rounded mr-2">
                      <FaEye />
                    </button>
                    <button className="bg-yellow-500 text-white py-1 px-2 rounded mr-2">
                      <FaEdit />
                    </button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 border text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
