const age = `<a onClick="changeDemo('age')">Age Group_</a>`;
const size = `<a onClick="changeDemo('size')">Household Size_</a>`;
const income = `<a onClick="changeDemo('income')">Income Level_</a>`;
const metro = `<a onClick="changeDemo('metro')">Metro Area</a>`;
const national = `<a onClick="changeDemo('national')">National Average</a>`;

document.getElementById("demoSelector").innerHTML =
`<button id="demographic" class="select">National Average</button>
<div id="opt" class="data-options">${national}${age}${size}${income}${metro}</div>`

const changeDemo = dataType => {

  if (dataType === 'age') {
    document.getElementById("demographic").innerHTML = 'Age Group |';
    assignOptions('s2017', ageGroup);

  } else if (dataType === 'size') {
    document.getElementById("demographic").innerHTML = 'Household Size |';
    assignOptions('s2017', householdSize)

  } else if (dataType === 'income') {
    document.getElementById("demographic").innerHTML = 'Income Level |';
    assignOptions('s2017', incomeLevel)

  } else if (dataType === 'metro') {
    document.getElementById("demographic").innerHTML = 'Metro Area |';
    assignOptions('metro2017', metroArea)

    // // temporary placeholder functions
    // document.getElementById("sub").innerHTML = `Data Unavailable_`;
    // document.getElementById("opt2").innerHTML = null;
    // document.getElementById("graph").innerHTML = 1;
    // renderGraph();

  } else if (dataType === 'national') {
    document.getElementById("demographic").innerHTML = 'National Average';
    document.getElementById("sub").innerHTML = null;
    document.getElementById("opt2").innerHTML = null;
    document.getElementById("graph").innerHTML = 1;
    renderGraph();
  }

}

