import React, { useState } from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import getLogin from '../apiHelper/getLogin';
import {useNavigate} from 'react-router-dom';
import Layout from './Layout';
import {Link} from 'react-router-dom'
// import { useHref } from 'react-router-dom';

const Login = ({onLogin, isLoged}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState('');
  const history = useNavigate();


  const handleLogin = async(e) => {
    // Handle login logic here
    e.preventDefault();
    try {
      const loginResult = await getLogin(username, password);
  
      console.log(loginResult,"in login page");

      if (loginResult) {
        console.log('Logging in with:', { username, password });
        onLogin(true);
        setIsLogin(true);
        history('/');
      } else {    
        console.log('Wrong Password or Username');
        // onLogin(false);
        setMessage('Wrong Password or Username');
        history('/login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other errors if needed
    }

    
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot Password clicked');
  };

  // Define styles as separate variables
  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    paddingTop:'20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    padding: '8px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const forgotPasswordStyle = {
    marginTop: '10px',
    textAlign: 'right',
    textDecoration: 'underline',
    cursor: 'pointer',
    color: '#007bff',
  };
  
  return (
    <Layout isLoged = {isLogin}>
    <div className="pt-5">
    <div style={containerStyle}>
      <h2 style = {{color: 'white' , textAlign: 'center'}}>Login</h2>
      <form method='post' onSubmit={handleLogin} style={formStyle}>
        <label htmlFor="username" style={{  color : 'white' , marginBottom: '8px' }}>
          Username
          <FontAwesomeIcon icon={faUser} style={{ marginLeft: '250px' }} />
        </label>

        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle} required/>

        <label htmlFor="password" style={{ color : 'white' ,marginBottom: '8px' }}>
          Password
          <FontAwesomeIcon icon={faLock} style={{ marginLeft: '255px' }} />
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          />

        <button type="submit" style={buttonStyle}>
          Login
        </button>
        
          <Link to ="/forgot-password">
           <a> Forgot Password?</a>
          </Link>

      </form>
    </div>
    </div>
    <p style={{ color: 'white',fontstyle: 'bold' ,marginTop: '10px',textAlign: 'center'}}>{message}</p>
          </Layout>
  );
};

export default Login;
