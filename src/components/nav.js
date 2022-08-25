import React, { useState } from 'react';
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
            <button id="demographic" class="select">{demo} ⌄</button>
                  <div id="opt" class="data-options">
                    {generateDemoSelectors()}
                  </div>
            </div>
              <SubDemoSelectors demo={demo}/>
            </div>
          </div>
    </div>

  );
};

export default Nav;