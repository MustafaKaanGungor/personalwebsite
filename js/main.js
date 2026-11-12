/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles-js config loaded');
});

const myceliumCanvas = document.getElementById('mycelium');

const myCtx = myceliumCanvas.getContext('2d');

myceliumCanvas.width = window.innerWidth;
myceliumCanvas.height = window.innerHeight;

myCtx.strokeStyle = "white";



const max = 0.25;
const min = -0.25;
const maxBranches = 4;
const minBranches = 0;
const lineWidth = 1;

recurseMycelium(500, 500, -90, 10, 6);

function recurseMycelium(x, y, direction, length, depth) {
    if(depth <= 0) {
      return;
    }
    myCtx.beginPath();
    myCtx.moveTo(x,y);
    const newX = x + Math.cos(direction) * length;
    const newY = y + Math.sin(direction) * length;
    myCtx.lineTo(newX, newY);
    myCtx.lineWidth = lineWidth;
    myCtx.stroke();
    depth = depth - 1;
    const branches = minBranches + Math.random() * (maxBranches - minBranches)

    for(let i = 0; i < branches; i++) { 
      const newLength = length * (1 + Math.random() * 0.2);
      const newDirection = direction + (min * depth + Math.random() * ((max * depth) - (min * depth)));
      recurseMycelium(newX, newY, newDirection, newLength, depth);
    }
}