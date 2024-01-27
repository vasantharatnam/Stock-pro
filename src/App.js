import { createContext,useContext } from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar';
import StockNews from './Components/StockNews';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Stockitem from './Components/Stockitem';
import ForgotPassword from './Components/ForgotPassword';
import axios from 'axios';
import {React,useEffect,useState} from 'react';
import './App.css';
import {Routes , Route, Link} from 'react-router-dom';
axios.defaults.baseURL = "http://localhost:3001";

const App = () => {
  
  const [isLogin, setIsLogin] = useState(false);
  const [article, setArticles] = useState([]);

  const changeLogin = (inp) => {
    setIsLogin(true);
    console.log("in App.js");
  }

  const changeArticles = (inp) => {
    setArticles(inp);
  }

  return (

    <div className="container my-3">
       <Routes>
       <Route  path = "/" element = {<Home isLoged = {isLogin} changeArti={changeArticles} articleData = {article} />}></Route>
       <Route  path ="/login"  element = {<Login onLogin = {changeLogin} isLoged = {isLogin} />}></Route>
       <Route  path ="/StockNews" element = {<StockNews isLoged = {isLogin} articleData = {article} />}></Route>
       <Route  path ="/signup" element = {<Signup isLoged={isLogin}/>}></Route>
       <Route  path ="/stockChart" element = {<Stockitem isLoged={isLogin}/>}></Route>
       <Route path ="/forgot-password" element = {<ForgotPassword />}></Route>
       </Routes>
    </div>

  );
}

export default App;
