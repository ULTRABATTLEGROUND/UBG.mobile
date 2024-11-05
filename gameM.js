const canvas = document.getElementById('hexMap');// Load the tank image
const tankImage = new Image();
tankImage.src = 'tank1.png'; // Replace with the URL of your tank image
let selectedTank = null;
const targetSetter = new Image();
targetSetter.src = 'targetsetter.png';
// Array to store the tank positions
const tanks = [];
const ctx = canvas.getContext('2d');
var draggableObjects = [];
var hexagons = [];
let scale = 1;
let offsetX = 0;
let offsetY = 0;
let hexRadius = 10;
var units = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Hexagon {
    constructor(x, y, color = '#ffffff', transform = "rotate(90deg)") {
        this.x = x;
        this.y = y;
        this.color = color;
        this.transform = transform;
    }

    draw() {
      const angle = Math.PI / 3;
      ctx.save(); // save the current transformation matrix
      ctx.translate(this.x, this.y); // move the origin to the hexagon's center
      ctx.rotate(Math.PI / 2); // rotate 90 degrees
      ctx.beginPath();
      ctx.fillStyle = this.color;
      for (let i = 0; i < 6; i++) {
        ctx.lineTo(hexRadius * Math.cos(angle * i), hexRadius * Math.sin(angle * i));
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore(); // restore the original transformation matrix
    }
    }


function generateHexMap(radius, width, height) {
    const hexHeight = Math.sqrt(3) * radius;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const xOffset = (x + (y % 2) / 2) * radius * 2.25;
            const yOffset = y * hexHeight * 1;
            hexagons.push(new Hexagon(xOffset, yOffset));
        }
    }
}


function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(offsetX / scale, offsetY / scale);
  ctx.scale(scale, scale);
  for (const hex of hexagons) {
    hex.draw();
  }
  ctx.restore();
  drawJoystick();
  for (let i = 0; i < draggableObjects.length; i++) {
    draggableObjects[i].style.top = `${tankOffsets[i].y + offsetY}px`;
    draggableObjects[i].style.left = `${tankOffsets[i].x + offsetX}px`;
    draggableObjects[i].style.width = `${25 * scale}px`;
    draggableObjects[i].style.height = `${15 * scale}px`;
  }
}
const joystick = {
  x: 100, // initial x position
  y: 500, // initial y position
  radius: 50 // radius of the joystick
};
function drawJoystick() {
  ctx.beginPath();
  ctx.arc(joystick.x, joystick.y, joystick.radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
  ctx.fill();
}
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(offsetX / scale, offsetY / scale);
  ctx.scale(scale, scale);
  for (const hex of hexagons) {
      hex.draw();
  }
  ctx.restore();

  // Draw the joystick
  drawJoystick();

  for (let i = 0; i < draggableObjects.length; i++) {
      draggableObjects[i].style.top = `${tankOffsets[i].y + offsetY}px`;
      draggableObjects[i].style.left = `${tankOffsets[i].x + offsetX}px`;
      draggableObjects[i].style.width = `${25 * scale}px`;
      draggableObjects[i].style.height = `${15 * scale}px`;
  }
}
canvas.addEventListener('touchstart', (e) => {
  let touch = e.touches[0];
  let dx = touch.clientX - joystick.x;
  let dy = touch.clientY - joystick.y;

  // Check if touch is within joystick radius
  if (dx * dx + dy * dy < joystick.radius * joystick.radius) {
      joystick.x = touch.clientX; // Update joystick position
      joystick.y = touch.clientY;

      // Calculate offset based on joystick position
      offsetX += dx / 10; // Adjust this value as needed
      offsetY += dy / 10; // Adjust this value as needed

      drawMap(); // Redraw the map
  }
});

canvas.addEventListener('touchmove', (e) => {
  let touch = e.touches[0];
  joystick.x = touch.clientX; // Update joystick position

  // Calculate offset based on joystick position
  offsetX += (touch.clientX - joystick.x) / 10; // Adjust this value as needed
  offsetY += (touch.clientY - joystick.y) / 10; // Adjust this value as needed

  drawMap(); // Redraw the map
});

canvas.addEventListener('touchend', () => {
  // Optionally reset joystick position or handle end of touch
});

document.addEventListener('mousemove', (event) => {
  if (selectedTank) {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / scale - offsetX;
    const y = (event.clientY - rect.top) / scale - offsetY;
    selectedTank.style.top = `${y + offsetY}px`;
    selectedTank.style.left = `${x + offsetX}px`;
  }
});
document.addEventListener('mouseup', () => {
  selectedTank = null;
});

let isDragging = false;
let startX, startY;

canvas.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX - offsetX;
    startY = e.touches[0].clientY - offsetY;
});

canvas.addEventListener('touchmove', (e) => {
    if (isDragging) {
        offsetX = e.touches[0].clientX - startX;
        offsetY = e.touches[0].clientY - startY;
        drawMap();
    }
});

canvas.addEventListener('touchend', () => {
    isDragging = false;
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawMap();
}

generateHexMap(hexRadius, 10, 11);
drawMap();
//...
countryDraw();


function countryDraw(){
hexagons[6].color = '#0072CE';                      
for(var i = 8;i < 10;i++){hexagons[i].color = '#0072CE';}
for(i = 18;i < 20;i++){hexagons[i].color = '#0072CE';}
hexagons[26].color = '#77353D';
for(i = 28;i < 30;i++){hexagons[i].color = '#77353D';}
for(i = 36;i < 40;i++){hexagons[i].color = '#77353D';}
for(i = 46;i < 50;i++){hexagons[i].color = '#046A38';}
for(i = 57;i < 59;i++){hexagons[i].color = '#046A38';}
hexagons[68].color = '#046A38';
for(i = 61;i < 68;i++){hexagons[i].color = '#DC143C';}
for(i = 52;i < 54;i++){hexagons[i].color = '#DC143C';}
for(i = 71;i < 78;i++){hexagons[i].color = '#DC143C';}
for(i = 81;i < 88;i++){hexagons[i].color = '#DC143C';}
for(i = 91;i < 98;i++){hexagons[i].color = '#DC143C';}
hexagons[104].color = '#DC143C';
hexagons[105].color = '#DC143C';
hexagons[107].color = '#DC143C';
hexagons[69].color = '#00AF66';
hexagons[59].color = '#00AF66';
for(i = 78;i < 80;i++){hexagons[i].color = '#00AF66';}
for(i = 98;i < 100;i++){hexagons[i].color = '#FFDD00';}
for(i = 88;i < 90;i++){hexagons[i].color = '#FFDD00';}
for(i = 108;i < 110;i++){hexagons[i].color = '#FFDD00';}
for(i = 55;i < 57;i++){hexagons[i].color = '#1C3578';}
hexagons[60].color = '#000000';
hexagons[70].color = '#000000';
hexagons[80].color = '#000000';
hexagons[90].color = '#000000';
hexagons[100].color = '#000000';
for(i = 101;i < 104;i++){hexagons[i].color = '#11457E';}
hexagons[106].color = '#0B4EA2';
}
function showInfoAbout(color) {
//informacje: przychód, przynależność, surowce naturalne, morale prowincji itd.
if (color == '#DC143C') {country = 'Poland'}  
}
let tankOffsets = [];

canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) / scale - offsetX;
  const y = (event.clientY - rect.top) / scale - offsetY;
  for (const hex of hexagons) {
    const distance = Math.sqrt((x - hex.x) ** 2 + (y - hex.y) ** 2);
    if (distance < hexRadius) {
      if (hex.color === '#DC143C') { 
        const tank = document.createElement('img');
        tank.src = 'tank1.png'; 
        tank.style.position = 'absolute';
        tank.style.top = `${y + offsetY * 0,9}px`;
        tank.style.left = `${x + offsetX * 0.9}px`;
        tank.style.width = '100px'; 
        tank.style.height = '60px';
        document.body.appendChild(tank);
        draggableObjects.push(tank);
        tankOffsets.push({ x: x, y: y });
        tank.addEventListener('mousedown', (event) => {
          selectedTank = tank;
        });
      }
      drawMap();
    }
  }
});




