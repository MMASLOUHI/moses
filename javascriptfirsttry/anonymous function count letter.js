// counting letter
let x= function () {
    let word = (prompt("enter the word"));
    let b= (prompt("enter the letter u wanna count"))
    let h =word.split("");
    // function arr(h){
        let c=0;
        let i=0;
        while(h[i]!=undefined){
            if(h[i]===b){
            i++;
            c++;   
            }
            else{
                i++;
            }
        }
    console.log(c);  
}
// }
// }
// x();
x();
// charaT
// if(typeof(word.charAt(h[i]))==='string'){
