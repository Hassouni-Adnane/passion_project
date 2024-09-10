import React, { useState } from 'react';

export function DeleteData() {
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8081/user/delete/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log(`User with ID ${id} deleted`);
            } else {
                console.error('Error deleting user');
            }
        })
        .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <div>
            <h2>Delete User</h2>
            <form onSubmit={handleSubmit}>
                <label>User ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                <button type="submit">Delete User</button>
            </form>
        </div>
    );
}
