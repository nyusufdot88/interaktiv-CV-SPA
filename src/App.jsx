import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Myprojects from './components/Myprojects.jsx'
import Sidebar from './components/Sidebar.jsx'
import OmMig from './components/OmMig.jsx'
import Fardigheter from './components/Fardigheter.jsx'
import Erfarenheter from './components/Erfarenheter.jsx'
import './App.css'

function App() {
  return (
    
    <Router>
      <Sidebar />
      <main></main>
      <Routes>
        <Route path="/" element=
          {<OmMig
            tittle="About Me" 
            name= "Nuur Abdiladif Yusuf"   
            img="./src/assets/ny.png"
            about="I am currently a student of frontend developer, I have always had a great interest for technology through all my life. Beside that, I have 10 years work experience in healthcare departpent. "
          />}/>
        <Route path="/Fardigheter" element=
          {<Fardigheter 
            tittle="Färdigheter"
            yrks_name="Frontend Devloper"
            utb="Yrkshögskolan"
            utb_form="2 years Colleoge Education"
            img="./src/assets/fard_pic.png"
              />}/>
        <Route path='/Erfarenheter' element = 
          {<Erfarenheter
              tittle="Front-End Experience"
              sub_tittle="Front-End Student since 2023"
              discription="Areas I have worked untill now... "
              subjects="Since I am still student in my sencond semister i am familiar with these subject  HTML,CSS/SASS Vanila js in area of Front-End"
          />}/>      
        <Route path='/Myprojects' element = 
            {<Myprojects 
              projects="My Projects"
              subject={{htm:"HTML",csss:"CSS / SASS",vJS:"Vanila JS / React"}}
              projectName={{
                htm: "SVTplay CLONE, Netflex Clone and Bok Handel",
                csss: "Netflex Clone, InterActivt CV and a Memory Game",
                vJS: "Bok Handel, InterActivt CV, a Restaurang app"
              }}     
            />
          }/>
      </Routes>
    </Router>
  );
}

export default App;
