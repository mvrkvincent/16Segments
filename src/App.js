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
          <div className="about">
            <a href="https://mvrk.dev/"><i class="fas fa-globe"></i></a>
            <a href="https://github.com/mvrkvincent"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mvrkvincent/"><i class="fab fa-linkedin"></i></a>
            <a href="https://angel.co/mark-vincent-rodriguez"><i class="fab fa-angellist"></i></a>
          </div>
          <div className='copy'>
            <span>Source: Consumer Expenditure Survey, U.S. Bureau of Labor Statistics, September, 2018 - Mean values represented</span>
            <span>Designed & Engineered by Mark Vincent in Brooklyn, NY | &copy; 2019</span>
          </div>
        </div>
      </div>

  );
}

export default App;
