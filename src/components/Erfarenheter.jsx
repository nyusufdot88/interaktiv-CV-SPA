import React from 'react'
import "/src/erfarenheter.css"
function Erfarenheter(probs) {
  return (
    <div>
        <div className='erfarenheter__container'>
            <img src= {probs.logo} width={"380px"} />
               <div className='erfarenheter_item1'> 
                <h3>{probs.tittle}</h3>
                <small>{probs.discription} </small>
                <p>{probs.subjects} </p>
                </div>
            </div>
    </div>
  )
}

export default Erfarenheter