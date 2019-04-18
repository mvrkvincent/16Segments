const subSelectors = s2017.map((cat, i) => [cat[0],i]);
const ageGroup = [subSelectors.slice(7, 13), sIncome2017.slice(6,12)] 
const householdSize = [subSelectors.slice(2, 7), sIncome2017.slice(1,6)];
const incomeLevel = [subSelectors.slice(13, 21), sIncome2017.slice(12,20)]
const metroArea = [metro2017.map((cat, i) => [cat[0], i]).slice(1), metroIncome2017]

document.getElementById("subSelector").innerHTML =
`<button id="sub" class="select"></button>
<div id="opt2" class="sub-opt"></div>`

const options = document.getElementById('opt2')
const avgIncome = document.getElementById('income')

const createOptionsList = (dataSet,dataType) => {
  optionsList = []
  catOptions = dataType[0]
  incomeOptions = dataType[1]
  for (let i=0; i < catOptions.length; i++ ) {

    optionsList.push(`<a onClick="selectData('${catOptions[i]},${dataSet},${incomeOptions[i]}')">${catOptions[i][0]}</a>`);
  }
  return optionsList;
}

const assignOptions = (dataSet, dataType) => {

  document.getElementById("sub").innerHTML = `Demographic<i class="fas fa-chevron-down">`;
  oList = createOptionsList(dataSet, dataType).slice(',').join('');

  options.innerHTML = oList;
}

const selectData = selection => {
  selection = selection.split(",");
  const header = selection.slice(0, selection.length - 3).join(",");
  const dataIndex = selection.slice(selection.length - 3, selection.length - 2);
  const dataSet = selection.slice(selection.length - 2, selection.length - 1); 
  const catIncome = selection.slice(selection.length - 1)


  document.getElementById("sub").innerHTML = header;
  document.getElementById("graph").innerHTML = dataIndex;
  
  renderGraph(dataSet, catIncome);
}