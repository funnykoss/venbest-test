import React from "react";
import PropTypes from 'prop-types';


import s from './Users.module.css'

 const Users=({name, lastname, age, sex})=> {
     return (
         <>
          <ul className={s.userList}>
              <li>{name}</li>
              <li>{lastname}</li>
              <li>{age}</li>
              <li>{sex}</li>
          </ul>
        </>
    )
 }

export default Users
 
Users.prototype = {
    name:PropTypes.string,
    lastname:PropTypes.string,
    age: PropTypes.number,
    sex:PropTypes.string, 
}