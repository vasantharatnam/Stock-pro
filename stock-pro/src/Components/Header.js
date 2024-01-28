import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({isLoged}) => {
    
  return (
    <div className = "container pt-5" style={{ maxWidth:'650px',fontFamily: 'Poppins', color: 'white', textAlign:'center' , }}>
          <div class= "text">
          <span style= {{letterSpacing:'5px'}}>{isLoged ? "Welcome to " : ""}Stock-Pro</span>
            <h1>Your Professional Financial Advisor</h1>
            {isLoged ? (<></>) : 
            (<>
            <Link to="/signup" style={{textDecoration:'none'}}>
              <a className='btn btn-info'>Get started</a>
            </Link>
            </>)}
          </div>     
    </div>
  )
}

export default Header
