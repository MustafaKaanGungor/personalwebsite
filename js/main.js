/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles-js config loaded');
});

const myceliumCanvas = document.getElementById('mycelium');

const myCtx = myceliumCanvas.getContext('2d');

myceliumCanvas.width = window.innerWidth;
myceliumCanvas.height = window.innerHeight;

myCtx.strokeStyle = "white";



const max = 1;
const min = -1;

const lengthMax = 200;
const lengthMin = 100;

recurseMycelium(200, 200, 0, 100, 5);

function recurseMycelium(x, y, direction, length, depth) {
    if(depth <= 0) {
      return;
    }
    myCtx.beginPath();
    myCtx.moveTo(x,y);
    const newX = x + Math.cos(direction) * length;
    const newY = y + Math.sin(direction) * length;
    myCtx.lineTo(newX, newY);
    myCtx.stroke();
    depth = depth - 1;
    const newDirection = direction + (min + Math.random() * (max - min));
    const newDirection2 = direction + (min + Math.random() * (max - min));
    const newLength = length * (0.7 + Math.random() * 0.2);
    recurseMycelium(newX, newY, newDirection, newLength, depth);
    recurseMycelium(newX, newY, newDirection2, newLength, depth);
}