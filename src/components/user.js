import React, { useEffect, useState } from "react";
import { getAllUsersFromServer } from '../data/api';

export const User = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const users = await getAllUsersFromServer();
        setUsers(users.data);
        console.log(users);
    }
    useEffect(() => {
        getUsers();
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
