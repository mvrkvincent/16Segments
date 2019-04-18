const currency = new Intl.NumberFormat('en-US',{
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

const buildLedger = (root, color, selectedIncome) => {
  const total = root.value;
  let ledgerItems = [];
  for (let i = 0; i < root.children.length; i++) {
    const ledgerVal = currency.format(root.children[i].value);
    const category = root.children[i].data.category
    ledgerItems.push(`<div id="${category}" class="ledger-item">
    <div class="value" id="${category}-val" style="border-color:${color[i]}">${ledgerVal}</div>
    <span>${category}</span>
    </div>`);          
  };

  document.getElementById("ledger-items").innerHTML = ledgerItems.slice(',').join('');
  document.getElementById("total").innerHTML = `${currency.format(total)}`;
  document.getElementById("income").innerHTML = `${currency.format(selectedIncome)}`
  calculateSavings(total, selectedIncome)
};

  const calculateSavings = (total, selectedIncome) => {
  document.getElementById("savings").innerHTML = currency.format(selectedIncome - total);
}