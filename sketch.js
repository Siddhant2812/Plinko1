const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

var test;

var frame = 0;

var particles = [];
var plinkos = [];
var divisions = [];

var ran;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,395,800,20);

  test = new Particle(400,-50);

  //plinkos
  for(var i = 0;i<=width;i = i+50){
    plinkos.push(new Plinko(i,50));
  }

  for(var i = 25;i<=width;i = i+50){
    plinkos.push(new Plinko(i,100));
  }

  for(var i = 0;i<=width;i = i+50){
    plinkos.push(new Plinko(i,150));
  }

  for(var k = 0;k<=width;k = k+80){
    divisions.push(new Division(k,360));
  }
  
  //particless
  
  
  Engine.run(engine);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ran = random(-50,50);

  frame++;
  //console.log(ran);

  if(frame%60===0){
    particles.push(new Particle(400+ran,-50))
  }


  for(var p = 0;p<plinkos.length;p++){
    plinkos[p].display();
  }

  for(var p = 0;p<divisions.length;p++){
    divisions[p].display();
  }

  for(var p = 0;p<particles.length;p++){
    particles[p].display();
  }

  ground.display();
  test.display();

  drawSprites();

}