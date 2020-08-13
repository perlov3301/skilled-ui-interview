import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar2 from './navbar2';
import Employee from './employee';
import Page1 from './skill/my1/page1';
import Page2 from './skill/my2/page2';



function  rendercontent() {
  return (
    <div className="appcontent">

      <Route exact path="/e" component={() => <Employee />} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
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
