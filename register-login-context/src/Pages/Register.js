import React, { useContext, useState  } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate,Link } from 'react-router-dom';
const Register = () => {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword]= useState("");
  const navigate = useNavigate();
  
  const { register } = useContext(UserContext);

  const validate = () =>{
    if(!email){
      alert("Enter valid E-mail");
      return false;
    }
    if(!name){
      alert("Enter valid name");
      return false;
    }
    if(!password){
      alert("Enter valid Password");
      return false;
    }
    if(name&&email&&password){
      return true;
    }
  };

  
  const handleSubmit =async (e) =>{
    e.preventDefault();
    if(validate()){
      const isRegistered = register({name, email, password});
      if(isRegistered){
        if(window.confirm("User already Registered Press Ok to login")){
          navigate('/Login');
        }
      }
      else{
        alert("Registered Sucessfully");
        navigate('/Login');
      }
    }
    setEmail("");
    setPassword("");
    setName("");
  }
  

  return (
    <div className='Register'>
      <h1>Register</h1>
      <form className="RegisterForm" onSubmit={handleSubmit}>
        
        <input 
          type="text" 
          name="name"
          id="username" 
          value={name}
          placeholder='USERNAME'
          onChange={e =>setName(e.target.value)} />

        
        <input 
          type="text" 
          name="email"
          id="email" 
          value={email}
          placeholder='E-MAIL'
          onChange={e =>setEmail(e.target.value)} />

        
        <input 
          type="password" 
          name="password"
          id="password" 
          value={password}
          placeholder='PASSWORD'
          onChange={e =>setPassword(e.target.value)} />
        <button className='Submit' type="submit">Sign Up</button>
        <Link to="/Login">Have an Account?</Link>
      </form>
      
    </div>
  )
}

export default Register;