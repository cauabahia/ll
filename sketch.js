
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var bobao

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	bobao=new papel(200,350,80);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 bobao.display()

  groundObject.display();
  dustbinObj.display();

}

function keyPressed()
 { if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(bobao.body,bobao.body.position,{x:230,y:-245}); } 
	}