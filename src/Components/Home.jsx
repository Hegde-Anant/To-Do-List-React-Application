import React,{useState,useEffect} from 'react';
import Task from "./Task";

const Home = () => {

  const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

  const [tasks,setTasks]=useState(initialArr);

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

const submitHandler=(e)=>{
  e.preventDefault();

  setTasks([...tasks, {title,description}]);

  setTitle("");
  setDescription("");
}

const deleteTask = (index)=>{
  const filteredArr = tasks.filter((val,i)=>{
    return i !== index;
  });
  setTasks(filteredArr);
}

  useEffect(() => {
   
    localStorage.setItem("tasks",JSON.stringify(tasks));

  }, [tasks])
  

  return (
    <div className="container">

      <h1>To Do List Application</h1>

    <form onSubmit={submitHandler}>

      <input type="text" placeholder='Title' required
      value={title} 
      onChange={(e)=>{
        setTitle(e.target.value)
      }}/>

      <textarea placeholder='Description' required
      value={description} 
      onChange={(e)=>{
        setDescription(e.target.value)
      }}></textarea>

      <button type='sumbit' >ADD</button>

    </form>

    {tasks.map((item,index)=>{
      return (
        <Task 
        key={index} 
        title={item.title} 
        description={item.description}
        deleteTask={deleteTask}
        index={index}
        />
      )
    
    })}

    </div>
  )
};

export default Home;