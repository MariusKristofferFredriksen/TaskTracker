import Header from './Header';
import Tasks from './Tasks';
import  {useState} from 'react'
import { FaCoins } from 'react-icons/fa';
import AddTask from './AddTask';

const TimeTracker = () => {
  
  //Show add-task component
  const [showAddTask, setShowAddTask] = useState(false)

  //Tasks state
  const [tasks, setTasks] = useState([])

  //Delete task
  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !task.reminder} : task))
  }


  //Add task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? 
          <Tasks 
              tasks={tasks} 
              onDelete={DeleteTask}
              onToggle={toggleReminder}
              /> :

          ('No Tasks To Show')
      }
    </div>
  );
}

export default TimeTracker;
