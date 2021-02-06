import React, {useState} from 'react';
import Header from './Component/Header';
import Tasks from './Component/Tasks';
import AddTask from './Component/AddTask';
import './App.css'
import UserContext from './Context/Context';

  const App = ()=> {
  const [reminder, setRemind] = useState(false);
  const [showAddPane, setShowAddPane] = useState(true);
  const [tasks, setTasks] = useState([]);

  const providerObject = {
  reminder,
  setRemind,
  showAddPane,
  setShowAddPane,
  tasks,
  setTasks,
  includeTask: (task)=>{
            const id = Math.floor(Math.random()*10000);
            const newTask = [
            ...tasks,
            {id:id, ...task}
            ]
            setTasks(newTask); 
     
          },

deleteTask: (id)=>{
            setTasks(tasks.filter (task => task.id !==id));
            }
}
const $displayText = <h1 style = {{color:'red', textAlign:'center'}}>NO TASK TO SHOW</h1>
return (
          <div className = "fullContainer">
              <UserContext.Provider value = {providerObject}>
                  <Header />
                  {showAddPane && <AddTask />}
                  {tasks.length === 0 ? $displayText: <Tasks />}
              </UserContext.Provider>
            
          </div>
        )
}
export default App;