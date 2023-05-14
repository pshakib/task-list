import React from 'react'
import Taskitems from './Taskitems'

export default function Tasks(props) {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Tasks list</h3>
      {props.tasks.length===0? "There is no tasks added. Please add tasks.":
      props.tasks.map((task)=>{
          return <Taskitems task={task} key={task.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}
