import { BrowserRouter,Routes,Route } from "react-router-dom";
import Add_Data from "./Add_Data";

import Header from "./Header";
import Footer from "./Footer";
import ViewData from "./ViewData";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" index element={<Login/>}></Route>
      <Route path="/viewdata"  element={<> <Header/><ViewData/><Footer/></>}></Route>
     <Route path="/add_data" element={<> <Header/><Add_Data/><Footer/></>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
