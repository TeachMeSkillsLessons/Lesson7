// Написать функцию, которая будет удалять дубликаты из массива, при этом исходный массив не меняется

// Использовать наиболее быстрое решение

const array: number[] = [1, 5, 7, 8, 5, 8, 3];
function deleteDuplicates() {
  const result: number[] = [];
  for (const elem of array) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }
  return result;
}
console.log(deleteDuplicates());
