const buildLedger = (data, root) => {

  let ledgerItems = [];
  let total = 0;
  
  for (let i = 0; i < root.children.length; i++) {
    const ledgerVal = root.children[i].value;
    ledgerItems.push(`<li class="ledger-item">
    <div class="value">${ledgerVal}</div>
    <span>${root.children[i].data.category}_</span>
    </li>`);
    
    total += ledgerVal;                  
  };
  

  document.getElementById("ledger-items").innerHTML = ledgerItems.slice(',').join('');
  document.getElementById("total").innerHTML = total;
};