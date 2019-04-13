const age = `<a id="age" onClick="changeDemo('Age_')">Age_</a>`;
const size = `<a id="size" onClick="changeDemo('Household Size_')">Household Size_</a>`;
const income = `<a id="income" onClick="changeDemo('Income Level_')">Income Level_</a>`;
const national = `<a id="age" onClick="changeDemo('National Average_')">National Average_</a>`;

document.getElementById("demoSelector").innerHTML =
        `<button id="demographic" class="select">National Average_</button>
          <div id="op" class="data-options">${age}${size}${income}</div>`

const changeDemo = dataType => {

  if (dataType === 'Age_') {
    document.getElementById("demographic").innerHTML = dataType;
    document.getElementById("op").innerHTML = `${size}${income}${national}`
  
  } else if (dataType === 'Household Size_') {
    document.getElementById("demographic").innerHTML = dataType;
    document.getElementById("op").innerHTML = `${income}${national}${age}`

  } else if (dataType === 'Income Level_') {
    document.getElementById("demographic").innerHTML = dataType;
    document.getElementById("op").innerHTML = `${national}${age}${size}`

  } else if (dataType === 'National Average_') {
    document.getElementById("demographic").innerHTML = dataType;
    document.getElementById("op").innerHTML = `${age}${size}${income}`
    document.getElementById("subSelector").innderHTML = null;
  }

}