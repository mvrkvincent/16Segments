const currency = new Intl.NumberFormat('en-US',{
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

const buildLedger = root => {
  let ledgerItems = [];
  for (let i = 0; i < root.children.length; i++) {
    const ledgerVal = currency.format(root.children[i].value);
    const category = root.children[i].data.category
    ledgerItems.push(`<div id="${category}" class="ledger-item">
    <div class="value" id="${category}val">${ledgerVal}</div>
    <span>${category}_</span>
    </div>`);          
  };
  
  document.getElementById("ledger-items").innerHTML = ledgerItems.slice(',').join('');
  document.getElementById("total").innerHTML = `${currency.format(root.value)}`;
};