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

  const selectSubCat = segment => {
    const innerData = segment.__data__;
    let subCat;
    if (innerData.depth === 1) {
      subCat = innerData.data.category
    } else if (innerData.depth === 2) {
      subCat = innerData.parent.data.category
    } else if (innerData.depth === 3) {
      subCat = innerData.parent.parent.data.category
    } else if (innerData.depth === 4) {
      subCat = innerData.parent.parent.parent.data.category
    }
    return subCat
  }

  const displaySubTotal = segment => {
    const innerData = segment.__data__;
    const category = innerData.data.category;
    const color = segment.style.fill;
    const subCat = selectSubCat(segment);
    
    const sub = document.getElementById(`${subCat}`);
    
    sub.style.color = `${color}`;
    sub.style.fontWeight = '900'
    document.getElementById(`${subCat}-val`).style.color = `${color}`;
    document.getElementById('sub-cat').innerHTML = `${category}`;
    document.getElementById('sub-val').innerHTML = `${currency.format(innerData.value)}`;
    document.getElementById('sub-val').style.borderColor = `${color}`;
  }

  const revertSubtotal = segment => {
    const subCat = selectSubCat(segment)
    const sub = document.getElementById(`${subCat}`);

    sub.style.color = '#999999';
    sub.style.fontWeight = '400';
    document.getElementById(`${subCat}-val`).style.color = '#000000';
    document.getElementById('sub-cat').innerHTML = "Segment_";
    document.getElementById('sub-val').innerHTML = "$0.00";
    document.getElementById('sub-val').style.borderColor = '#000000';
  }
  const colors = [];

  graph.selectAll('path')
    .data(root.descendants())
    .enter()
    .append('path')
    .attr('display', d => d.depth ? null : 'none')
    .attr('d', arc)
    .style('stroke-width', 2)
    .style('stroke', 'white')
    .style('fill-opacity', 0.8)
    .on("mouseover", function () { d3.select(this).style('fill-opacity', 1), displaySubTotal(this) })
    .on("mouseout", function () { d3.select(this).style('fill-opacity', 0.8), revertSubtotal(this) }) 
    .style('fill', d => { 
      if ( d.depth === 1 ) {
        colors.push(color(d.data.category))
        return color(d.data.category)
      } else if (d.depth === 2) {
        return color(d.parent.data.category)
      } else if (d.depth === 3){
        return color(d.parent.parent.data.category)
      } else if (d.depth === 4) {
        return color(d.parent.parent.parent.data.category)
      }
    })

  buildLedger(root, colors);

}