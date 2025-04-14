   let rock = document.querySelector(".Rbutt");
   console.log(rock);
   let soul = document.querySelector(".Sbutt");
   let enter= document.querySelector(".enter");
 

enter.onclick = function(){
console.log("work it");
let timeInput = Number(document.querySelector(".time").value);

console.log(timeInput);


if (timeInput >= 1960 && timeInput <= 1999) {
   console.log("ok");
    window.location.href = "3q1.html";
} else if (timeInput >= 2000 && timeInput <= 2025) {
    window.location.href = "3q2.html";
}


};








  

    //document.querySelector("soul").addEventListener("click", function() {
      //window.location.href = "guitar.html";

    //document.querySelector("rock").addEventListener("click", function() {
      //window.location.href = "drums.html";