import React, { useEffect, useState } from 'react';

export function ShowData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/user/show')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h2>All Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}
