import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react';

import './app.css';
import React from 'react';



function App() {
   const[showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks ] = useState([
        
    { 
        id: 1,
        text: 'the first test at School',
        day: 'Feb 4th at 2:00pm',
        reminder: true,

    },

    { 
        id: 2,
        text: 'the Doctor\'s appointment',
        day: 'Feb 5th at 6:00pm',
        reminder: true,

    },
    
    { 
        id: 3,
        text: 'Food shopping',
        day: 'Feb 7th at 4:30pm',
        reminder: false,

    },
    {
      id: 4,
      text: 'dh',
      reminder: true,
    }

])
// adding a task

const 
 addTask = (task) => {
  const id = (id) => task.id === id ? id : ''
  const newTask = {id, ...task}

  setTasks([...tasks, newTask])
  console.log(id, task);  

}


// delete a task

const deleteTask = (id) => {

  setTasks(tasks.filter((task) => task.id !== id))
}

 
// toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
}




  return (
    <div className="container">
     <Header  onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

     {showAddTask && <AddTask onAdd={addTask} />}

     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ' no tasks '}
   
    </div>
  );
}
  

export default App;




// class App extends React.Component {
//   render() {
//     return <h1>hello from class</h1>
//   }
// }





