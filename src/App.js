import React from 'react';
import './stylesheets/_css_reset.css';
import './stylesheets/app.css';
import Nav from './components/nav';

const App = () => {

  return (
      <div className='container'>

        <Nav />

        <div className='application'>

          <div className='ledger-div'>

            <div className='totals'>

              <div id="income" style={{border: 'none'}} className='section'>$0.00</div>
              <div id="total" style={{ border: 'none' }} className='section'></div>
              <div id="savings" style={{ border: 'none' }} className='section'>$0.00</div>

            </div>

            <div className='sub-totals'>

              <div className='section'>Pre-Tax Income</div>
              <div id="ledger-items" className="section"></div>
              <div className='section'>Discretionary Income</div>

            </div>

            <div className='categories'>

            </div>

          </div>

          <div className='visualizer-div'>
              <div className='detail'>
                <div id="sub-val" style={{ border: 'none' }} className='section'>$0.00</div>
                <div id="sub-percent" className='section'>% 0</div>
                <div id="sub-cat" className='section'>Segment</div>
              </div>
              <div id="float">
                <svg id="graph">1</svg>
              </div>
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
