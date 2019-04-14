const subSelectors = s2017.map((cat, i) => `<a onClick="selectData("${i}")>${cat[0]}</a>`)

const householdSize = subSelectors.slice(2, 7).slice(',').join('')
const ageGroup = subSelectors.slice(7, 13).slice(',').join('')
const incomeLevel = subSelectors.slice(13, 21).slice(',').join('')

document.getElementById("subSelector").innerHTML =
  `<button id="sub" class="select"></button>
    <div id="opt2" class="data-options"></div>`

const selectData = (selector) => {
  let set = s2017;
  const data = parseData(set, selector);
  return data;
}