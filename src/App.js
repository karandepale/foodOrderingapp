import React from "react";
import { BrowserRouter , Routes , Route } from  "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import CardDetail from "./pages/CardDetail";
import Login from "./pages/Login";


function App() {
  return (
    <React.Fragment>
    
        <BrowserRouter>
           <Routes>
               <Route path="/" element={ <Login /> } />
               <Route path="/Home" element={ <Home/> } />
               <Route path="About/" element={ <About/> } />
               <Route path="/Menu" element={ <Menu/> } />
               <Route path="/Contact" element={ <Contact/> } />
               <Route path="/CardDetail" element={ <CardDetail/> } />
               <Route path="*" element={ <PageNotFound/> } />
           </Routes>
        </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
