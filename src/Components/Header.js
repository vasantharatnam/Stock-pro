import React from 'react'

const Header = ({isLoged}) => {
    
  return (
    <div className = "container pt-5" style={{ maxWidth:'650px',fontFamily: 'Poppins', color: 'white', textAlign:'center' , }}>
          <div class= "text">
          <span style= {{letterSpacing:'5px'}}>{isLoged ? "Welcome to " : ""}Stock-Pro</span>
            <h1>Your Professional Financial Advisor</h1>
            {isLoged ? (<></>) : (<><a href="/signup" className='btn btn-info'>Get started</a></>)}
          </div>     
    </div>
  )
}

export default Header
