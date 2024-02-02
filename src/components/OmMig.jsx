import React from 'react'
import "/src/omMig.css"
import {useSelector } from 'react-redux';


function OmMig(props) {
  
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <>
    <div className={`omMig__container ${darkMode ? 'omMig__container--dark' : ''}`}>
        <br />
            <h1>{props.tittle}</h1>
            <div className='omMig__my__name'>
                <h2>{props.name}</h2>
            </div>
            <div className='omMig__about'>
                <p>{props.about}</p>
            </div>
            <div className="omMig__img">
                 <img src={props.img} width={"300px"} height={"350px"}/>
            </div>
    </div>
    </>
  )
}

export default OmMig