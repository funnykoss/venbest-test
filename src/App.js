/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import { useState, useEffect } from 'react';
import s from './App.css';
import * as usersApi from './services/usersApi';
// import Users from './components/Users';
// import shortid from 'shortid';

import Filter from './components/Filter';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [checkedUsers, setCheckedUsers] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  useEffect(() => {
    usersApi.getUsers().then(({ data }) => setUsers(data));
  }, []);
  const onChange = event => {
    setFilter(event.target.value);
  };

  const handleChange = event => {
    console.log(event.currentTarget.value);
    setCheckedUsers(event.currentTarget.checked);
  };
  const genderFilter = event => {
    switch (event.currentTarget.value) {
      case 'male':
        setMale(users.filter(user => user.sex === 'm'));

        break;
      case 'female':
        setMale(users.filter(user => user.sex === 'f'));

        break;
      default:
        return;
    }
  };
  const normalizeContacts = filter.toLowerCase();
  const ageUsers = Number(filter);
  const filterUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(normalizeContacts) ||
      user.age === ageUsers,
  );

  return (
    <section className={s.section}>
      <Filter value={filter} onChange={onChange} handleChange={handleChange} />
      {users && <UsersList users={filterUsers} />}
    </section>
  );
}

export default App;
