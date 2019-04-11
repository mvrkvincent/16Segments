// import { testData } from './data';


testData = {
  "name": "Expenses",
  "children": [{
    "name": "Food",
    "children": [{ "name": "At Home", "cost": 4 }, { "name": "Away", "cost": 4 }]
  }, {
    "name": "Housing",
    "children": [{ "name": "Shelter", "cost": 3 }, { "name": "Utilities", "cost": 3 }, { "name": "Expenses", "cost": 3 }]
  }, {
    "name": "Clothing",
    "children": [{ "name": "Apparal", "cost": 4 }, { "name": "Shoes", "cost": 4 }, { "name": "Coats", "cost": 2 }, { "name": "Accessories", "cost": 1 }]
  }, {
    "name": "Healthcare",
    "children": [{ "name": "Insurance", "cost": 4 }, { "name": "Medication", "cost": 4 }, { "name": "Expenses", "cost": 3 }]
  }, {
    "name": "Entertainment",
    "children": [{ "name": "Tickets", "cost": 4 }, { "name": "Pets", "cost": 4 }]
  }]
};

const data = testData;

const dia = 400;
const rad = (dia / 2);

const graph = d3.select('svg')
  .attr({'width': dia, 'height': dia})
  .append('g')
  .attr('transform', 'translate(' + rad+ ',' + rad + ')');

const partition = d3.partition().size(2 * Math.PI, rad);
const root = d3.hierarchy(data)
  .sum(d => d.size)
  .sort(a,b => b.value - a.value);

const arc = d3.arc()
  .innerRadius(d => d.y0)
  .outerRadius(d => d.y1)
  .startAngle(d => d.x0)
  .endAngle(d.x1);

const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

partition(root);

graph.selectAll('path')
  .enter('path')
  .attr('d', arc)
  .style({
    'stroke': white,
    'fill': d => color((d.children ? d : d.parent).data.name)
  });

