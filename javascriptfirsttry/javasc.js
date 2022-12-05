// firsstttt t
// let x = Number (prompt("enter x value")) ;
// let y = Number (prompt("enter y value"));
// if(x-y>0){
//     console.log(x,">",y) ;
// }
// else if(x-y<0){
//     console.log(x,"<",y);
// } 
// else {
//      if(x-y==0){
//     console.log(y,"=",x);
//      } else{
//         console.log("numbers dude");
//     }
// }    
//

// let x = "0";
// let x = Number (prompt("enter x value")) ;
// let y = Number (prompt("enter y value"));
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// switch (x) {
//   case ('+') :
//     RESULT = x+y;
//     break;
//   case ('-'):
//     RESULT = x-y;
//     break;
//   case ('/') :
//     RESULT = x/y;
//     break;
//   case ('*'):
//     RESULT = x*y;
//     break;    

//   default:
//     RESULT = "No value found";
// }
// document.getElementById("demo").innerHTML = RESULT;

// // program for a simple calculator
// // let result;

// // // take the operator input
// // const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // // take the operand input
// // const number1 = parseFloat(prompt('Enter first number: '));
// // const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(result);
//         // console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         // console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         // console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         // console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;


// sum all number under 50

// using for loop

// let c= 0;
// for(let i=1; i<51 ;i++){
// c=c+i;
// }
// console.log("total sum is",c)

// using while loop

// let c= 0;
// let i= 0;
// while(i<51){
//     c=c+i;
//     i++;
// }
// console.log("total sum is",c)

// factoriel with recursion

// let factorial,x =Factorial(x)

let x = Number (prompt("enter x value")) ;
function Factorial(x){
if(x == 1 || x == 0) {
    return 1;
}
else {
   return x * Factorial( x - 1 ) 
}

}
console.log(Factorial(x))

