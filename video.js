var img ="" 
var model_status = ""
var objetos = []

function preload() {



}
function setup() {
    video = createCapture(VIDEO)
    video.hide()
canvas = createCanvas(380,380)
canvas.center() 

}
function start() {
    Detectordeobjetos = ml5.objectDetector("cocossd",modelloaded)
document.getElementById("status").innerHTML = "detectando objetos"
}
function modelloaded() {
    console.log("modelo carregado")
    model_status = true

}
function gotresults(error,results) {
    if(error)
    console.log(error)
    else
    console.log(results)
    objetos = results
}
function draw() {
    image(video,0,0,380,380);
    if (model_status != "") { 
           Detectordeobjetos.detect(video,gotresults)
        for (var i = 0;i < objetos.length; i++ ) {
         document.getElementById("status").innerHTML = "objeto detectado"
            noFill();
            rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height);
            text(objetos[i].label,objetos[i].x,objetos[i].y);
            stroke("red")   
        }
     
    }

}