import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
   
      <div>
       <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
       <div className="container-fluid">
           <a className="navbar-brand fw-bold" href="index.php"><i className="bi bi-book d-none d-sm-inline"></i>JHS</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
               <div className="navbar-nav ms-auto ">
               <Link className="nav-link"  to='/'>Home</Link>
                   
                <Link className="nav-link" to='/emisoras' >Emisoras</Link>
              
            </div>
               </div>
       </div>
   </nav>
     
    </div>
  );
};

export default Navbar;