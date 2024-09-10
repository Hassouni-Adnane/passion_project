import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Corrected import for navigation
import styled from 'styled-components';
import background1 from './../tools/background_1.jpg';
import background2 from './../tools/background_2.jpg';
import background3 from './../tools/background_3.jpg';
import background4 from './../tools/background_4.jpg';
import background5 from './../tools/background_5.jpg';

const Container = styled.div`
  margin: 20px;
  border-radius: 10px;
  min-height: 50vh;
  max-height: 90vh;
  background-color: lightgray;
  box-shadow: 1px 5px 3px;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-image: url(${background2}); /* Set background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px;
  background-color: aliceblue;
  width: 85vw;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  /* Optional: Use background image only here if needed */
  background-image: url(${background2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 100, 0, 0.3); /* Fog effect */
    pointer-events: none;
    z-index: 1; /* Ensure fog effect is behind content */
  }
`;

const Label = styled.div`
  display: flex;
  border-radius: 10%;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 10px;
  z-index: 2; /* Ensure content is above fog */
  position: relative; /* Creates a new stacking context */
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 40px;
`;

const Update = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: lightgreen;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 10px;
`;

const Delete = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: red;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 10px;
`;

const Insert = styled.button`
  height: 60px;
  border-radius: 10px;
  width: fit-content;
  background-color: lightblue;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

function TestMain() {
  const navigate = useNavigate(); // Correct useNavigate hook

  const [id, setId] = useState('');
  const [users, setUsers] = useState([]);

  const handleInsert = () => {
    navigate('/insert'); // Correct way to navigate
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/user/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log(`User with ID ${id} deleted`);
          setUsers(users.filter(user => user.id !== id)); // Remove user from local state
        } else {
          console.error('Error deleting user');
        }
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  useEffect(() => {
    fetch('http://localhost:8081/user/show')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <Container>
      <H1>Users</H1>
      <Wrapper>
        {users.map(user => (
          <Label key={user.id}>
            <P>{user.name}</P>
            <Update onClick={() => alert(`Update user ${user.id}`)}>!</Update>
            <Delete onClick={() => handleDelete(user.id)}>X</Delete>
          </Label>
        ))}
        <Label>
          <Insert onClick={handleInsert}>INSERT</Insert>
        </Label>
      </Wrapper>
    </Container>
  );
}

export default TestMain;
