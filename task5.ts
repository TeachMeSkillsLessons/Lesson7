/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];
function oneArray(arr: any[]) {
  const simpleArray = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      for (const subvalue of value) {
        simpleArray.push(subvalue);
      }
    } else {
      simpleArray.push(value);
    }
  }
  return simpleArray;
}
console.log(oneArray(array));

//const result = [1, 2, 3, 4, 5, 6, 7, 8];
