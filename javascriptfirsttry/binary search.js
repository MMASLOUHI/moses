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
// let x =  (prompt("enter x value")) ;
// let y =  (prompt("enter y value"));
// if(x>y){
//     console.log(x,">",y) ;
// }
// else if(x<y){
//     console.log(x,"<",y);
// } 
// else {
//      if(x==y){
//     console.log(y,"=",x);
//      } 
// }    
// ;
// let x =  (prompt("enter x value")) ;

// let h=prompt("enter value");
/////////////////////////////////////////INSERT VALUES DUDE/////////////////////////////////////////
let i=0; 
let h=[];
// let x =h[i];
let n= Number (prompt("enter la taille du tableau"))
for(i=0;i<n;i++){
// while(){
   
    let x=(prompt("enter x value"));
      h[i]= x;
     
}
// let y=h[i],split("/")
// console.log(h.join(";"));
// console.table(h);
/////////////////////////////////////////SORT THE TABLE/////////////////////////////////////////
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(h[i]<=h[j]){
            let a=h[i];
            h[i]=h[j];
            h[j]=a;
        }
    }
}
// console.table(h);
// console.log(h.join(','));
// split(",")
console.log((h.join(",").split(","))); //AFFICHER LE TABLEAU HORIZONTALEMENT/////////////////
let z= prompt("type the searched value")//value to search//
let b=Math.trunc((n-1)/2);
let c=n;
let a=0;
let d=n;
let w=0;
let e=0;
let f=0;
if(n==0){
    console.log("refresh the page");
    c=0;
    w=1;   
}
if(n==1){
    if(h[0]==z){
        console.log(z,"is there and it is the only number we have");
        w=1;
        c=0;
    }else{
        console.log(z,"does not exist");
        c=0;
        w=1;
        }
    }
while(c!==0){

if(h[b]>z){
    // a
    // c=b;
    // if(b%2==0){
    //     b=b;
    // }
    // else{
    //     b=b+1;
    // }   
    d=b;
    c=d-a;
    b=Math.trunc((d+a)/2);  
}else if(h[b]<z){
        // if(b%2==0){
        //     b=b;
        // }
        // else{
        //     b=b+1;
        // }
        a=b;
        c=d;
        b=Math.trunc((a+d)/2);
        // b=Math.trunc((b+b/2));
        // c=b;
    }else if(h[b]=z){
        for(i=b;h[i]==z;i--){
            // if(i>0 && h[i]==z && i<=n){
        // if(h[i]=z){
        // console.log(z,"exists and it is in the",i+1,"order");
        e=i;
        c=0;
        w=1;
        }

        // else{
        //     e=e;
       
        
        for(i=b;h[i]==z;i++){
        // if(){
                // console.log(z,"exists and it is in the",i+1,"order");
        f=i;
        // c=0;
        // w=1;
        }
        //  else{
        // f=f;
        for(i=e;i<f+1;i++){
            
                console.log(z,"exists and it is in the",i+1,"order");
                c=0;
                w=1;
        }
        }
    // }
    // else {
    //     for(i=b+1;i>b-2;i--){
    //     if(h[i]=z){
            // console.log(z,"exists and it is in the",i,"order");
    //     }
    // }
    // }
    }
// }

if(w=0){
    console.log(z,"does not exist");
}









// let n= prompt("enter la taille du tableau").split(",");
// console.log(n)