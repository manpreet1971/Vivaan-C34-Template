const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;


var slingShot;
var fruit;
function preload()
{
  //loading assets
   backgroundImg = loadImage("background.png");
   fruit=loadImage("melon.png");
   basket=loadImage("basket.png")
}
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground();//creating ground object
  
  //ball holder with slings
  ball = Bodies.circle(50,200,20);//creating ball bodies
  World.add(world,ball);//adding ball to the world

  
}
function draw() {
  background(backgroundImg); 
  Engine.update(engine);
  
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  basket.scale=.025;


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);//display of ball using fruit im
  image(basket,450,270)

 
}


function mouseDragged(){
 


}

function mouseReleased(){
 

}
