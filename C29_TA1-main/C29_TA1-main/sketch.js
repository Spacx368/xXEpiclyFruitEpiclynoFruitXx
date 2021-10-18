const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var FatFruit

let engine;
let world;
var Epicground
var rope
var Epiclyfruit
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;  
  Epicground=new Ground(200,690,600,20)
 rope=new Rope(6,{x:245,y:30})
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  var fruit_options={
    denisty:0.001
  }
  FatFruit=Bodies.circle(300,300,15,fruit_options)
  Matter.Composite.add(rope.body,FatFruit)
  Epiclyfruit=new Link(rope,FatFruit)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  Epicground.show();
   rope.show();
  ellipse(FatFruit.position.x,FatFruit.position.y,15,15)
}




