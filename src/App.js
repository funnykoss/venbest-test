/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useState, useEffect } from 'react';
import s from './App.css';
import * as usersApi from './services/usersApi';

import Filter from './components/Filter';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    usersApi.getUsers().then(({ data }) => setUsers(data));
  }, []);

  const handleClick = event => {
    console.log(event.target.name);
  };

  const onInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setFilter(value);
        break;

      case 'lastname':
        setFilter(value);
        break;

      case 'age':
        setFilter(value);
        break;
      default:
        return;
    }
  };

  const normalizeName = filter.toLowerCase();
  const ageUsers = Number(filter);
  const filterUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(normalizeName) ||
      user.lastname.toLowerCase().includes(normalizeName) ||
      user.age === ageUsers,
  );

  return (
    <section className={s.section}>
      <Filter value={filter} onChange={onInputChange} onClick={handleClick} />
      {users && <UsersList users={filterUsers} />}
    </section>
  );
}

export default App;
