import { Routes,Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import ManageUser from "./Components/ManageUser";
import AddEmployee from "./Components/AddEmployee";
import ManageEmployee from "./Components/ManageEmployee";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import DashBoard from "./Components/DashBoard";

function App() {
  return (
    <div >
      <ToastContainer/>
      <Routes>
        <Route index path="/" element={<><Login/></>}></Route>
      
        <Route path="/mnguser" element={<><Header/><ManageUser/><Footer/></>}></Route>
        <Route path="/addemployee" element={<><Header/><AddEmployee/><Footer/></>}></Route>
        <Route path="/mngemployee" element={<><Header/><ManageEmployee/><Footer/></>}></Route>
        <Route path="/dashboard" element={<><Header/><DashBoard/><Footer/></>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
