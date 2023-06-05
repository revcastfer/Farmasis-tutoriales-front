
import  React from 'react';
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import {Routes,Route,Link } from 'react-router-dom'
import Tutoriales from './components/Tutoriales.jsx'
import Referidos from './components/referidos.jsx'
import Upload from './components/uploadVideo.jsx'


document.body.style.margin="0px";

function App() {
  
  return (
  
    <Routes>

          <Route path="/" element={<Login />} /> 
                    
          <Route path="/Home" element={<Home/>} >
           <Route path="Tutoriales" element={<Tutoriales/>}/ >
           <Route path="Referidos" element={<Referidos/>} / >
           <Route path="Upload" element={<Upload/>} / >
          </Route>
     

    </Routes>

  

   )
}

export default App;
