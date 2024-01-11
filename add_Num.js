// This program input positive number from user and add all number from 1 to givern number

let num = 155;
let validNum;

let i = 0;
let sum = 0;

if(num >= 0){
  validNum = num;
  do {
    sum += i;
    i++;
} while (i <= validNum);

console.log(sum);

} else{
    console.log(" Number is not positive ");
}
 


