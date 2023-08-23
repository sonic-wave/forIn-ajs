export default function orderByProps(obj, arr) {
  if (arr === undefined || arr === '' || arr.length === 0) {
    throw new Error('Введите аргумент порядка сортировки свойств');
  }

  const tmp = [];
  const array = [];
  for (const key in obj) {
    if (key) {
      tmp.push(key);
    }
  }
  arr.forEach((element) => {
    if (element in obj) {
      array.push({
        key: element,
        value: obj[element],
      });
    }
    for (let i = 0; i < tmp.length; i += 1) {
      if (element === tmp[i]) {
        tmp.splice(i, 1);
      }
    }
  });
  tmp.sort();
  tmp.forEach((element) => {
    array.push({
      key: element,
      value: obj[element],
    });
  });

  return array;
}
