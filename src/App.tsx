import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Navbar2 from './navbar2';
import Employees from './Employees';
import Page1 from './skill/my1/page1';
import Page2 from './skill/my2/page2';
import Empty from './Empty';
import Home1 from './home/Home1';



function  rendercontent() {
  return (
    <div className="appcontent">
      <Route exact path="/e" component={() => <Employees />} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/home" component={Home1} />
      <Route exact path="/gaugin" component={Empty} />
    </div>
  );
}
function App() {
 
  return (
<BrowserRouter>
          <div className="App">
            { rendercontent() } 
            <header>
            <div className="navbardiv">
              <Navbar2 />
            </div>
            </header>
            </div>
      </BrowserRouter>
  );
}

export default App;
