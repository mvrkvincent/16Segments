const parseData = (data, selector) => {
  const header = data[0];
  let parsed = [{ 'category': data[selector][0], 'children': [] }];
  const base = parsed[0]
  let level = 0;
  let sub;

  for (let i = 1; i < 7; i++) {
    const cat = header[i];
    const val = data[selector][i];
    const parent = { 'category': cat, 'children': [] };
    const child = { 'category': cat, 'cost': val }


    if (level === 0) {
      if (val === '') {
        base.children.push(parent)
        level = 1;
      } else {
        base.children.push(child)
      }
    } else if (level === 1) {
      sub = base
        .children[base.children.length - 1]

      if (val === '') {
        sub.children.push(parent)
        level = 2;
      } else {
        sub.children.push(child)
      }
    } else if (level === 2) {
      sub = base
        .children[base.children.length - 1]
        .children[[[base.children.length - 1].children].length - 1]

      if (val === '') {
        sub.children.push(parent)
        level = 3;
      } else {
        sub.children.push(child)
      }
    } else if (level === 3) {
      sub = base
        .children[base.children.length - 1]
        .children[[[base.children.length - 1].children].length - 1]
        .children[[[[base.children.length - 1].children].length - 1].length - 1]

      sub.children.push(child)
    }
  }

  return parsed[0];
};

console.log(parseData(s2017, 1));