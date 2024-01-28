import React,{useState} from 'react'
import {useEffect} from 'react'
import {Link,NavLink,Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = ({onLogout,isLooged,articleData}) => {
   
    const history = useNavigate();

    const handleClick = () => {
      onLogout();
      history('/');
    }

  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <Link to="/" style={{textDecoration:'none'}}>
    <a className="navbar-brand" >Stock-pro</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" style={{textDecoration:'none'}}>
          {/* Home */}
          <a className="nav-link active" aria-current="page" >Home</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/StockNews" style={{textDecoration:'none'}}>
          {/* StockNews */}
          <a className="nav-link active" aria-current="page" >StockNews</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/stockChart" style={{textDecoration:'none'}}>
          {/* Stock-Chart */}
          <a className="nav-link active" aria-current="page" >Stock-Chart</a>
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          {isLooged ? 
          (<>
          <NavLink to="/" onClick={handleClick} style={{textDecoration:'none'}}>
          <a className="btn btn-info" aria-current="page">Logout
          </a>
          </NavLink>
            </>) :
            (<>
            <NavLink to="/login" style={{textDecoration:'none'}}>
            <a className="btn btn-info" aria-current="page">Login</a>
            </NavLink>
            </>)}
        </li>
      </ul>
    </div>
  </div>
</nav>
 </div>
    </>
  )
};

export default Navbar;
