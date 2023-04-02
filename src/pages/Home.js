import { Button } from '@mui/material';
import React from 'react';
import "./homeStyle.css"
import Layout from '../layout/Layout';
import {Link} from "react-router-dom";

const Home = () => {

   const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
   console.log(userDataFromLocalStorage);
  return (
    <Layout>
    
       <div
         className="home"
         style={{backgroundImage:`url(${"https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?cs=srgb&dl=bread-color-cooking-1565982.jpg&fm=jpg"})`}}
         >
          <div className='headerContainer' >
             <h1> Depale's Food </h1>
             <p> Best Food in india </p>

             <Link to="/Menu">
                <button> ORDER  NOW </button>
             </Link>
             
          </div>
       </div>
    
    </Layout>
  )
}

export default Home;
