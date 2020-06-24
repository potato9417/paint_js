const canvas = document.getElementById("canvas");
let painting = false
console.log(canvas)

function stopPainting(){
    painting=false;
}

function onMouseMove(event){
    // console.log(event)
    const x = event.offsetX,
        y = event.offsetY;
        console.log(x,y)
}

function onMouseDown(event){
    console.log(event)
    painting=true;
}

function onMouseUp(event){
    stopPainting()
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown",onMouseDown)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mouseleave",stopPainting)
}