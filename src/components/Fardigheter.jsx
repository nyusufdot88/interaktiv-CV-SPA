import React from 'react'
import '/src/fardigheter.css'
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
            <div className="fadigheter_fard_pic">
              <img src= {probs.img} width={"500px"} alt="education" />
            </div>
            </div>
    </div>
  )
}

export default Fardigheter