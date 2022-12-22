// reverse a number
let x=Number (prompt("enter a number"));
var c= reverse(x);
function reverse(x){
    let a=0;
    let b=0;
    let y=0;
   while(x!==0){
     b=x%10;
     y=y*10+b;
     x=Math.trunc(x/10);
   }  
   console.log(y);
}


