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