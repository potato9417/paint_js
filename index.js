const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("color");
const range = document.getElementById("range");
const mode = document.getElementById("mode");
const clear = document.getElementById("clear");
const save = document.getElementById("save");

// Array.from(object)   => object를 array로 만드는 방법
// console.log(Array.from(colors))

// console.log(canvas)


let painting = false;
let filling = false;

canvas.width = 800;
canvas.height = 700;

// 처음에 canvas의 배경이 투명으로 저장되어있기때문에 색을 채워줘야함
ctx.fillStyle = "#fff"
ctx.fillRect(0,0,800,700)

ctx.strokeStyle = "#222222";
ctx.lineWidth = 10;
ctx.fillStyle = "#222";


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
    ctx.fillStyle = color
}

function changeRange(event){
    console.log(event.target.value);
    const range = event.target.value;
    ctx.lineWidth = range
}

function changeMode(){
    if(filling===true){
        filling=false;
        mode.innerText="BRUSH"
    }
    else{
        filling=true;
        mode.innerText="FILL ALL"
    }
}

function clickCanvas(){
    if(filling){
        ctx.fillRect(0,0,800,700)
    }
}

function clearAll(){
    ctx.fillStyle = "#fff"
    ctx.fillRect(0,0,800,700)
}

// 우클릭 방지 (contextMenu 방지)
function preventClick(event){
    event.preventDefault()
}

function saveTheImg(){
    const image = canvas.toDataURL()
    // console.log(image)
    const link = document.createElement("a");
    console.log(link)
    link.href = image;
    link.download = "PaintJS[🎨]";
    link.click();

}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown",startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave",stopPainting)
    canvas.addEventListener("click", clickCanvas)
    canvas.addEventListener("contextmenu", preventClick)
}


Array.from(colors).forEach(color=>{
    console.log(color)
    color.addEventListener("click",changeColor)
})

if(range){
    range.addEventListener("input",changeRange)
}

if(mode){
    mode.addEventListener("click",changeMode)
}

if(clear){
    clear.addEventListener("click",clearAll)
}

if(save){
    save.addEventListener("click", saveTheImg)
}