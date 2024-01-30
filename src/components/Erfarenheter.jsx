import React from 'react'
import "/src/erfarenheter.css"
function Erfarenheter(probs) {
  return (
    <div>
        <div className='erfarenheter__container'>
            <img src= {probs.tittle} width={"380px"} />
               {/* <div className='erfarenheter_item1'> 
                <h3>{probs.utb_name} </h3>
                <p>{probs.betyg} </p>
                <p>{probs.betyg_disc} </p>
                </div> */}
            </div>
    </div>
  )
}

export default Erfarenheter