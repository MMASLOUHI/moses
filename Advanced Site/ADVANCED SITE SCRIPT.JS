// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
//   -
}


/////////////////////////////////////

function affichage(){
  let y=document.getElementById("mail").value;
  document.getElementById("affichagemail").innerHTML=y;
  // document.getElementById("affichagemail").value=y;
  let z=document.getElementById("message").value;
  document.getElementById("affichagemessage").innerHTML=z;
  
}
setInterval(affichage,100)


///////////////////////////////////////////////CHANGING MAIN PIC//////////////////////



function changemainimage1(id) {
  // console.log(document.getElementsByClassName("kol")[id].src);
  let array1=["./images/amazonpics/1Copie.png","./images/amazonpics/2Copie.png","./images/amazonpics/3Copie.png","./images/amazonpics/4Copie.png","./images/amazonpics/5Copie.png","./images/amazonpics/6Copie.png"]

   document.getElementsByClassName("active1")[0].src=array1[id];
    }

function changemainimage2(id) {
      // console.log(document.getElementsByClassName("kol")[id].src);
  let array2=["./images/amazonpics/21Copie.png","./images/amazonpics/22Copie.png","./images/amazonpics/23Copie.png","./images/amazonpics/24Copie.png","./images/amazonpics/25Copie.png"]
    
    document.getElementsByClassName("active2")[0].src=array2[id];
     }
function changemainimage3(id) {
      // console.log(document.getElementsByClassName("kol")[id].src);
  let array3=["./images/amazonpics/31Copie.png","./images/amazonpics/32Copie.png","./images/amazonpics/33Copie.png","./images/amazonpics/34Copie.png","./images/amazonpics/35Copie.png","./images/amazonpics/36Copie.png"]
    
    document.getElementsByClassName("active3")[0].src=array3[id];
     }
function changemainimage4(id) {
      // console.log(document.getElementsByClassName("kol")[id].src);
  let array4=["./images/amazonpics/41Copie.png","./images/amazonpics/42Copie.png","./images/amazonpics/43Copie.png","./images/amazonpics/44Copie.png","./images/amazonpics/45Copie.png"]
    
    document.getElementsByClassName("active4")[0].src=array4[id];
     }
function changemainimage5(id) {
      // console.log(document.getElementsByClassName("kol")[id].src);
  let array5=["./images/amazonpics/51Copie.png","./images/amazonpics/52Copie.png","./images/amazonpics/53Copie.png","./images/amazonpics/54Copie.png","./images/amazonpics/55Copie.png"]
    
    document.getElementsByClassName("active5")[0].src=array5[id];
     }








