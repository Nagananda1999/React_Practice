import './App.css';
import React from 'react';
import  ReactDOM  from 'react';

import {BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes >
      <Route path="/" element={<Home/>}>
        <Route path='/About' element={<About/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Route>
      </Routes>
    </Router>
    
  );  
}

const Home = () => {
  const courseList = ['Angular','Vue','React'];
  const randomCourse = courseList[Math.floor(Math.random()*courseList.length)]
  
  return(
    <div>
    <h1>HOME
      { "    "+randomCourse}
    </h1>
    <Link 
    to="/About">About</Link>
    &nbsp;&nbsp;
    <NavLink 
      style={({isActive})=>{
        return{
          color: isActive? "#666" : "#000"
        }
      }}
      to='/Cart'
    >
      CART
    </NavLink>
    <NavLink 
      style={({isActive})=>{
        return{
          color: isActive? "#666" : "#000"
        }
      }}
      to='/Cart'
    >
      {}
    </NavLink>
    <Outlet/>
  </div>
  )
}
function About(){
  return <div>ABOUT PAGE</div>
}
function Cart(){
  return <div>CART Page</div>
}

export default App;
