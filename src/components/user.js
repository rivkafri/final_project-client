import React, { useEffect, useState } from "react";
import { getAllUsersFromServer } from '../data/api';

export const User = () => {
    const [users, setUsers] = useState({});
    useEffect(() => {
        const users = getAllUsersFromServer();
        setUsers(users);
    }, []);
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li id="li" key={user.id} >
                        <h1>{user.name}</h1>
                    </li>
                ))};
            </ul>
        </div>
    );
};
