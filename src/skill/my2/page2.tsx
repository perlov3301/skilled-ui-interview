import React from 'react';
import './page2.css';
// import { useState, useEffect } from 'react';
const im1 = require('./nike1.jpg');
const im2 = require('./nike2.jpg');
const im3 = require('./nike3.jpg');
// console.log(im1);
const Page2: React.FC = (props) => {
    return (
    <fieldset className="fieldset2">
        <div className="p2box1" >
          <div className="p2box11image" >
            <img src={im1} alt="first img" />
          </div>
          <div className="p2box12">
            <span className="p2box111model" >Nike Air Max 270</span>
            <span className="p2box112brand" >Nike</span>
            <span className="p2box113cost" >$195.80</span>
          </div>
        </div>
        <div className="p2box1" >
          <div className="p2box11image" >
            <img src={im2} alt="second img" />
          </div>
          <div className="p2box12">
            <span className="p2box111model" > Nike Air Max 90</span>
            <span className="p2box112brand" >Nike</span>
            <span className="p2box113cost" >$195.80</span>
          </div>
        </div>
        <div className="p2box1" >
          <div className="p2box11image" >
            <img src={im3} alt="third img" />
          </div>
          <div className="p2box12">
            <span className="p2box111model" > Nike Air Max Plus</span>
            <span className="p2box112brand" >Nike</span>
            <span className="p2box113cost" >$195.80</span>
          </div>
        </div>
    </fieldset>
    );
}

export default Page2;