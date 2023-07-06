
import  React from 'react';
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import {Routes,Route } from 'react-router-dom'
import Tutoriales from './components/Tutoriales.jsx'
import Referidos from './components/referidos.jsx'
import Upload from './components/uploadVideo.jsx'
import Player from './components/player.jsx'


document.body.style.margin="0px";
document.body.style.overflow="hidden"

function App() {
  
  return (
  
    <Routes>

          <Route path="/" element={<Login />} /> 
                    
          <Route path="/Home" element={<Home/>} >
           <Route path="Tutoriales" element={<Tutoriales/>}/ >
           <Route path="Referidos" element={<Referidos/>} / >
           <Route path="Upload" element={<Upload/>} / >
          </Route>

          <Route path="/player/:name/:url" element={<Player />} >
           <Route path="" element={<Tutoriales/>}/ >
          </Route>
     

    </Routes>

  

   )
}

export default App;
