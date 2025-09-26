// var change = document.querySelectorAll("#list1 a")
// change.forEach(function(item) {
//   item.onclick = function() {
//     item.style.color = "black";
//   }
// });
var change = document.querySelectorAll("#list1 a");

change.forEach(function(item) {
  item.onclick = function() {
    change.forEach(function(el) {
      el.style.color = ""; 
    });
    item.style.color = "black";
  }
});
//  var allProducts = document.querySelectorAll(".products  li")
//  var div = document.querySelector("#mar")

 var btns = document.querySelectorAll(".btn2")
 var pr = document.querySelector("#pri")
 btns.forEach(function(btn)
  {
   btn.onclick=function(){
   pr.textContent = parseInt(pr.textContent) + 1;
   

   }
  });
 
// /////////////////////

 var images = document.querySelectorAll(".img2")
 var pr = document.querySelector("#pri")
 images.forEach(function(im)
  {
   im.onclick=function(){
   pr.textContent = parseInt(pr.textContent) + 1;

   }
  });
