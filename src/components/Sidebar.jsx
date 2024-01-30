import React from 'react'
import { Link } from "react-router-dom";
import "/src/sidebar.css"
import profilePicNY from "/src/assets/profilePicNY.jpg"

function Sidebar() {
  return (
    
<div className='Sidebar__container'>
        <div className='sidebar__circel__img' >
          <img src={profilePicNY} alt="profile picture" />
        </div>
        <span>Nuur Yusuf</span>
        <span>Frontend Devloper Student @ KYH</span>
        <br />
        <nav className='navbar__Sidebar__btn'>
            <Link to="/" className="Fardigheter">
            <input type="button" value={"Om mig"} /></Link>
            <Link to="/Fardigheter" className="Fardigheter"> 
            <input type="button" value={"Fardigheter"}/></Link>
            <Link to="/Erfarenheter" className="Erfarenheter">
            <input type="button" value={"Erfarenheter"}/></Link>
            <input type="button" value={"Projects"}/>
        </nav>
</div>

)
}

export default Sidebar