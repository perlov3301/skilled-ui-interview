import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import './App.css';

export default class Navbar2 extends React.Component {
    render() {
        return (
           <nav className="navbar navbarbackground">navbar2.js
             <h2><Link to="/home" style={{background: 'inherit'}}>
               <Button variant="contained"  style={{backgroundColor: 'rgb(45,65, 100)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em',
                        textDecoration: 'none'}} >
                  <HomeIcon />Home
                </Button>
              </Link></h2>
             <div className="navbarbuttons">
               <Link to="/page1" className="btn">Page1</Link>
             </div>
             <div className="navbarbuttons">
               <Link to="/page2" className="btn">Page2</Link>
             </div>
             {/* <div className="navbarbuttons">
               <Link to="/gaugin" className="btn">Gaugin</Link>
             </div>
             <div className="navbarbuttons">
               <Link to="/e" className="btn">Employees</Link>
             </div> */}
           </nav>
        );
    }
}