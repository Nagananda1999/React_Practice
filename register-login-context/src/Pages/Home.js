import React,{useContext} from 'react';
import { UserContext } from '../context/UserContext';
const Home = () => {
  const {state} =useContext(UserContext);
  const {user} = state;
  return (
    <div className='home'>Home
      <h1>Hi &nbsp; 
        {user?(user.name):" NOT Logged IN"}
      </h1>
      
    </div>
  )
}

export default Home;