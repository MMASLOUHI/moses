function aluo(){
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json =>{
    let i =Math.floor((Math.random()*2000)+1)
    let j=Math.floor((Math.random()*2000)+1)
    let k=Math.floor((Math.random()*2000)+1)
    // document.getElementById("card11").src=json[i].url
    var url1=json[i].url;
    var url2=json[j].url;
    var url3=json[k].url;
    var div = document.getElementById("card11");
    div.style.backgroundImage = `url(${url1})`;
    document.getElementById("title1").innerText=json[i].title;
    document.getElementById("thumbnail1").innerText=json[i].thumbnailUrl;

    // div.style.backgroundSize = "contain";
    // div.style.height = "350px";
    var div = document.getElementById("card22");
    div.style.backgroundImage = `url(${url2})`;
    document.getElementById("title2").innerText=json[j].title;
    document.getElementById("thumbnail2").innerText=json[j].thumbnailUrl;
    // div.style.backgroundSize = "contain";
    // div.style.height = "350px";
    var div = document.getElementById("card33");
    div.style.backgroundImage = `url(${url3})`;
    document.getElementById("title3").innerText=json[k].title;
    document.getElementById("thumbnail3").innerText=json[k].thumbnailUrl;
    // div.style.backgroundSize = "contain";
    // div.style.height = "350px";



  } );
}
setInterval(aluo,3000);
  // var stringified= json.stringify(json);
  // console.log(stringified);
 

  // var output='';
  // for(var i=0; i < json.legth ; i++){
  //   output += '<li>'+ json[i].url+'<li>';
  // }

  // var url = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg";
 
  // var div = document.getElementById("container");
  // div.style.backgroundImage = `url(${url})`;
  // div.style.width = "640px";
  // div.style.height = "374px";
