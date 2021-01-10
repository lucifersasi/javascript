var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var numinput = document.querySelector("input");
var winningdisplay = document.getElementById("limitdisplay");
var reset = document.getElementById("reset")
var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=5;

numinput.addEventListener("change",function(){
    winningdisplay.textContent = this.value;
    winningscore =  Number(this.value);
    resetall();
});

p1button.addEventListener("click",function(){
    if(!gameover){
        p1score++;
        if(p1score===winningscore){
            gameover=true;
            p1display.style.color="green";
        }
        p1display.textContent=p1score;
    }
    
});



p2button.addEventListener("click",function(){
    if(!gameover){
        p2score++;
        if(p2score===winningscore){
            gameover=true;
            p2display.style.color="green";
        }
        p2display.textContent=p2score;
    }
});


reset.addEventListener("click",function(){
    resetall();
});

function resetall(){
     p1score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p2score=0;
    gameover=false;
    p1display.style.color="black";
    p2display.style.color="black";
}
