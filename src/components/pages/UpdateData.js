import React, { useState } from 'react';

export function UpdateData() {
    const [id, setId] = useState('');
    const [user, setUser] = useState({ name: ''});

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8081/user/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
            console.log('User updated:', data);
        })
        .catch(error => console.error('Error updating user:', error));
    };

    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <label>User ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                <label>Name:</label>
                <input name="name" type="text" value={user.name} onChange={handleChange} required />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
}
