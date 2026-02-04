// Написать функцию, которая проверяет является ли слово палиндромом

const word1 = "Анна";
const word2 = "Кабак";
const word3 = "Кот";

function isPalindrome(word: string) {
  return word.toLowerCase().split("").reverse().join("") === word.toLowerCase();
}
console.log(isPalindrome(word3));
console.log(isPalindrome(word2));
console.log(isPalindrome(word1));
