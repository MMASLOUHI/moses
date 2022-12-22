// PPCM
let x = Number (prompt("enter x value")) ;
let y = Number (prompt("enter y value"));

let i =1;
if (x==y){
    console.log(x," est le ppcm")
}
else {
    if(x<y){
   
    while((x*i)%y!==0){
    i++; 
    }
    console.log(x*i," est le ppcm")
    }
    else{
        
        while((y*i)%x!==0){
            i++;
            }
            console.log(y*i,"est le ppcm")
        }
            
}