import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Provider from './context/Provider';
import MyNavbar from "./components/Navbar"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Account from "./components/account"
function App() {
  return (
    <Provider>
      <Router>
        <MyNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
