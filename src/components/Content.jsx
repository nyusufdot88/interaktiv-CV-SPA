import React from 'react'
import "/src/content.css"

function Content(probs) {
  return (
    <div className='content__container'>
        <br />
            <img src= {probs.tittle} width={"120px"} />
            <div className='content__my__logo'>
                <img src={probs.logo} width={"360px"} alt="logo"/>
            </div>
            <div className='content__about'>
                <p>{probs.about}</p>
            </div>
            <div className="content__img">
                 <img src={probs.img} width={"300px"} height={"350px"}/>
            </div>
    </div>
  )
}

export default Content