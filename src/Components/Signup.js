import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getSignin } from '../apiHelper/getSignin';
import {useNavigate} from 'react-router-dom';
import Layout from './Layout';
const Signup = ({isLoged}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const history = useNavigate();


  const handleSignup = async(e) => {
    // Handle signup logic here
    e.preventDefault();

    try{
      const added = await getSignin(username,email,password);
    
      if(added) {
        console.log('Successfully Added Person', {username, email});
        history('/login');
      } else {
        console.log('Error in Inserting person');
        setIsLogin(false);
        history('/signup');
      }
      
    }
    catch(error){
      console.log('Error in Inserting person');
    }

  };

  // Define styles as separate variables (similar to the Login component)

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const formStyle = {
    color: 'white',
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  };

  const inputStyle = {
    padding: '8px',
    marginBottom: '16px',
    width: '100%',
  };

  const iconStyle = {
    marginLeft: '8px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  const alreadyHaveAccountStyle = {
    marginTop: '16px',
    textAlign: 'center',
    color: '#fff',
    cursor: 'pointer',
  };

  const handleAlreadyHaveAccount = () => {
    // Handle navigation to the login page or other actions
    console.log('Navigate to login page or perform other actions');
  };

  return (
    <Layout isLoged = {isLogin}>

        <div style={containerStyle}>
      <form method='post' onSubmit={handleSignup} style={formStyle}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Signup</h2>
        <label htmlFor="username" style={labelStyle}>
          Username
          <FontAwesomeIcon icon={faUser} style={iconStyle} />
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
          required
          />

        <label htmlFor="email" style={labelStyle}>
          Email
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
          />

        <label htmlFor="password" style={labelStyle}>
          Password
          <FontAwesomeIcon icon={faLock} style={iconStyle} />
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
          />

        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>

        <div
          style={alreadyHaveAccountStyle}
          onClick={handleAlreadyHaveAccount}
          >
          Already have an account? <span style={{ fontStyle: 'italic', fontWeight:'bold' }}><a href="/login">Click here.</a></span>
        </div>
      </form>
    </div>
          </Layout>
  );
};

export default Signup;
