import Header from "./Components/Header";
import { Routes ,Route} from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import { createTheme,colors, ThemeProvider} from "@mui/material";
import Resume from "./Pages/Resume";
import './Style/App.css'

const theme = createTheme({
palette :{
  primary :{
    main : colors.orange[500]
  },
  secondary :
  {
     main : '#0a192f'
  },
  white :{
    main : '#ccd6f6'
  }
},
typography: {
  "fontFamily": 'Baloo Bhai 2',
}
})
function App() {
  return (
<ThemeProvider theme={theme}>
  <Header/>
  <Routes>
    <Route path="/" element={<><Home/><About/><Projects/><Contact/></>}></Route>
    <Route path="/about" element={<About/>}></Route>

    <Route path="/project" element={<Projects/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/resume" element={<Resume/>}></Route>
  </Routes>
  <Footer/>
</ThemeProvider>
    );
}

export default App;
