// src/data/users.js

export let users = JSON.parse(localStorage.getItem('users')) || [];

export const saveUsers = (newUsers) => {
  users = newUsers;
  localStorage.setItem('users', JSON.stringify(users));
};
