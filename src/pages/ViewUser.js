import React from 'react';
import { useParams } from 'react-router-dom';

export const ViewUser = () => {
  const { id } = useParams();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Status: {user.status}</p>
      
    </div>
  );
};


