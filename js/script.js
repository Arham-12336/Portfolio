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
  var x=document.getElementById('update');
  x.style.backgroundImage=URL('images/me-hover.png');
}
function undo(){
  var x=document.getElementById('update');
  x.style.background=null;
}