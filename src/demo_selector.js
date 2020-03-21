const age = `<a onClick="changeDemo('age')">Age Group</a>`;
const size = `<a onClick="changeDemo('size')">Household Size</a>`;
const income = `<a onClick="changeDemo('income')">Income Level</a>`;
const metro = `<a onClick="changeDemo('metro')">Metro Area</a>`;
const national = `<a onClick="changeDemo('national')">National Average</a>`;

document.getElementById("demoSelector").innerHTML =
`<button id="demographic" class="select"></button>
<div id="opt" class="data-options">${age}${size}${income}${metro}</div>`

document.getElementById("demographic").innerHTML = 'National Average<i class="fas fa-chevron-down"/>';

export const changeDemo = dataType => {

  if (dataType === 'age') {
    document.getElementById("demographic").innerHTML = 'Age Group |';
    document.getElementById("opt").innerHTML = `${size}${income}${metro}${national}`
    assignOptions('s2017', ageGroup);

  } else if (dataType === 'size') {
    document.getElementById("demographic").innerHTML = 'Household Size |';
    document.getElementById("opt").innerHTML = `${income}${metro}${national}${age}`
    assignOptions('s2017', householdSize)

  } else if (dataType === 'income') {
    document.getElementById("demographic").innerHTML = 'Income Level |';
    document.getElementById("opt").innerHTML = `${metro}${national}${age}${size}`
    assignOptions('s2017', incomeLevel)

  } else if (dataType === 'metro') {
    document.getElementById("demographic").innerHTML = 'Metro Area |';
    document.getElementById("opt").innerHTML = `${national}${age}${size}${income}`
    assignOptions('metro2017', metroArea)

  } else if (dataType === 'national') {
    document.getElementById("demographic").innerHTML = 'National Average<i class="fas fa-chevron-down"/>';
    document.getElementById("opt").innerHTML = `${age}${size}${income}${metro}`
    document.getElementById("sub").innerHTML = null;
    document.getElementById("opt2").innerHTML = null;
    document.getElementById("graph").innerHTML = 1;
    document.getElementById("income").innerHTML = currency.format(sIncome2017[0]);
    renderGraph();
  }

};

