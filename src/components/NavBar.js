import React from 'react';
import styled from 'styled-components';
import logo from './../tools/logo.jpg'; // Ensure this path is correct
import PopupMenuComponent from './PopupMenuComponent'; // Import the popup menu

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: aqua;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 1200px;
  padding: 10px;
`;

const Language = styled.button`
  background-color: antiquewhite;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px 15px;
  cursor: pointer;
  width: 60px;
  height: 30px;
`;

const Logo = styled.img`
  height: 50px;
  margin: 10px;
`;

function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Label>
          <Language>EN</Language>        
        </Label>
        <Logo src={logo} alt="Logo" />
        <PopupMenuComponent /> {/* Added the popup menu here */}
      </Wrapper>
    </Container>
  );
}

export default NavBar;
