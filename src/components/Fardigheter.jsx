import React from 'react'
import './fardigheter.css'
function Fardigheter(probs) {
  return (
    <div>
            <div className='Fardigheter__container'>
            <img src= {probs.utb_tittle} width={"180px"} />
               <div className='fardigheter_utb'> 
                <h3>{probs.utb_name} </h3>
                <p>{probs.betyg} </p>
                <p>{probs.betyg_disc} </p>
                </div>
            </div>
    </div>
  )
}

export default Fardigheter