import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { mobile } from "../utils/responsive";

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/NCmJRVC/back-signup.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Alert = styled.span`
  color: red;
`;


const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  // define mutation for adding a user
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
          <Input 
            placeholder="name"
            type='name'
            onChange={handleInputChange}
            value={userFormData.name}
            required 
          />
          <Input 
            placeholder="last name"
            type='last name'
            onChange={handleInputChange}
            value={userFormData.lastName}
            required  
          />
          <Input 
            placeholder="username" 
            type='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required 
            />
          <Input 
            placeholder="email" 
            type='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required 
            />
          <Input 
            placeholder="password" 
            type='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required 
            />
          <Input 
            placeholder="confirm password" 
            type='confirmPassword'
            onChange={handleInputChange}
            value={userFormData.confirmPassword}
            required 
            />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            CREATE
            </Button>
            {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signup;