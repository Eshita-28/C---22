
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,object;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution:1.0
  }

 object = Bodies.circle(200,100,20,options);
  World.add(world,object);
 
  var options1  = {
    isStatic:true
  }

   console.log(object);

  ground = Bodies.rectangle(200,390,200,20,options1);
  World.add(world,ground);

}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(object.position.x,object.position.y,20,20);
  //rect(300,20,50,10);
  drawSprites();
}