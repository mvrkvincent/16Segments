
const age = `<a onClick="changeDemo('age')">Age Group</a>`;
const size = `<a onClick="changeDemo('size')">Household Size</a>`;
const income = `<a onClick="changeDemo('income')">Income Level</a>`;
const national = `<a onClick="changeDemo('average')">National Average</a>`;

document.getElementById("demoSelector").innerHTML =
`<button id="demographic" class="select">National Average</button>
<div id="opt" class="data-options">${age}${size}${income}</div>`


const changeDemo = dataType => {

  if (dataType === 'age') {
    document.getElementById("demographic").innerHTML = `Age Group |`;
    document.getElementById("opt").innerHTML = `${size}${income}${national}`
    document.getElementById("sub").innerHTML = `Select`;
    document.getElementById("opt2").innerHTML = `${ageGroup}`;

  } else if (dataType === 'size') {
    document.getElementById("demographic").innerHTML = 'Household Size |';
    document.getElementById("opt").innerHTML = `${income}${national}${age}`
    document.getElementById("sub").innerHTML = `Select`;
    document.getElementById("opt2").innerHTML = `${householdSize}`;

  } else if (dataType === 'income') {
    document.getElementById("demographic").innerHTML = 'Income Level |';
    document.getElementById("opt").innerHTML = `${national}${age}${size}`
    document.getElementById("sub").innerHTML = `Select`;
    document.getElementById("opt2").innerHTML = `${incomeLevel}`;

  } else if (dataType === 'average') {
    document.getElementById("demographic").innerHTML = 'National Average';
    document.getElementById("opt").innerHTML = `${age}${size}${income}`
    document.getElementById("sub").innerHTML = null;
    document.getElementById("opt2").innerHTML = null;
  }

}

