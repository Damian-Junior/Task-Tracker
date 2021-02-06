import React, { useContext } from 'react';
import UserContext from '../Context/Context';
import './index.css'

const Button = ({color, text}) =>{
const {showAddPane, setShowAddPane} = useContext(UserContext);

   return (
          <div >
               <button className ="btn" style = {{backgroundColor:color}}
                    onClick = {()=>{setShowAddPane(!showAddPane)}}>{text}
               </button>
          </div>      
        )
   
}
export default Button;