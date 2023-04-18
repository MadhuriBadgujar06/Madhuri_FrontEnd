import Header from "./Components/Header";
import { Routes ,Route} from "react-router-dom";
import Skills from "./Pages/Skills";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import About from "./Pages/About";
function App() {
  return (
<div>
  <Header/>
  <Routes>
    <Route path="/" element={<><Home/><About/><Projects/><Contact/></>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/skills" element={<Skills/>}></Route>
    <Route path="/project" element={<Projects/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  <Footer/>
</div>
    );
}

export default App;
