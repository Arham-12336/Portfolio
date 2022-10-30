const header= document.querySelector("main");

window.addEventListener("scroll",function(){
    
})
function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
  }
  // function upDate(element){
  //   document.getElementById("me").innerHTML=element.alt;
  // }
function update(element){
  var x=document.getElementById("preview");
  x.style.background="url(images/me-hover.png)";
  console.log("hello")

}
function undo(){
  var x=document.getElementById('preview');
  console.log("undo")
}
let menu =document.querySelector("#menu-icon");
let navbar =document.querySelector(".header");
menu.clientHeight