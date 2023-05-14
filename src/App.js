import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import Addtask from './Components/Addtask';
import Footer from './Components/Footer';
import About from './Components/About';
// import Home from './Components/Home';
import React,{ useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTask;
  if(localStorage.getItem("tasks")===null){
    initTask =[];
  }
  else{
    initTask = JSON.parse(localStorage.getItem("tasks"));
  }
  
  let onDelete = (task)=>{
    setTasks(tasks.filter((e)=>{
      return e !== task;
    }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
    
  }

  let addTask = (heading, desc)=>{
    let sno;
    if(tasks.length===0){
      sno=0;
    }
    else{
      sno = tasks[tasks.length-1].sno + 1;
    }
    let myTask = {
      sno: sno,
      heading: heading,
      desc: desc
    }
  setTasks([...tasks,myTask]);

  }

  let [tasks, setTasks] = useState([initTask]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks])

  return (
    <>
    <Router>
    <Header title="Maintain your tasks here!"/>
    <Routes>
      
          {/* <Route exact path="/" element={<Home/>}></Route> */}
          <Route exact path='/updatetasks' element={<Addtask addTask={addTask}/> }></Route>
          <Route exact path='/' element={<Tasks tasks={tasks} onDelete={onDelete}/> }></Route>
          {/* <Route exact path="/" render={()=>{
            return(
              <>
              <Addtask addTask={addTask}/>
              <Tasks tasks={tasks} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route> */}
          <Route exact path="/about" element={<About/>}></Route>

        </Routes>

    <Footer/>
    </Router>
    </>
  );
}

export default App;
