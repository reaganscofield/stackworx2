import React, { Component } from 'react';




class NavbarComponent extends Component {
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="">
            StackWorx Challenge
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a  href="#" className="nav-link" to="/" >Home</a>
            </li>
            <li className="nav-item active">
               <a href="#" className="nav-link" to="/task" >Manager Tasks</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default NavbarComponent;
