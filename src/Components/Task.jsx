import React from 'react'

const Task = ({title,description,deleteTask,index}) => {
  return (
    <div className='task'>
        <div>
            <p><b>Title : </b> {title}  </p>
            <hr/>
            <b>Description : </b><span> {description} </span>
            
        </div>
        <button onClick={()=>{
            deleteTask(index)
        }}>-</button>
    </div>
  )
}

export default Task;