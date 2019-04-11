const data = testData;

const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

var dia = 400;
var rad = dia / 2;

const graph = d3.select('svg')
  .attr('width', dia)
  .attr('height', dia)
  .append('g')
  .attr('transform', 'translate(' + rad + ',' + rad + ')');

const partition = d3.partition().size([2 * Math.PI, rad]);

const root = d3.hierarchy(data)
  .sum(d => d.cost)
  .sort((a, b) => b.value - a.value);

partition(root);

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
  .style('stroke', '#fff')
  .style('fill', d => color((d.children ? d : d.parent).data.category));

