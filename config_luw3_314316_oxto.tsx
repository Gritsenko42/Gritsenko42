kiwi

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const multiply = (a, b) => a * b;
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

kiwi + 36
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
