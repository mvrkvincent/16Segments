import * as d3 from 'd3';
import { buildLedger } from './ledger';
import { parseData } from './parse';
import { displaySubTotal, revertSubtotal } from './interactions';

export const renderGraph = (dataSet, income) => {
  debugger
  const data = parseData(dataSet);
  const colors = [];
  const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length));
  const dia = 400;
  const rad = dia / 2;
  const partition = d3.partition().size([2 * Math.PI, rad]);

  const graph = d3.select('#graph')
    .attr('width', dia)
    .attr('height', dia)
    .append('g')
    .attr('transform', 'translate(' + rad + ',' + rad + ')');

  const root = partition(
    d3.hierarchy(data)
    .sum(d => d.cost)
    .sort((a, b) => b.value - a.value)
  );

  const arc = d3.arc()
    .innerRadius(d => d.y0)
    .outerRadius(d => d.y1)
    .startAngle(d => d.x0)
    .endAngle(d => d.x1);

  graph.selectAll('path')
    .data(root.descendants())
    .enter()
    .append('path')
    .attr('display', d => d.depth ? null : 'none')
    .attr('d', arc)
    .style('stroke-width', 2)
    .style('stroke', 'white')
    .style('fill-opacity', 0.8)
    .on("mouseover", function () { d3.select(this).style('fill-opacity', 1); displaySubTotal(this); })
    .on("mouseout", function () { d3.select(this).style('fill-opacity', 0.8); revertSubtotal(this); }) 
    .style('fill', d => { 
      if ( d.depth === 1 ) {
        colors.push(color(d.data.category));
        return color(d.data.category);
      } else if (d.depth === 2) {
        return color(d.parent.data.category);
      } else if (d.depth === 3){
        return color(d.parent.parent.data.category);
      } else if (d.depth === 4) {
        return color(d.parent.parent.parent.data.category);
      }
    });
    

  buildLedger(root, colors, income);
    
};