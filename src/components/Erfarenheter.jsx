import React from 'react'
import "/src/erfarenheter.css"
import {useSelector } from 'react-redux'

function Erfarenheter(probs) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <div>
        <div className={`erfarenheter__container ${darkMode ? 'erfarenheter__container--dark' : ''}`}>
            <h1> {probs.tittle}</h1>
               <div className='erfarenheter_item1'> 
                <h3>{probs.sub_tittle}</h3>
                <small>{probs.discription} </small>
                <p>{probs.subjects} </p>
                </div>
            </div>
    </div>
  )
}

export default Erfarenheter