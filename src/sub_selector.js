const subSelectors = s2017.map((cat, i) => [cat[0], i]);

const ageGroup = subSelectors.slice(7, 13)
const householdSize = subSelectors.slice(2, 7)
const incomeLevel = subSelectors.slice(13, 21)

document.getElementById("subSelector").innerHTML =
  `<button id="sub" class="select"></button>
    <div id="opt2" class="data-options"></div>`

    
    const assignOptions = () => {
      const selectedSub = document.getElementById("demographic").innerHTML
      
      const options = document.getElementById("opt2")
      if (selectedSub === 'Age Group |') {
        document.getElementById("sub").innerHTML = `${ageGroup[0][0]}`;
        debugger
        options.innerHTML = ageGroup.map((cat) => `<a onClick="selectData(${cat[1]})>${cat[0]}</a>`)
        .slice(',').join('');
        debugger
      } else if (selectedSub === 'Household Size |') {
        document.getElementById("sub").innerHTML = `${householdSize[0][0]}`;
        options.innerHTML = householdSize.map((cat) => `<a onClick="selectData(${cat[1]})>${cat[0]}</a>`)
        .slice(',').join('');
      } else if (selectedSub === 'Income Level |'){
        document.getElementById("sub").innerHTML = `${incomeLevel[0][0]}`;
        options.innerHTML = incomeLevel.map((cat) => `<a onClick="selectData(${cat[1]})>${cat[0]}</a>`)
        .slice(',').join('');
      }
    }
    

const selectData = dataType => {

  document.getElementById("selectedData").innerHTML = dataType

}