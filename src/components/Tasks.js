import Task from './Task';



const Tasks = ({tasks, onDelete, onToggle}) => {

  
    return (
        <div>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}> 
          <p>Task ID: {task.id}</p>
          </Task>
        ))}
      </div>
       
    );
}
export default Tasks;

