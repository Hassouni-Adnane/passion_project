import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import background1 from './../tools/background_1.jpg'; // Adjust paths to backgrounds as needed

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
  background-image: url(${background1});
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
    background-color: rgba(0, 100, 0, 0.3);
    pointer-events: none;
    z-index: 1;
  }
`;

const Label = styled.div`
  display: flex;
  border-radius: 10%;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 10px;
  z-index: 2;
  position: relative;
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

function Glasses() {
  const navigate = useNavigate();
  const [glasses, setGlasses] = useState([]);

  const handleInsert = () => {
    navigate('/insert-glass'); // Navigate to insert page for glasses
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8082/glasses/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log(`Glasses with ID ${id} deleted`);
          setGlasses(glasses.filter(glass => glass.id !== id)); // Remove glasses from state
        } else {
          console.error('Error deleting glasses');
        }
      })
      .catch(error => console.error('Error deleting glasses:', error));
  };

  useEffect(() => {
    fetch('http://localhost:8082/glasses/show')
      .then(response => response.json())
      .then(data => setGlasses(data))
      .catch(error => console.error('Error fetching glasses:', error));
  }, []);

  return (
    <Container>
      <H1>Glasses</H1>
      <Wrapper>
        {glasses.map(glass => (
          <Label key={glass.id}>
            <P>{glass.model}</P> {/* Replace with relevant field for glasses */}
            <Update onClick={() => alert(`Update glass ${glass.id}`)}>!</Update>
            <Delete onClick={() => handleDelete(glass.id)}>X</Delete>
          </Label>
        ))}
        <Label>
          <Insert onClick={handleInsert}>INSERT</Insert>
        </Label>
      </Wrapper>
    </Container>
  );
}

export default Glasses;
