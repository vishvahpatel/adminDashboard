import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.id === parseInt(id));

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [status, setStatus] = useState(user.status);

  const handleSave = () => {
    const updatedUser = { ...user, name, email, status };
    const updatedUsers = users.map(u => (u.id === parseInt(id) ? updatedUser : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    history.push('/users');
  };

  return (
    <div>
      <h1>Edit User</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={status} onChange={(e) => setStatus(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};


