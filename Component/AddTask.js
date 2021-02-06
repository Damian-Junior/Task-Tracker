import React, {useContext, useState} from 'react';
import UserContext from '../Context/Context';
import './index.css';

const AddTask = ()=>{
const {reminder, setRemind, includeTask} = useContext(UserContext);

const [text, setText] = useState('');
const [day, setDay]   = useState('');
const addTask = ()=>{
       includeTask({text, day, reminder});
       setDay('');
       setText('');
       setRemind(false);
}
   

return (
     <form id ="form">
            <div>
                <label htmlFor="task">Task</label>
                <input type="text" id ="task" value = {text} onChange = {(event)=>setText(event.target.value)}/>
            </div>

            <div>
                <label htmlFor="day">Day and Time</label>
                <input type="text" id ="day" value = {day} onChange = {(event)=>setDay(event.target.value)}/>
            </div>

            <div id="remind">
                <label htmlFor="reminder">Set Reminder
                <input type="checkbox" id ="reminder" checked = {reminder} onChange = {(e)=>{setRemind(e.currentTarget.checked)}}/>
                </label>
            </div>

            <input type="submit" id ="submit_button" value="Save Task" onClick = {(e)=>{
                 e.preventDefault();
                 text === '' ? alert('Please add a task'):addTask();
                 
            }}/>
    </form>
    )
}
export default AddTask;