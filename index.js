const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2")
const body = document.body;
// True = Bright Mode AND False = Dark
const mode = true; 
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
button1.addEventListener("click", function(){
    if (mode){
        body.style.backgroundColor = "black";
        item1.style.color = "white";
        item2.style.color = "white";
        item3.style.color = "white";
        button1.setAttribute("class", "btn btn-outline-light my-5");
        button2.setAttribute("class", "btn btn-outline-light");
    } else {
        body.style.backgroundColor = "white";
        item1.style.color = "black";
        item2.style.color = "black";
        item3.style.color = "black";
        button1.setAttribute("class", "btn btn-outline-dark my-5");
        button2.setAttribute("class", "btn btn-outline-dark");
    }
        
})
