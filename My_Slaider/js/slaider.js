  
  //Forward Moving Function start
  function slideChangeForward() {
    
if(document.getElementsByClassName("SlaiderItems")[0].classList.contains("active")){
  
        document.getElementsByClassName("SlaiderItems")[0].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[1].classList.add("active");
}else if(document.getElementsByClassName("SlaiderItems")[1].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[1].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[2].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[2].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[2].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[3].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[3].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[3].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[4].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[4].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[4].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[5].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[5].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[5].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[6].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[6].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[6].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[0].classList.add("active");
}}
//Forward Moving Function End

//Backward moving function start
function slideChangeBackward(){
  
if(document.getElementsByClassName("SlaiderItems")[0].classList.contains("active")){
  
        document.getElementsByClassName("SlaiderItems")[0].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[6].classList.add("active");
}else if(document.getElementsByClassName("SlaiderItems")[6].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[6].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[5].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[5].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[5].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[4].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[4].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[4].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[3].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[3].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[3].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[2].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[2].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[2].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[1].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[1].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[1].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[0].classList.add("active");
}}
//Backward Moving Function End

//Button and Auto moving Function
//Right side 
document.querySelector(".SlaiderItems .right").addEventListener("click",slideChangeForward);
document.querySelector(".right").addEventListener("click", function (){
  
  this.setAttribute("style","transition:1s;color:#22d514f1;");
document.querySelector(".left").setAttribute("style","color:#9b89fef6;");
  
});
//left side
document.querySelector(".SlaiderItems .left").addEventListener("click",slideChangeBackward);
document.querySelector(".left").addEventListener("click", function (){
  
  this.setAttribute("style","transition:1s;color:#22d514f1;");
  
document.querySelector(".right").setAttribute("style","color:#9b89fef6;");
});
//auto moving 
setInterval(slideChangeForward,3700);