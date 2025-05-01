// const result = function (a, b) {
//   return a + b;
// }
// console.log(result(1, 2)); // 3

console.log('======================');

function multiply(a, b) {
    return a * b;
}

function calculate(operation, numA, numB) {
    return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

/* Output:
8
*/