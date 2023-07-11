var img ="" 
var model_status = ""
var objetos = []
function preload() {

img = loadImage('dog_cat.jpg')

}
function setup() {
canvas = createCanvas(640,420)
canvas.center()
Detectordeobjetos = ml5.objectDetector("cocossd",modelloaded)
document.getElementById("status").innerHTML = "detectando objetos"
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
    objetos = results
}
function draw() {
    image(img,0,0,640,420);
    if (model_status != "") {
        for (var i = 0;i < objetos.legth; i++ ) {
         document.getElementById("status").innerHTML = "objeto detectado"
            noFill();
            rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height);
            text(objetos[i].label,objetos[i].x,objetos[i].y);
            stroke("red")   
        }
     
    }

}