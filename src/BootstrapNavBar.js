import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BootstrapNavBar extends Component{
  render(){
    return(
        <nav className="navbar navbar-default navbar-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="#">Jonathan's Weather</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/atlanta">Atlanta</Link></li>
                    <li><Link to="/images">Images</Link></li>
                    <li><Link to="/four">Four</Link></li>
                </ul>
            </div>
        </nav>    
    )
  }
}

export default BootstrapNavBar







