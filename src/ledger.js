const currency = new Intl.NumberFormat('en-US',{
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

const buildLedger = root => {
  let ledgerItems = [];
  for (let i = 0; i < root.children.length; i++) {
    const ledgerVal = currency.format(root.children[i].value);
    ledgerItems.push(`<li class="ledger-item">
    <div class="value">${ledgerVal}</div>
    <span id="cat${i}">${root.children[i].data.category}_</span>
    </li>`);          
  };
  
  document.getElementById("ledger-items").innerHTML = ledgerItems.slice(',').join('');
  document.getElementById("total").innerHTML = `${currency.format(root.value)}`;
};