import React, { useState } from 'react';

export function ShowUserById() {
    const [id, setId] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8081/user/show/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user:', error));
    };

    return (
        <div>
            <h2>Show User by ID</h2>
            <form onSubmit={handleSubmit}>
                <label>User ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                <button type="submit">Show User</button>
            </form>
            {user && (
                <div>
                    <h3>User Details</h3>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
}
