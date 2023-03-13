import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Booking from './Components/Booking';
import Menu from './Components/Menu';
import Chef from './Components/Chef';
import Index from './Components/Index'
import Carousel from './Components/Carousel';
import Login from './Components/Login';
// import BlogDetail from './Components/BlogDetail'
import {Routes,Route} from 'react-router-dom'
function App() {
  // let heading;
  // let subheading;
  // let page;
  return (
    <div>
      <Routes>
      <Route  path="/" element={<><Navbar/><Header  page="Best Quality Ingredients" subheading="" heading="HOME"/><Index/> <Footer/></>}> </Route>
        <Route  path="/about" element={<><Navbar/><Header page="About" heading="HOME" subheading="ABOUT"/><About/> <Footer/></>}> </Route>
        <Route  path="/feature" element={<><Navbar/><Header page="Why Choose Us" heading="HOME" subheading="FEATURES"/><Feature/> <Footer/></>}> </Route>
        <Route  path="/contact" element={<><Navbar/><Header  page="Contact Us" heading="HOME" subheading="CONTACT"/><Contact/> <Footer/></>}> </Route>
        <Route  path="/blog" element={<><Navbar/><Header page="Why Choose Us" heading="HOME" subheading="FEATURES"/><Blog/> <Footer/></>}> </Route>
        <Route  path="/booking" element={<><Navbar/><Header  page="Book A Table" heading="HOME" subheading="BOOKING"/><Booking/> <Footer/></>}> </Route>
        <Route  path="/menu" element={<><Navbar/><Menu/> <Footer/></>}> </Route>
        <Route  path="/team" element={<><Navbar/><Chef/> <Footer/></>}> </Route>
        <Route  path="/login" element={<><Navbar/><Header page="Login" heading="Login" subheading="ABOUT"/><Login/> <Footer/></>}> </Route>
        {/* <Route  path="/blog" element={<><Navbar/><BlogDetail/> <Footer/></>}> </Route>
        <Route  path="/single" element={<><Navbar/><BlogDetail/> <Footer/></>}> </Route> */}
      </Routes>
    </div>
  );
}
export default App;
