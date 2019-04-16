const subSelectors = s2017.map((cat, i) => [cat[0],i]);
const ageGroup = subSelectors.slice(7, 13);
const householdSize = subSelectors.slice(2, 7);
const incomeLevel = subSelectors.slice(13, 21);
const metroArea = metro2017.map((cat, i) => [cat[0], i]).slice(1);

document.getElementById("subSelector").innerHTML =
`<button id="sub" class="select"></button>
<div id="opt2" class="sub-opt"></div>`

const options = document.getElementById('opt2')

const assignOptions = (dataSet, dataType) => {

  document.getElementById("sub").innerHTML = `Select_`;
  options.innerHTML = dataType.map((cat, i) => `<a onClick="selectData('${cat},${dataSet}')">${cat[0]}</a>`)
  .slice(',').join('');

}
    
const selectData = selection => {

  selection = selection.split(",");
  const header = selection.slice(0, selection.length - 2).join(",");
  const dataIndex = selection.slice(selection.length - 2, selection.length - 1);
  const dataSet = selection.slice(selection.length - 1); 
  document.getElementById("sub").innerHTML = header;
  document.getElementById("graph").innerHTML = dataIndex;

  renderGraph(dataSet);
}