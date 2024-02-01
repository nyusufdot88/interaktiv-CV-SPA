// import React from 'react'
// import { Link } from "react-router-dom";
// import "/src/sidebar.css"
// import profilePicNY from "/src/assets/profilePicNY.jpg"

// function Sidebar() {
//   return (
    
// <div className='Sidebar__container'>
//         <div className='sidebar__circel__img' >
//           <img src={profilePicNY} alt="profile picture" />
//         </div>
//         <span>Nuur Yusuf</span>
//         <span>Frontend Devloper Student @ KYH</span>
//         <br />
//         <nav className='navbar__Sidebar__btn'>
          
//             <Link to="/" className="Om mig">
//             <input type="button" value={"Om mig"} />
//             </Link>

//             <Link to="/Fardigheter" className="Fardigheter"> 
//             <input type="button" value={"Fardigheter"}/>
//             </Link>

//             <Link to="/Erfarenheter" className="Erfarenheter">
//             <input type="button" value={"Erfarenheter"}/>
//             </Link>

//             <Link to="/Myprojects" className="Myprojects">
//             <input type="button" value={"Myprojects"}/>
//             </Link>
//         </nav>
// </div>

// )
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "/src/sidebar.css"
import profilePicNY from '/src/assets/profilePicNY.jpg';

function Sidebar() {
  //state variable to track clicked status for each button
  const [clickedButton, setClickedButton] = useState(null);

  // Event handler to handle button click
  const handleClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  return (
    <div className='Sidebar__container'>
      <div className='sidebar__circel__img'>
        <img src={profilePicNY} alt="profile picture" />
      </div>
      <span>Nuur Yusuf</span>
      <span>Frontend Devloper Student @ KYH</span>
      <br />
      <nav className='navbar__Sidebar__btn'>
        <Link to="/" style={{ backgroundColor: clickedButton === 'OmMig' ? 'red' : '' }}>
          <input type="button" value={"Om mig"} onClick={() => handleClick('OmMig')} />
        </Link>
        <Link to="/Fardigheter" style={{ backgroundColor: clickedButton === 'Fardigheter' ? 'red' : '' }}>
          <input type="button" value={"Fardigheter"} onClick={() => handleClick('Fardigheter')} />
        </Link>
        <Link to="/Erfarenheter" style={{ backgroundColor: clickedButton === 'Erfarenheter' ? 'red' : '' }}>
          <input type="button" value={"Erfarenheter"} onClick={() => handleClick('Erfarenheter')} />
        </Link>
        <Link to="/Myprojects" style={{ backgroundColor: clickedButton === 'Myprojects' ? 'red' : '' }}>
          <input type="button" value={"Myprojects"} onClick={() => handleClick('Myprojects')} />
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
