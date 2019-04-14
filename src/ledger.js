const buildLedger = (data, root) => {

  let ledgerItems = [];


  for (let i = 0; i < root.children.length; i++) {
    const ledgerVal = root.children[i].value;
    ledgerItems.push(`<li class="ledger-item">
                          <div class="value">${ledgerVal}</div>
                          <span>${data.children[i].category}_</span>
                      </li>`)
  }

  document.getElementById("ledger-items").innerHTML = ledgerItems.slice(',').join('');

};