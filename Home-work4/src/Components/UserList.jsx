import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users)).catch(error => console.error('ошибка загрузки данных', error));
    }, [])

    return (
        <div>
            <h2>задание 2</h2>
            {users.map(user => (<div key={user.id}>
                {user.name}</div>
            ))}
        </div>
    );
}
export default UserList
