import React,{ useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const [name, setName] = useState("");
  const [password,setPassword]= useState(""); 
  // const [loggedIn, setLoggedIn] = useState();
  const navigate = useNavigate();

  const { login } = useContext(UserContext);
  
  const validate = () =>{
    if(!name){
      alert("Enter valid name");
      return false;
    }
    if(!password){
      alert("Enter valid Password");
      return false;
    }
    if(name&&password){
      return true;
    }
  }

  const handleSubmit =  (e) =>{
    e.preventDefault();

    if(validate){
      const loginSucess = login({name,password});
      if(loginSucess){
        alert("Login Successfull");
        navigate("/");
      }else{
        alert(" Wrong credentials ");
      }
    }
    setName("");
    setPassword("");
    }
  

  return (
    <div className='Login'>
      <h1>Login</h1>
      <form className='LoginForm' onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        id="username"
        value={name}
        placeholder='Username'
        onChange={e =>setName(e.target.value)}
        />
        <input 
          type="password" 
          name="password"
          id="password" 
          value={password}
          placeholder='PASSWORD'
          onChange={e =>setPassword(e.target.value)} />
          <button className='Submit' type="submit">Sign In</button>
      <Link to="/Register">Sign UP</Link>

      </form>
    </div>
  )
}

export default Login