
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg,backGround;
var ground,stone;
var boyImg;
var mangoObj1,mangoObj2,mangoObj3,mangoObj4,mangoObj5,mangoObj6,mangoObj7;
var elastic

function preload()
{

backgroundImg = loadImage("MangoGarden.png");
boyImg = loadImage("boy.png");

}

function setup() {
	createCanvas(1800, 1000);

	/*backGround = createSprite(750,750);
	backGround.addImage(backgroundImg);
	backGround.scale = 0.8;
	*/
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(1400,400);
	ground = new Ground(900,850,1800,20);
	stone = new Stone(300,650,30);
	mangoObj1 = new Mango(1300,300,30);
	mangoObj2 = new Mango(1300,100,30);
	mangoObj3 = new Mango(1400,150,40);
	mangoObj4 = new Mango(1500,360,35);
	mangoObj5 = new Mango(1660,320,30)
	mangoObj6 = new Mango(1100,225,40);
	mangoObj7 = new Mango(1200,340,35);

	elastic = new Elastic(stone.body, {x:300,y:600});


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(backgroundImg);

  tree.display();
  ground.display();
  

  image(this.boyImg,400,730,300,500);
  stone.display();
  mangoObj1.display();
  mangoObj2.display();
  mangoObj3.display();
  mangoObj4.display();
  mangoObj5.display();
  mangoObj6.display();
  mangoObj7.display();
  elastic.display();

  detectionCollision(stone,mangoObj1);
  detectionCollision(stone,mangoObj2);
  detectionCollision(stone,mangoObj3);
  detectionCollision(stone,mangoObj4);
  detectionCollision(stone,mangoObj5);
  detectionCollision(stone,mangoObj6);
  detectionCollision(stone,mangoObj7);

  
  
 // drawSprites();
 
}

function mouseDragged(){

	Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
	elastic.fly();
}

function detectionCollision(oStone,oMango){
	var mangoPosition = oMango.body.position;
	var stonePosition = oStone.body.position;

	var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);

	if(distance<=oStone.r+oMango.r){

		Body.setStatic(oMango.body, false);
	}

}

function keyPressed(){
	if(keyCode === 32){

		Body.setPosition(stone.body,{x: 300,y : 650});
		elastic.attach(stone.body);
	}
}



