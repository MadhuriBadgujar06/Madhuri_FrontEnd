import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home'
import Edit_Product from "./Components/Edit_Product";
import Insert from "./Components/Add_Product";
import Login from "./Components/Login";
import { Route,Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import Edit_profile from "./Components/Edit_profile";
import Add_Product from "./Components/Add_Product";
import './Components/style.css'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import About_Product from "./Components/About_Product";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    
    <Routes>
      <Route index path="/" element={<><Login/></>}></Route>
      <Route path="/home" element={<><Navbar/><Home/><Footer/></>}></Route>
      <Route path="/about/:id" element={<><Navbar/><About_Product/><Footer/></>}></Route>
      <Route path="/edit_product/:id" element={<><Navbar/><Edit_Product/><Footer/></>}></Route>
      <Route path="/insert" element={<><Navbar/><Add_Product/><Footer/></>}></Route>
      <Route path="/signup" element={<><Signup/></>}></Route>
      <Route path="/profile" element={<><Navbar/><Profile/><Footer/></>}></Route>
      <Route path="/edit/:id" element={<><Navbar/><Edit_profile/><Footer/></>}></Route>
    </Routes>
    
    </BrowserRouter>
    

  );
}

export default App;
