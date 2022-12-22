// display "copilote"
let a=Number (prompt("premier nombre"))
let b=Number (prompt("deuxieme nombre"))
var x=randomnumber(a,b);
function randomnumber(a,b){

    if(a-b>0){

        return Math.floor(Math.random() * a) + b ;
    }
    else if(a-b<0){

        return Math.floor(Math.random() * b) + a
    } 
    else {
         if(a-b==0){

        return a
         } else{
            console.log("numbers dude");
        }
    }    
    
}
console.log(x)