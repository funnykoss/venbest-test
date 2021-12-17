/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import s from './App.module.css';
import * as usersApi from './services/usersApi';

import Filter from './components/Filter';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState('');

  useEffect(() => {
    usersApi.getUsers().then(({ data }) => setUsers(data));
  }, []);

  const handleClick = event => {
    const { value, checked } = event.target;
    switch (value) {
      case 'male':
        setChecked(checked);
        setGender(value);
        break;

      case 'female':
        setChecked(checked);
        setGender(value);
        break;

      default:
        break;
    }
  };

  const getFilter = () => {
    if (gender === 'male') {
      const maleFilter = users.filter(user => user.sex === 'm');
      return maleFilter;
    }
    if (gender === 'female') {
      const femaleFilter = users.filter(user => user.sex === 'f');
      return femaleFilter;
    }
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

  const genderFiler = getFilter();

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
      {users && !checked ? (
        <UsersList users={filterUsers} />
      ) : (
        <UsersList users={genderFiler} />
      )}
    </section>
  );
}

export default App;
