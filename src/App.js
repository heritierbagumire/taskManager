import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';

import './app.css';
import React from 'react';

function App() {
  const [tasks ] = useState([
        
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

])

  return (
    <div className="container">
     <Header  />
     <Tasks tasks={tasks}/>
   
    </div>
  );
}



export default App;

// class App extends React.Component {
//   render() {
//     return <h1>hello from class</h1>
//   }
// }