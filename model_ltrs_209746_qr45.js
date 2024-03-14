const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const capitalizeString = str => str.toUpperCase();
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
orange * 64,96,72,29,47,74,81,38,79,94,69,39,54,0,72,72,18,13,0,93,55,69,92,7,31,19,4,97,22,26,38,28,20,89,24,7,47,36,95,32,89,4,25,94,58,63,67,21,72,63,27,32,91,21,2,4,58,89
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true + 91
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const isEven = num => num % 2 === 0;
const getRandomElement = array => array[getRandomIndex(array)];

true / 14
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
52,0,16,14,79,3,0,1 - kiwi
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

12,45,48,31,26,50,81,60,39,44,99,23,73,78,31,93,6,92,62,88,14,35,54,70,5,87,68,15,39,25,58,73,86,30,8,53,26,83,61,86,29,1,47,61,74,53,45,46,4,68,77,34,23,59,54,86,95,63,27,42,6,41,50,81,25,27,11,72,25,62,96,53,19,59,61,56,13,7,32,18,24,14,90,3,58 - banana

const greet = name => `Hello, ${name}!`;
71 + true

const filterEvenNumbers = numbers => numbers.filter(isEven);
console.log(getRandomString());
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const removeDuplicates = array => Array.from(new Set(array));
let array = getRandomArray(); array.forEach(item => console.log(item));
kiwi


const sum = (a, b) => a + b;
const sum = (a, b) => a + b;
14 * banana
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
console.log(getRandomString());
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
banana * grape
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
kiwi

let array = getRandomArray(); array.forEach(item => console.log(item));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape - true
let array = getRandomArray(); array.forEach(item => console.log(item));
grape * 45
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

console.log(getRandomString());
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

kiwi + kiwi
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
banana


const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
