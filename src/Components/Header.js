import React from "react";
import { Link } from "react-router-dom";

export default function Header({title}){
    return(
        <>
        <div className="navbar"> 
        <h5>{title}</h5>

        <nav>
        <li><Link to="/" className='navlink'>Home</Link></li>
        <li><Link to="/updatetasks" className='navlink'>Add-Tasks</Link></li>
        <li><Link to="/about" className='navlink'>About</Link></li>
        </nav>

        </div>
        </>

    )
}