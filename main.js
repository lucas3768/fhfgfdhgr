var img ="" 
var model_status = ""
function preload() {

img = loadImage('dog_cat.jpg')

}
function setup() {
canvas = createCanvas(640,420)
canvas.center()
Detectordeobjetos = ml5.objectDetector("cocossd",modelloaded)
}
function modelloaded() {
    console.log("modelo carregado")
    model_status = true
    Detectordeobjetos.detect(img,gotresults)
}
function gotresults(error,results) {
    if(error)
    console.log(error)
    else
    console.log(results)
}
function draw() {
    image(img,0,0,640,420);
    noFill();
rect(60,50,300,200);
text("cachorro",70,60);
}