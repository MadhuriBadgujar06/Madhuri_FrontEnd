import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Homescreen from "./Screen/Homescreen/Homescreen";
import { Container } from "react-bootstrap";
import "./_app.scss"
import { useState } from "react";
import LoginScreen from "./Screen/Loginscreen/LoginScreen";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const Layout=({children})=>{
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSideBar=()=>{
    toggleSidebar((value)=> !value)
  }
  return(
  <div >
    <Header handleToggleSideBar={handleToggleSideBar}/>
    <div className="app_container">
      <Sidebar sidebar={sidebar} handleToggleSideBar={handleToggleSideBar}/>
      <Container fluid  className="app_main">
        {children}
      </Container>
    </div>
    </div>
    )
}

function App() {
  
  return <Router>
    <Routes>
      <Route path="/" element={<Layout><Homescreen/></Layout>}></Route>
      <Route path="/search" exact element={<Layout><h1>Search Results</h1></Layout>}></Route>
      <Route path="/auth" exact element={<LoginScreen/>}></Route>
      <Route path="/" element={<Layout><Homescreen/></Layout>}></Route>
      {/* <Route to="/" element={<Layout><Homescreen/></Layout>}></Route> */}
    
    </Routes>
  </Router>

}

export default App;
