// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: "green"

// }

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");
// // context.fillStyle = "green";
// // context.fillRect(10,50,50,50);
// // context.strokeStyle = "orange";
// // context.lineWidth = 2;
// // context.strokeRect(100, 50,50,50)

// let = xDelta = 5;
// let = yDelta = 5;

// function update() {
//     if(data.x + data.width > canvas.width || data.x < 0){
//         xDelta *= -1;
//     } 
//     if(data.y + data.height > canvas.height || data.y < 0){
//         yDelta *= -1;
//     } 
//     data.x += xDelta;
//     data.y += yDelta;
// }

// function draw(co) {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.fillStyle = data.fillStyle;
//     context.fillRect(data.x, data.y, data.width, data.height);

// }


// function loop() {
//     requestAnimationFrame(loop);
//     update();
//     draw();
// }
// loop();


const circle = function (x, y, radius, fillCircle) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
        ctx.fill()
    } else {
        ctx.stroke()
    }

};
function drawBee(x, y) {
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'gold'

    circle(x, y, 8, true)
    circle(x, y, 8, false)
    circle(x - 5, y - 11, 5, false)
    circle(x + 5, y - 11, 5, false)
    circle(x - 2, y - 1, 2, false)
    circle(x + 2, y - 1, 2, false)
};

function update(coordinate) {
    let offset = Math.random() * 4 - 2
    coordinate += offset

    if (coordinate > 400){
        coordinate = 400
    }
    if (coordinate < 0) {
        coordinate = 0
    }
    return coordinate
};

const canvas = document.querySelector('canvas')
const ctx= canvas.getContext('2d')

let x = 200
let y = 200

setInterval(function () {
    ctx.clearRect(0, 0, 400, 400)

    drawBee(x, y)
    x = update(x)
    y = update(y)

    ctx.strokeRect(0, 0, 400, 400)
}, 30)
// var canvas = document.querySelector("canvas");
// var ctx = canvas.getContext("2d");
// var x = canvas.width/2;
// var y = canvas.height-30;
// var dx = 2;
// var dy = -2;

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     x += dx;
//     y += dy;
// }

// setInterval(draw, 10);