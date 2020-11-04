 const Engine = Matter.Engine
 const Wordl = Matter.World
 const Bodies = Matter.Bodies
 const Constraint = Matter.Constraint

 var engine,world
 var holder , ball , ground
 var ball,slingshot
 var polygon_img

 function preload(){
   polygon_img = loadImage("polygon.png")
 }
function setup() {
  createCanvas(1600,800);

  engine= Engine.Create()

  world= engine.world
  world= engine.world

  Engine.run(engine)

  ground= new Ground()

  stand1= new stand(390,300,250,10)
  stand2= new stand(700,200,200,10)

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390.275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10= new Block(390,235,30,40);
  block11= new Block(420,235,30,40);
  block12= new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(450,195,30,40);

  
  

  createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

}