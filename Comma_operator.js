/* The comma operator in JavaScript allows you to combine multiple expressions into a single statement.
It evaluates each expression from left to right and returns the value of the rightmost expression.
While the individual expressions are evaluated,
the comma operator itself doesn't have a significant impact on the resulting value;
it's mainly used for its side effects.
*/


let x = 1, y = 2, z = 3;

let result = (x++, y++, z++);
console.log(result);
console.log(x, y, z);
