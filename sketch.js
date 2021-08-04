var a = prompt("Enter a number.")
var b = prompt("Enter another number.")

function setup() {
  createCanvas(400, 400);
var button = createButton("Click here to swap.")
button.mousePressed(swap)

}

function draw() {
  background(220);
}

function swap() {
  [a,b] = [b,a]
  console.log("a:",+ a)
  console.log("b:",+ b)

}