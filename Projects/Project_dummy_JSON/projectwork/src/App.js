import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home'
import About from "./Components/About";
import Insert from "./Components/Add_Product";
import Login from "./Components/Login";
import { Route,Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import Edit_profile from "./Components/Edit_profile";
import Add_Product from "./Components/Add_Product";
import './Components/style.css'
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route index path="/" element={<><Login/></>}></Route>
      <Route path="/home" element={<><Navbar/><Home/></>}></Route>
      <Route path="/about/:id" element={<><Navbar/><About/></>}></Route>
      <Route path="/insert" element={<><Navbar/><Add_Product/></>}></Route>
      <Route path="/signup" element={<><Signup/></>}></Route>
      <Route path="/profile" element={<><Navbar/><Profile/></>}></Route>
      <Route path="/edit/:id" element={<><Navbar/><Edit_profile/></>}></Route>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
