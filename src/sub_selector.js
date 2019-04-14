const subSelectors = s2017.map((cat, i) => [cat[0],i]);
const ageGroup = subSelectors.slice(7, 13)
const householdSize = subSelectors.slice(2, 7)
const incomeLevel = subSelectors.slice(13, 21)

document.getElementById("subSelector").innerHTML =
  `<button id="sub" class="select"></button>
    <div id="opt2" class="sub-opt"></div>`

    
const assignOptions = dataType => {
  const options = document.getElementById('opt2')

  if (dataType === 'age') {
    document.getElementById("sub").innerHTML = `${ageGroup[0][0]}`;
    test = options.innerHTML = ageGroup.map((cat, i) => `<a onClick="selectData('${cat},${i}')">${cat[0]}</a>`)
    .slice(',').join('');
    // debugger
  } else if (dataType === 'size') {
    document.getElementById("sub").innerHTML = `${householdSize[0][0]}`;
    options.innerHTML = householdSize.map((cat, i) => `<a onClick="selectData('${cat},${i}')">${cat[0]}</a>`)
    .slice(',').join('');
  } else if (dataType === 'income'){
    document.getElementById("sub").innerHTML = `${incomeLevel[0][0]}`;
    options.innerHTML = incomeLevel.map((cat, i) => `<a onClick="selectData('${cat},${i}')">${cat[0]}</a>`)
    .slice(',').join('');
  }
}
    

const selectData = (dataType) => {
  const selection = dataType.split(",");
  const header = document.getElementById("sub").innerHTML = selection[0];
  const graph = document.getElementById("graph").innerHTML = parseInt(selection[1]);
}