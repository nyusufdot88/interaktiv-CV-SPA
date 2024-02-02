import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "/src/sidebar.css"
import profilePicNY from '/src/assets/profilePicNY.jpg';
import facebook from '/src/assets/facebook.png';
import linkedin from '/src/assets/linkedin.png';
import instagram from '/src/assets/instagram.png';
import {useDispatch,useSelector } from 'react-redux';

function Sidebar() {
  //state variable to track clicked status for each button
  const [clickedButton, setClickedButton] = useState(null);

  // Event handler to handle button click
  const handleClick = (buttonName) => {
    setClickedButton(buttonName);
  };
  // Dark mode button
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);

  const toggleThemeHandler = () => {
    dispatch({type: 'TOGGLE_THEME'});
  };
  
return (
    <div className={`Sidebar__container ${darkMode ? 'Sidebar__container--dark' : ''}`}  >
        <div className='sidebar__circel__img'>
          <img src={profilePicNY} alt="profile picture" />
        </div>
      <span>Nuur Yusuf</span>
      <span>Frontend Devloper Student @ KYH</span>
      <br />
      <nav className='navbar__Sidebar__btn'>
        <Link to="/" style={{ backgroundColor: clickedButton === 'OmMig' ? 'red' : '' }}>
          <input type="button" value={"Om Mig"} onClick={() => handleClick('OmMig')} />
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
      </nav><br />
      
      <button onClick={toggleThemeHandler}>
        {darkMode ? 'swith to Light Mode':'swith to Dark Mode'}
      </button>

      <p>Let's talk @...</p>
      <span>
      <a href="https://www.facebook.com/Nuurkeey"><img src={facebook} alt="profile picture"width={"30px"} /></a>
      <a href="https://www.linkedin.com/in/nuur-yusuf-8905a92aa/"> <img src={instagram} alt="profile picture"width={"30px"} /></a>
      <a href="https://www.instagram.com/en_why8/?next=%2F"><img src={linkedin} alt="profile picture"width={"30px"} /></a>
      </span>
    </div>
  );
}

export default Sidebar;
