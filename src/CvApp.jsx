import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import projects from "./components/projects.js"
import Myprojects from './components/Myprojects.jsx'
import Sidebar from './components/Sidebar.jsx'
import Content from './components/Content.jsx'
import Fardigheter from './components/Fardigheter.jsx'
import Erfarenheter from './components/Erfarenheter.jsx'
import './CvApp.css'

function CvApp() {
  // const datta = projects.map(item =>{
  //   return (
  //         <>
  //           <Content
  //               key ={item.id}
  //               {...item}/>
              
  //         </>    
  //         )
  //       })

    return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element=
          {<Content
            tittle="./src/assets/om_mig_logo.png" 
            logo= "./src/assets/logo.png"   
            bor="Bollnäs"
            intresse="Coding and Sport"
            Sprak="Svenska & English"
            img="./src/assets/ny.png"
            about="I am currently a student of frontend developer, I have always had a great interest for technology through all my life. Beside that, I have 10 years work experience in healthcare departpent. "
          />}/>
        <Route path="/Fardigheter" element=
          {<Fardigheter 
            utb_tittle="./src/assets/Skills_logo.png"
            utb_name="Frontend Devloper"
            betyg="Yrkshögskolan"
            betyg_disc="2 years Colleoge Education"
            img="./src/assets/fard_pic.png"
              />}/>
        <Route path='/Erfarenheter' element = 
          {<Erfarenheter
              logo="./src/assets/erfarenhet_logo.png"
              tittle="Front-End Student since 2023"
              discription="Areas I have worked untill now... "
              subjects="Since I am still student in my sencond semister i am familiar with these subject  HTML,CSS/SASS Vanila js in area of Front-End"
          />}/>      

          
        <Route path='/Myprojects' element = 
            {<Myprojects 
              logo="./src/assets/project_logo.png"
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

export default CvApp

{/* <Route
        path="/Myprojects"
        element={<Myprojects xog={datta} />} */}