import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
  scroll-behavior: smooth;
  overflow: auto; /* Changed to auto to allow scrolling */
`;

const FormWrapper = styled.form`
  background-color: white;
  padding: 40px 60px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 70vh;
  overflow: auto; /* Allows scrolling when content overflows */
`;

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid gray;
  
  &:invalid[focused="true"] {
    border: 1px solid red;
  }
`;

const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
  
  ${Input}:invalid[focused="true"] ~ & {
    display: block;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
`;

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    date: '',
    username: '',
    email: '',
    FirstOrder: '',
  });

  const [focused, setFocused] = useState({
    name: false,
    phoneNumber: false,
    date: false,
    username: false,
    email: false,
    birthday: false,
    password: false,
    confirmPassword: false
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage: "It should be a valid phone number!",
      label: "Phone Number",
      required: true,
    },
    {
      id: 3,
      name: "date",
      type: "date",
      placeholder: "Date of order",
      label: "Date of order",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (e) => {
    setFocused({
      ...focused,
      [e.target.name]: true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8081/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <h1>INSERT</h1>
        {inputs.map((input) => (
          <FormInputWrapper key={input.id}>
            <Label>{input.label}</Label>
            <Input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name]}
              pattern={input.pattern}
              required={input.required}
              onChange={handleChange}
              onBlur={handleFocus}
              onFocus={() => input.name === "confirmPassword" && setFocused({ ...focused, confirmPassword: true })}
              focused={focused[input.name]?.toString() || "false"} /* Safe check with optional chaining */
            />
            <ErrorMessage>{input.errorMessage}</ErrorMessage>
          </FormInputWrapper>
        ))}
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormWrapper>
    </Container>
  );
}

export default Form;
