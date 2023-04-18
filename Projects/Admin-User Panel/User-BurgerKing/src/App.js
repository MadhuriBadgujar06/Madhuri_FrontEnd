import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React, {Suspense, lazy } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Booking from './Components/Booking';
import Menu from './Components/Menu';
import Chef from './Components/Chef';
// import Index from './Components/Index'
import Carousel from './Components/Carousel';
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

// import BlogDetail from './Components/BlogDetail'
import {Routes,Route} from 'react-router-dom'
import Profile from './Components/Profile';
import Edit_Profile from './Components/Edit_Profile';
import SignUp from './Components/SignUp';
const Index =React.lazy(()=>import('./Components/Index.jsx'))
function App() {
  // let heading;
  // let subheading;
  // let page;
  return (
    <div>
      
      <ToastContainer/>
      <Routes>
         
      <Route path="/" element={<><Navbar/><Header  page="Best Quality Ingredients" subheading="" heading="HOME"/><React.Suspense fallback={<h1>Wait Lazy Loading...</h1>}><Index/></React.Suspense> <Footer/></>}> </Route>
        <Route  path="/feature" element={<><Navbar/><Header page="Why Choose Us" heading="HOME" subheading="FEATURES"/><Feature/> <Footer/></>}> </Route>
        <Route  path="/contact" element={<><Navbar/><Header  page="Contact Us" heading="HOME" subheading="CONTACT"/><Contact/> <Footer/></>}> </Route>
        <Route  path="/blog" element={<><Navbar/><Header page="Why Choose Us" heading="HOME" subheading="FEATURES"/><Blog/> <Footer/></>}> </Route>
        
        <Route  path="/about" element={<><Navbar/><Header page="About" heading="HOME" subheading="ABOUT"/><About/> <Footer/></>}> 
        <Route  path="/about/menu" element={<><Menu/> </>}> </Route>
        <Route  path="/about/booking" element={<><Booking/> </>}> </Route>
        <Route  path="/about/team" element={<><Chef/> </>}> </Route>
        </Route>
        
        <Route  path="/login" element={<><Navbar/><Header page="Login" heading="Login" subheading="ABOUT"/><Login/> <Footer/></>}> </Route>
        <Route  path="/edit_profile/:id" element={<><Navbar/><Header/><Edit_Profile/> <Footer/></>}> </Route>
        <Route  path="/profile" element={<><Navbar/><Header/><Profile/> <Footer/></>}> </Route>
        <Route  path="/signup" element={<><Navbar/><Header/><SignUp/> <Footer/></>}> </Route>
   
        {/* <Route  path="/blog" element={<><Navbar/><BlogDetail/> <Footer/></>}> </Route>
        <Route  path="/single" element={<><Navbar/><BlogDetail/> <Footer/></>}> </Route> */}
      </Routes>
    </div>
  );
}
export default App
