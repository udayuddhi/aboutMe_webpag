let circle = document.getElementById("circle");
let upbtn = document.getElementById("upbtn");
let downbtn = document.getElementById("downbtn");
 
let rotation = circle.style.transform;
let rotatesum;
upbtn.onclick = function(){
    rotatesum = rotation + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotation = rotatesum
}
downbtn.onclick = function(){
    rotatesum = rotation + "rotate(90deg)";
    circle.style.transform = rotatesum;
    rotation = rotatesum
}
