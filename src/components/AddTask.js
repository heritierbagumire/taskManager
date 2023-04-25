import { useState } from "react";
const AddTask = ({ onAdd }) => {
let [id, setId] = useState('')    
let [text, setText] = useState('')
let [day, setDay] = useState('')
let [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please enter the text before saving the task') 
            return
    }
     onAdd({ id, text, day, reminder })
        setId('')
        setText('')
        setDay('')
        setReminder(false) 
    }

    



    return(

        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
            <label>Task number</label>
                <input type="number" min='1' placeholder="task number" value={id} onChange={(e)=> setId(e.target.value)} />

            </div>
            
        <div className="form-control"> 
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=> setText(e.target.value)} />
         </div>


        <div className="form-control">
            <label>Day & time</label>
        
            <input type="date" placeholder="Add Day & time" value={day} onChange={(e)=> setDay(e.target.value)} />
            </div>


            <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" placeholder="Set reminder" value={reminder} checked={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value='save Task' className="btn btn-block" />

    </form>




    
        
        )}

export default AddTask;

