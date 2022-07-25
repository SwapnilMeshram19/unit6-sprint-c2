import React from "react";
import {Link} from "react-router-dom";





const Navbar =()=>{

    return(
        <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Blog'>Blog</Link>
        </div>
    )
   
}

export default Navbar;