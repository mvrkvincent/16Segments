import React, { useState, useEffect } from 'react';
import { demos } from '../data/data';
import {SubDemoSelectors} from './sub_selector';

const Nav = () => {
  const [demo, setDemo] = useState('National Average');

  const generateDemoSelectors = () => {
    let selectors = demos.map((selector, i) => <a key={i} onClick={() => setDemo(selector)}>{selector}</a>);
    return selectors;
  };

  return(

    <div id="header">
      <div id="name">
        <div id="title" onClick={() => setDemo('National Average')}>16Segments</div>
          <div id="nav" class="nav">
            <div id="demoSelector" class="data-selector">
            <button id="demographic" class="select">{demo}</button>
                  <div id="opt" class="data-options">
                    {generateDemoSelectors()}
                  </div>
            </div>
              <SubDemoSelectors demo={demo}/>
            </div>
          </div>
      <div id="nav-about"></div>
      <div id="about">
        <a href="https://markvincent.dev/"><i class="fas fa-globe"></i></a>
        <a href="https://github.com/mvrkvincent"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/markvincentrodriguez/"><i class="fab fa-linkedin"></i></a>
        <a href="https://www.twitter.com/mvrkvincent/"><i class="fab fa-twitter"></i></a>
        <a href="https://angel.co/mark-vincent-rodriguez"><i class="fab fa-angellist"></i></a>
      </div>
    </div>

  );
};

export default Nav;