import { testData } from './data';

const Graph = () => {
  
  const data = testData;

  const d = 400;
  const r = (d / 2);
  const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1))
  
  const graph = d3.select('svg')
  .attr({'width': d, 'height': d})
  .append('g')
  .attr('transform', 'translate(' + rad + ',' + rad + ')');
  
  const partition = d3.partition().size(2 * Math.PI, r);



}

export default Graph;
