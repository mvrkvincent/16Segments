const renderGraph = () => {
  const selector = parseInt(document.getElementById("graph").innerHTML);

  let data = parseData(s2017, selector);

  const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length));

  const dia = 500;
  const rad = dia / 2;

  const graph = d3.select('#graph')
    .attr('width', dia)
    .attr('height', dia)
    .append('g')
    .attr('transform', 'translate(' + rad + ',' + rad + ')');

  const partition = d3.partition().size([2 * Math.PI, rad]);

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
    .style('fill', d => { 
      if ( d.depth === 1 ) {
        return color(d.data.category)
      } else if (d.depth === 2) {
        return color(d.parent.data.category)
      } else if (d.depth === 3){
        return color(d.parent.parent.data.category)
      } else if (d.depth === 4) {
        return color(d.parent.parent.parent.data.category)
      }
  });
  

  buildLedger(data, root);


}