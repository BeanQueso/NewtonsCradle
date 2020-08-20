
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, ob1, ob2, ob3, ob4, ob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(300, 500);
	bobObject2 = new Bob(350, 500);
	bobObject3 = new Bob(400, 500);
	bobObject4 = new Bob(450, 500);
	bobObject5 = new Bob(500, 500);

	plat = new Ground(400, 150, 400, 40); 
	var rope = new Chain(bobObject1.body, plat.body, 1, 10);
	var rope = new Chain(bobObject2.body, plat.body, 1, 10);
	var rope = new Chain(bobObject3.body, plat.body, 1, 10);
	var rope = new Chain(bobObject4.body, plat.body, 1, 10);
	var rope = new Chain(bobObject5.body, plat.body, 1, 10);

	 ob1 = new Ground(250, 150, 20, 20);
	 ob2 = new Ground(325, 150, 20, 20);
	 ob3 = new Ground(400, 150, 20, 20);
	 ob4 = new Ground(475, 150, 20, 20);
	 ob5 = new Ground(550, 150, 20, 20);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ob1.display();
  ob2.display();
  ob3.display();
  ob4.display();
  ob5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  plat.display();
	stroke("red");
	strokeWeight(4);
	line(bobObject1.body.position.x, bobObject1.body.position.y, ob1.body.position.x, ob1.body.position.y);
	line(bobObject2.body.position.x, bobObject2.body.position.y, ob2.body.position.x, ob2.body.position.y);
	line(bobObject3.body.position.x, bobObject3.body.position.y, ob3.body.position.x, ob3.body.position.y);
	line(bobObject4.body.position.x, bobObject4.body.position.y, ob4.body.position.x, ob4.body.position.y);
	line(bobObject5.body.position.x, bobObject5.body.position.y, ob5.body.position.x, ob5.body.position.y);
 
}



