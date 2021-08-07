//Factory function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);

//Constructor function

function CreatCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const another = new CreatCircle(1);

//Enumerating properties in obj.

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("Circle has a radius");

//Private properties and methods

function Creat(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLOcation = function (factor) {
    //...
  };
  this.draw = function () {
    computeOptimumLOcation(0.1);
    // defaultLocation;
    //this.radius

    console.log("Draw");
  };
}

const creatAnother = new Creat(10);
createCircle.draw();
