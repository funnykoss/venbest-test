import React from "react";

import shortid  from 'shortid';
import Users from '../Users'



const UsersList = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <Users
                    key={shortid.generate()}
                    name={user.name}
                    lastname={user.lastname}
                    age={user.age}
                    sex={user.sex}
                />
            ))}
        </>
    )
}

export default UsersList