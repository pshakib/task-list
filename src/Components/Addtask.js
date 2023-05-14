import React from 'react'
import { useState } from 'react';


export default function Addtask({addTask}) {
    let [heading, setHeading] = useState("");
    let [desc, setDesc] = useState("");

    let submit =(e)=>{
        e.preventDefault();
        if(!heading || !desc){
            alert('Title or Description cannot be empty')
        }
        else{addTask(heading, desc);
        setHeading("");
        setDesc("");
        }
    }
  return (
    <div className='container my-3'>
        <h4 id='taskadd'>Add a Task.</h4>
        <form onSubmit={submit}>
            <div className='my-3'>
            <label className='form-label' htmlFor="heading">Title:</label>
            <br/>
            <input type="text" className='form-control' id='heading' value={heading} onChange={(e)=>{setHeading(e.target.value)}} />
            </div>

            <div className='my-3'>
            <label className='form-label' htmlFor="desc">Description:</label>
            <br/>
            <input type="text" className='form-control' id='desc' value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
            </div>

            <button type='submit' className='btn btn-success' id='add'>Add Task</button>
        </form>
      
    </div>
  )
}
