import Sidebar from './components/Sidebar.jsx'
import Content from './components/Content.jsx'
import Fardigheter from './components/Fardigheter.jsx'
// import Erfarenheter from './components/Erfarenheter.jsx'
// import Project from './components/Project.jsx'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
function App() {

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
            about="I am currently a student of frontend developer, But i have always had a great interest for technology. I have 10 years experience in healthcare through my job. "
          />}/>
        <Route path="/Fardigheter" element=
          {<Fardigheter 
            utb_tittle="./src/assets/Skills_logo.png"
            utb_name="Frontend Devloper"
            betyg="Yrkshögskolan"
            betyg_disc="2 years Colleoge Education"
            img="./src/assets/fard_pic.png"
              />}/>
        {/* <Route path='/' element = 
          {<Erfarenheter/>}/>       */}
      </Routes>
    </Router>
  );
}

export default App
