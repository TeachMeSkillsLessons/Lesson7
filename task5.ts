// Написать функцию, которая разворачивает вложенные массивы в один

function flattenArray<T>(arr: (T | T[])[]): T[] {
  const result: T[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
const array: (number | number[])[] = [1, [2, 3], [4], 5, [6, 7, 8]];

const result = flattenArray<number>(array);
console.log(result);
