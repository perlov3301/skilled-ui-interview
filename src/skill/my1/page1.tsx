import React from 'react';
import './page1.css';
// import { useState, useEffect } from 'react';

const Page1: React.FC = (props) => {
    return (
        
          <fieldset className="fieldset1">
            <div className="box1" id="box1">
              <div id="box11">
                <div id="box111" className="box111">
                  <a href="https://perlov3301.github.io/Portofolio/" 
                    className="box1111circletag"> </a>
                </div>
                <div id="box112" className="box111">
                  <div id="box1121" >Alex Perlov</div>
                  <div id="box1122" >Developer</div>
                </div>
                <div id="box113" >
                  <span role="button" >X</span>
                </div>
              </div> {/* end id=box11 */}
              <div id="box12" >
                Hi there.&#128075;We use Boards to share 
                initial goals and ideas.
              </div>
            </div> {/* end id=box1 */}
            <form className="box1" id="box2">
              <div className="box21" id="box21">
                <input type="text" placeholder="type your message" 
                  id="message"
                />
              </div>
              <div className="raw-item" id="raw">
                <button type="submit">Submit</button>
              </div>
            </form>
          </fieldset>
        
  
    );
}

export default Page1;