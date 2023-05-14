import React from 'react'

export default function Taskitems({task, onDelete}) {
  return (
    <div>
      <h4>{task.heading}</h4>
      <p>{task.desc}</p>
      <button id='delete' onClick={()=>{onDelete(task)}}>Delete</button>
      <hr/>
    </div>
  )
}
