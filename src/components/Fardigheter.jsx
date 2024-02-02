import React from 'react'
import '/src/fardigheter.css'
import {useSelector } from 'react-redux';

function Fardigheter(probs) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <div>
            <div className={`Fardigheter__container ${darkMode ? 'Fardigheter__container--dark' : ''}`}>
            <h1> {probs.tittle}</h1>
               <div className='fardigheter_utb'> 
                  <h3>{probs.yrks_name} </h3>
                  <p>{probs.utb} </p>
                  <p>{probs.utb_form} </p>
                </div>
            <div className="fadigheter_fard_pic">
              <img src= {probs.img} width={"500px"} height={"180px"} alt="education" />
            </div>
            </div>
    </div>
  )
}

export default Fardigheter