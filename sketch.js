
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var Paper1;
var dustbin1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

     
	engine = Engine.create();
	world = engine.world;


	Paper1= new paper(100,100);
	Paper1= new paper(100,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   boxposition=width/2-100;
   boxY=610;
   leftSprite=createSprite(boxposition,boxY,20,100);
   leftSprite.shapeColor="blue";
   leftBody=Bodies.rectangle(boxposition+20,boxY,20,100,{isStatic:true});
   World.add(world,leftBody);
   bottomSprite=createSprite(boxposition+100,boxY+40,200,20);
   bottomSprite.shapeColor="blue";
   bottomBody=Bodies.rectangle(boxposition+100,boxY+25,200,20,{isStatic:true});
   World.add(world,bottomBody);
   rightSprite=createSprite(boxposition+200,boxY,20,100);
   rightSprite.shapeColor="blue";
   rightBody=Bodies.rectangle(boxposition+180,boxY,20,100,{isStatic:true});
   World.add(world,rightBody);
  drawSprites();
 
}



