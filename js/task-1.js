const getItemsString = function (array) {
  'use strict';
  // Write code under this line
  let result = '';
  let number = 0;
  for (let i = 0; i < array.length; i += 1) {
    {
      result += `${i + 1} - ${array[i]}\n`;
    }
  }
  return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log(getItemsString([5, 10, 15]));
