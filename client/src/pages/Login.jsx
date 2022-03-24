import React , { useState }from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { mobile } from "../utils/responsive";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/N9rT2Hy/back-login.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ backgroundPosition: "70%" })}
`;



const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Alert = styled.span`
  color: red;
`;


const Login = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: {...userFormData} 
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      username: '',
      password: '',
    });
  };

  return (
    
    <Container>
    
      <Wrapper>
        <Title>LOGIN - Welcome Back!</Title>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
          <Input 
            type='text'
            placeholder="username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
           />
          
          <Input 
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
           />
  
          <Button
          disabled={!(userFormData.username && userFormData.password)}
          type='submit'
          variant='success'>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link to="/signup">CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
