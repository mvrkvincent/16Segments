const parseData = (data, selector) => {
  const header = data[0];
  const parsed = [{ 'category': data[selector][0], 'children': [] }];
  const base = parsed[0]
  let level = 0;
  let j = 1;

  for (let i = 1; i < header.length; i++) {

    let sub1, sub2, sub3
    const cat = header[i];
    const val = data[selector][j];
    const parent = { 'category': cat, 'children': [] };
    const child = { 'category': cat, 'cost': val }

    if (cat === '***') {
      level = 0;
      continue
    } else if (cat === '**') {
      level = 1;
      continue
    } else if (cat === '*') {
      level = 2;
      continue
    };

    if (level === 0) {

      if (val === null) {
        base.children.push(parent)
        level = 1;
      } else {
        base.children.push(child)
      };
      j++;

    } else if (level === 1) {
      sub1 = base.children[base.children.length - 1];


      if (val === null) {
        sub1.children.push(parent)
        level=2;
      } else {
        sub1.children.push(child)
      };
      j++;

    } else if (level === 2) {
      sub1 = base.children[base.children.length - 1];
      sub2 = sub1.children[sub1.children.length - 1];


      if (val === null) {
        sub2.children.push(parent)
        level=3;
      } else {
        sub2.children.push(child)
      };
      j++;

    } else if (level === 3) {
      sub1 = base.children[base.children.length - 1];
      sub2 = sub1.children[sub1.children.length - 1];
      sub3 = sub2.children[sub2.children.length - 1];

      sub3.children.push(child)
      j++;
    };

  };

  return parsed[0];
};