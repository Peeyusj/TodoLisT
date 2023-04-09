import "./App.css";
import React, { useState,useRef } from "react";
import bg from '../src/assets/bgg.jpg'
function App() {
  const [newTask, setNewTask] = useState("");
  const [newList, setNewList] = useState([]);
let modal=useRef(null)
  const onInputHandler = (e) => {
    setNewTask(e.target.value);
  };
  const onsubmithandler = (e) => {
    e.preventDefault();
    const newTasks = {
      id: Math.random().toString(),
      taskname: newTask,
      completed: false,
    };

    setNewList([...newList, newTasks]);
    setNewTask("");
  modal.current.style.visibility="hidden"

  };
  const onxhandle = (taskitem) => {
    const newtodoList = newList.filter((task) => {
      if (task.id === taskitem) {
        return false;
      } else {
        return true;
      }
    });
    setNewList(newtodoList);
  };
 let  addhandler=()=>{
  modal.current.style.visibility="visible"
  }
  const OnCompleted = (id) => {
    setNewList(
      newList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App" style={{backgroundImage:`url(${bg})`}}>
      <div className="navbar">
        To Do List
      </div>
      <div className="modalcontainer" ref={modal}>
      <form>
        <input type="text" value={newTask} onChange={onInputHandler} />
        <button type="submit" onClick={onsubmithandler}>
          add task
        </button>
      </form>
      </div>
      <div className="content" >
      <div className="bttn"><button onClick={addhandler}>Add New Task</button></div>
      <div className="tasklist">
        {newList.map((task) => {
          return (
            <div className="taask" >
            
              <div
              className="taskname"
                key={task.id}
                style={{ backgroundColor: task.completed ? "green" : "rgb(0 0 0 / 79%)", }}
              >
                {task.taskname}
              </div>
              <div>
              <button onClick={() => onxhandle(task.id)}>Cancel</button>{" "}
              <button onClick={() => OnCompleted(task.id)}>Completed</button>{" "}
              </div>
            </div>
          );
        })}
      </div>
      </div>
      

      {/* {newList.map((task) => {  return(<div> <li key={task.id} style={{backgroundColor:`${newcol}`}} >{task.taskname}</li>  <button   onClick={()=>onxhandle(task.id)} >x</button> <button   onClick={()=>oncomphandle(task.completed) } >completed</button> </div>) })}

</div> */}
    </div>
  );
}

export default App;
