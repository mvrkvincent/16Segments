import { testData } from './data';

const Graph = () => {
  
  const data = testData;

  const dia = 400;
  const rad = (dia / 2);
  const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1))
  
  const graph = d3.select('svg')
  .attr({'width': dia, 'height': dia})
  .append('g')
  .attr('transform', 'translate(' + rad+ ',' + rad + ')');
  
  const partition = d3.partition().size(2 * Math.PI, rad);
  const root = d3.hierarchy(data)
    .sum(d => d.size)
    .sort(a,b => b.value - a.value)

  


}

export default Graph;
