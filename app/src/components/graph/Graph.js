import React from 'react';

const Graph = ({ dataIndex }) => {

  return(
    <div class="visualizer">
      <div id="float">
        <svg id="graph" class="graph">{dataIndex}</svg>
      </div>
    </div>
  )

};

export default Graph;