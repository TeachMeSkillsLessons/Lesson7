// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];

// Добавляем двоеточие и тип : any[] для аргумента arr
const flatten = (arr: unknown[]) => arr.flat();

const result = flatten(array);
console.log(result);
