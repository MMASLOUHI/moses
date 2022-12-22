// guess the number
let x = Math.floor(Math.random() * 100) + 1;;//the gessed number
let y = Number (prompt("enter your try")) ;//user number
let i=1;


while(y!==x){
    if(x>y){
        i++;
        y = Number (prompt("enter a higher nmuber"))
        console.log("enter a higher nmuber")
    }
    else if(x<y){
        i++;
        y = Number (prompt("enter a lower number"))
        console.log("enter a lower nmuber")

    }
}

    console.log(x,"good job dude");
    console.log(i,"number of tries");  
