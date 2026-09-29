// Напишите функцию, которая найдет максимальное и минимальное число в массиве

const array: number[] = [5, 2, -4, -8, 23, 55, 34, 0, 8];

function minimum(arr: number[]) {
  if (arr.length === 0) return "Пустой массив";

  let min = arr[0]!;
  let max = arr[0]!;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! < min) {
      min = arr[i]!;
    }
    if (arr[i]! > max) {
      max = arr[i]!;
    }
  }
  return { min, max };
}

console.log(minimum(array));
