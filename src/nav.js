document.getElementById("nav1").innerHTML =
        `<button id="demographic" class="select">National Average_</button>
          <div id="op" class="data-options">
            <a id="age" onClick="changeDemo('Age_')">Age_</a>
            <a id="size" onClick="changeDemo('Household Size_')">Household Size_</a>
            <a id="income" onClick="changeDemo('Income Level_')">Income Level_</a>
          </div>`

function changeDemo(dataType) {

  if (dataType === 'Age_') {

  document.getElementById("demographic").innerHTML = dataType;
  document.getElementById("op").innerHTML = 
    `<a id="size" onClick="changeDemo('Household Size_')">Household Size_</a>
    <a id="income" onClick="changeDemo('Income Level_')">Income Level_</a>
    <a id="age" onClick="changeDemo('National Average_')">National Average_</a>`
  
  } else if (dataType === 'Household Size_') {
    document.getElementById("demographic").innerHTML = dataType;
    document.getElementById("op").innerHTML =
      `<a id="income" onClick="changeDemo('Income Level_')">Income Level_</a>
      <a id="age" onClick="changeDemo('National Average_')">National Average_</a>
      <a id="age" onClick="changeDemo('Age_')">Age_</a>`
  } else if (dataType === 'Income Level_') {
    document.getElementById("demographic").innerHTML = dataType;
    document.getElementById("op").innerHTML =
     `<a id="age" onClick="changeDemo('National Average_')">National Average_</a>
      <a id="age" onClick="changeDemo('Age_')">Age_</a>
      <a id="size" onClick="changeDemo('Household Size_')">Household Size_</a>`
  } else if (dataType === 'National Average_') {
    document.getElementById("demographic").innerHTML = dataType;
    document.getElementById("op").innerHTML =
      `<a id="age" onClick="changeDemo('Age_')">Age_</a>
      <a id="size" onClick="changeDemo('Household Size_')">Household Size_</a>
      <a id="income" onClick="changeDemo('Income Level_')">Income Level_</a>`
  }

}