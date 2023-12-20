var div=document.getElementById("button");
function redColor(){
    div.classList.add("red");
    div.classList.remove("green");
    div.classList.remove("blue");
    div.classList.remove("pink");
    div.classList.remove("yellow");
}

function greenColor(){
    div.classList.add("green");
    div.classList.remove("red")
    div.classList.remove("yellow")
    div.classList.remove("blue")
    div.classList.remove("pink")
}
function blueColor(){
    div.classList.add("blue");
    div.classList.remove("red")
    div.classList.remove("yellow")
    div.classList.remove("green")
    div.classList.remove("pink")
}
function pinkColor(){
    div.classList.add("pink");
    div.classList.remove("red")
    div.classList.remove("yellow")
    div.classList.remove("blue")
    div.classList.remove("green")
}
function yellowColor(){
    div.classList.add("yellow");
    div.classList.remove("red")
    div.classList.remove("green")
    div.classList.remove("blue")
    div.classList.remove("pink")
}