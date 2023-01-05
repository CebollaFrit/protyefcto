
var trex ,trex_running;
function preload(){ 
  trex_running = loadAnimation("./trex1.png", "./trex3.png", "./trex4.png") 
}

function setup(){
  createCanvas(600,200)
}
  //crear sprite de Trex
  trex = createSprite(200,200,35,40)
  
  trex.addAnimation("correr", trex_running);
 


function draw(){
  background("azure")
  drawSprites();
  

}
