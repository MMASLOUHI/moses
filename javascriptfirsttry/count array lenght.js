// count array length

let h=prompt("enter value").split("/");
let x=arr(h);

function arr(h){
    let c=0;
    let i=0;
    while(h[i]!==undefined){
        i++;
        c++;
       
    }
    return c;
}
console.log(arr(h))



