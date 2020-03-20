const selectSubCat = segment => {
  const innerData = segment.__data__;
  let subData = innerData;
  let subCat = {
    cat: null,
    val: null
  };

  if (innerData.depth === 1) {
    subData = innerData;
  } else if (innerData.depth === 2) {
    subData = innerData.parent;
  } else if (innerData.depth === 3) {
    subData = innerData.parent.parent;
  } else if (innerData.depth === 4) {
    subData = innerData.parent.parent.parent;
  }
  subCat.cat = subData.data.category;
  subCat.val = subData.parent.value;
  return subCat;
};


export const displaySubTotal = segment => {

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  const innerData = segment.__data__;
  const category = innerData.data.category;
  const color = segment.style.fill;
  const { cat, val } = selectSubCat(segment);
  const sub = document.getElementById(`${cat}`);
  const percent = Math.floor(100 * (innerData.value / val));
  let portion = percent > 1 ? `% ${percent}` : '% < 1';


  sub.style.color = `${color}`;
  sub.style.fontWeight = '900';
  document.getElementById(`${cat}-val`).style.color = `${color}`;
  document.getElementById('sub-cat').innerHTML = `${category}`;
  document.getElementById('sub-val').innerHTML = `${currency.format(innerData.value)}`;
  document.getElementById('sub-val').style.borderColor = `${color}`;
  document.getElementById('sub-percent').innerHTML = portion;
  document.getElementById('sub-percent').style.borderColor = `${color}`;
};

export const revertSubtotal = (segment) => {
  const { cat, val } = selectSubCat(segment);
  const sub = document.getElementById(`${cat}`);

  sub.style.color = '#999999';
  sub.style.fontWeight = '400';
  document.getElementById(`${cat}-val`).style.color = '#000000';
  document.getElementById('sub-cat').innerHTML = "Segment";
  document.getElementById('sub-val').innerHTML = "$0.00";
  document.getElementById('sub-val').style.borderColor = '#000000';
  document.getElementById('sub-percent').innerHTML = '% 0';
  document.getElementById('sub-percent').style.borderColor = '#000000';
};