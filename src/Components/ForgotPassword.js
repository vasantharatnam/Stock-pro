import  React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';


const ForgotPassword =  () => {
    
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useNavigate();


    const handleForgotPassword = async () => {
        try {
            console.log('Forgot ',email);
          const response = await axios.post('/verificationCode', { email:email });
          
            console.log("datiko ", response );

          if(response.data === 'Verification code sent successfully'){
            setMessage('Verification code sent successfully');
            return;
          }
          else if(response.data === 'Verification code')
          {
            setMessage('Email not found in the database');
          }else{

              setMessage('Internal Server Error');
          }
          
        } catch (error) {
          console.error(error);
          setMessage('Error sending verification code');
        }
      };
    
      const handleResetPassword = async () => {
        try {

            console.log('Reset ',email, verificationCode, newPassword);
          const response = await axios.post('/newPassword', { email, verificationCode, newPassword });
          
          if(response.data === 'Password reset successfully')
          {
            console.log(response);
            setMessage('Password reset successfully');
            history('/login');
          }
          else
          {
            setMessage('Password reset error');
          }
        } catch (error) {
          console.error(error);
          setMessage('Error resetting password');
        }
      };

      const inputStyle = {
        padding: '10px',
        margin: '10px',
        width: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      };
      
      const buttonStyle = {
        padding: '10px',
        margin: '10px',
        width: '200px',
        borderRadius: '5px',
        background: 'blue',
        color: 'white',
        cursor: 'pointer',
      };


    return (
        <Layout>
        <div style={{display: 'flex',flexDirection:"column", justifyContent: 'center',alignItems:'center',paddingTop:'50px'}}>
            <h2 style={{color: 'white'}}>Forgot Password</h2>
      <input 
        type="email"
        placeholder="Enter email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        style={inputStyle}
        />
      <button style={buttonStyle} onClick={handleForgotPassword}>Send Verification Code</button>

      <input
        type="text"
        placeholder="Enter verification code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        style={inputStyle}
        />

      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={inputStyle}
        />

      <button style={buttonStyle} onClick={handleResetPassword}>Reset Password</button>
      <p style={{ color: 'white', marginTop: '10px' }}>{message}</p>
        </div>
        </Layout>
    )
}

export default ForgotPassword;