import React, { useContext } from 'react'
import UserContext from '../Context/Context';
import Task from './Task';

const Tasks = () =>{
 const {tasks} = useContext(UserContext);

    return (
        <>
          { tasks.map((task)=> {
              return(
                 <Task key ={task.id}   $task = {task}genClass = 'taskDiv' />
                
                 )
            })
          }
        </>
    )
}
export default Tasks;