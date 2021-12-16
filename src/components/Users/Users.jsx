import React from "react";

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