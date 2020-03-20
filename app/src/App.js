import React from 'react';
import './stylesheets/_css_reset.css';
import './stylesheets/application.css';
import Nav from './components/nav';

const App = () => {

  return (
      <div id="app">

        <Nav />

        <div class="sub-header">

          <div class="sub-header-value">
            <div id="income" class="sub-val">$0.00</div>
            <div class="sub-cat">Pre-Tax Income</div>
          </div>

          <div id="percentage" class="sub-header-value">
            <div id="sub-val" class="sub-val">$0.00</div>
            <div id="sub-percent">% 0</div>
            <div id="sub-cat" class="sub-cat">Segment</div>
          </div>

        </div>

        <div id="segments">

          <div id="ledger" class="ledger">


            <div id="ledger-wrapper">

              <div class="annual">
                <div id="total" ></div>
                <div class="annual-total" >annual expenses</div>
              </div>

              <div id="ledger-items" class=""></div>

            </div>

          </div>

          <div class="visualizer">
            <div id="float">
              <svg id="graph" class="graph">1</svg>
            </div>
          </div>

        </div>

        <div class="sub-header">
          <div class="sub-header-value">
            <div id="savings" class="sub-val">$0.00</div>
            <div class="sub-cat">Discretionary Income</div>
          </div>
        </div>

        <div class="footer">
          <span>Source: Consumer Expenditure Survey, U.S. Bureau of Labor Statistics, September, 2018 | Mean values represented</span>
          <span><i class="far fa-copyright"></i> mark vincent rodriguez | 2019</span>
        </div>
      </div>

  );
}

export default App;
