const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("color")

// Array.from(object)   => object를 array로 만드는 방법
// console.log(Array.from(colors))

// console.log(canvas)


let painting = false

canvas.width = 800;
canvas.height = 700;

ctx.strokeStyle = "#222222";
ctx.lineWidth = 5;


function stopPainting(){
    painting=false;
}

function startPainting(){
    painting=true;
}

function onMouseMove(event){
    // console.log(event)
    const x = event.offsetX,
        y = event.offsetY;
        // console.log(x,y)

    if(!painting){
        // path(좌표찾기)
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else {
        // 라인긋기
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function changeColor(event){
    console.log(event.target.style.backgroundColor)
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown",startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave",stopPainting)
}


Array.from(colors).forEach(color=>{
    console.log(color)
    color.addEventListener("click",changeColor)
})