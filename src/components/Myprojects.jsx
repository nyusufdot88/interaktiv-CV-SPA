import React from 'react'
import "/src/myprojects.css"

// function Myprojects(props) {
  
//   return (
//     <div>
//       <div className='myProject__container'>
//         {/* Map over the props.info array to render each item */}
//         {props.xog.map(item => (
//           <div key={item.id} className="myproject__item"> 
//             <p>{item.subject}</p> 
            
//             {item.project_name && (
//               <div>
//                 <p>Project Name 1: {item.project_name.item1}</p>
//                 <p>Project Name 2: {item.project_name.item2}</p>
//                 <p>Project Name 3: {item.project_name.item3}</p>
//               </div>
//             )}
//             <p>{item.discription}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function Myprojects(props) {
  
  return (
<div>
    <div className='myProject__container'>
        <img src= {props.logo} height={"120"}width={"250px"}/>
        <div className="myproject__item"> 
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