import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PopupContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    background-color: aqua; /* Matching NavBar background color */
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1); /* Same shadow as NavBar */
    border-radius: 5px;
`;

const PopupButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`;

const PopupMenu = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 50px;
    right: 10px;
    background: white;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
    z-index: 10;
    padding: 10px;
    border-radius: 5px;
`;

const MenuItem = styled.div`
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
    
    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: #f0f0f0;
    }

    a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
        transition: color 0.3s ease;

        &:hover {
            color: #4CAF50;
        }
    }
`;

function PopupMenuComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <PopupContainer>
            <PopupButton onClick={togglePopup}>Menu</PopupButton>
            <PopupMenu isOpen={isOpen}>
                <MenuItem><Link to="/users">Users Info</Link></MenuItem>
                <MenuItem><Link to="/glasses">glasses Info</Link></MenuItem>
            </PopupMenu>
        </PopupContainer>
    );
}

export default PopupMenuComponent;
