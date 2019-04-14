const buildLedger = (data, color) => {

  const square = `<svg id="icon" width="14" height="14"><rect x="0" y="0" width="14" height ="14"/></svg>`
  let ledgerItems = [];
  let squares = [];




  for (let i = 0; i < data.children.length; i++) {
    ledgerItems.push(`<div class="ledger-item">${square} ${data.children[i].category}</div>`)
  }

  document.getElementById("ledger-items").innerHTML = ledgerItems.slice(',').join('');


  const ledgerIcons = d3.selectAll('#icon').append("g");



};