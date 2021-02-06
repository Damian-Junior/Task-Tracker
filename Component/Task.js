import './index.css';
import UserContext from '../Context/Context';
import { useContext } from 'react';

const Task = ({genClass, $task})=>{
const {deleteTask, reminder} =useContext(UserContext);

return (
       <div className = {`${genClass} ${reminder ? ' ': 'borderLeft' }`}>  
            <h3>{$task.text}<button onClick = {()=>deleteTask($task.id)} 
                style = {{color:'red', cursor:'pointer'}}>X</button>
            </h3>
            <p>{$task.day}</p>
        </div>
)
}
export default Task;