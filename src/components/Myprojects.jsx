import React from 'react'
import "/src/myprojects.css"
import { useSelector} from 'react-redux';

function Myprojects(props) {
const darkMode = useSelector(state => state.theme.darkMode);

return (
    <div>
        <div className={`myProject__container ${darkMode ? 'myProject__container--dark' : ''}`}>
            <div className="myproject__item"> 
                <h1>{props.projects}</h1>
                <div className='myprojects__name'>
                    <p>Subject: {props.subject.htm}</p>
                    <p>Project Name: {props.projectName.htm}</p>
                </div>
                <div className='myprojects__name'>
                    <p>Subject: {props.subject.csss}</p>
                    <p>Project Name: {props.projectName.csss}</p>
                </div>
                <div className='myprojects__name'>
                    <p>Subject: {props.subject.vJS}</p>
                    <p>Project Name: {props.projectName.vJS}</p>
                </div>
            </div>
                
        </div>
    </div>
  );
}

export default Myprojects;