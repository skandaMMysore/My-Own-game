const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

//creating a variable to create a mountain image by myself
var triangle;

//snow variable is kept as an undefined variable in order to fill in the criteria or the value of the for loop in function setup() -- 1
var snow = [];



var gameState = "intro";

function preload(){
  tankImage = loadImage("tanke.png");
  mountainImage = loadImage("mountainss.png");
}

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  //creating sprite for the moving tank
  car = createSprite(200,500,20,20);
  
  
  
  t = createSprite(1500,400,50,10);
  
  //creating sprite for mountains images
  mountain2 = createSprite(1400,150,20,20);
  

 introrect = new Rect(80,590,20,580);
 

 introrect2 = new Rect(100,250,20,650);
 game = new War(200,200,320,320);

 introrect5 = new Rect(800,210,90,55);
 
 //big rectangle
 fill("orange");
 introrect6 = new Rect(800,220,90,55);
 introcir = new Circle(200,200,120);
 introcir1 = new Circle(100,100,120);
 introcir2 = new Circle(150,150,120);

 //writing a for loop to increase number of snowballs to fall in a loop for an easy way
 //a<100 means the value of 100 is the max value or the limit in order to display the snow, this also means 100 is the 'snow.length'
 // & in display , we should refer to 100 or the snow.length in order to display snow between 0 and value of the limit set
 //no.of values pushed will only be able to be displayed in VS Code
 for(var a = 0;a < 1200;a++){
   snow.push(new Snow(900,a,20));
 }
  
}

function draw() {
  

  background("black");
  textSize(25);
  fill(250,230,20);
  car.addImage(tankImage);

  //updating engine in order to change the values once we define a change
  Engine.update(engine);
  if(keyCode === 32){
    gameState = "intro";
    fill("brown");
    introrect2.display();
    fill("green");
    introrect.display();
    car.display();
    car.velocityX = 2;
  
    textSize(35);
    fill(250,250,25);
    text("Hey!",390,350);
    textSize(40);
   
    fill("red");
    text("Welcome",600,440);
   
    
    game.display();
    mountain2.display();
    
    fill(255,250,250);

    
    stroke("blue");
    strokeWeight(9);
    triangle(1500,275,1908,650,1006,775);
    strokeWeight(3.5);
    stroke("grey");
    line(1500,300,1460,360);
    stroke("black");
    line(1500,350,1460,450);
    stroke("brown");
    curve(1500,350,1460,450,1300,450,1200,350);
    stroke("brown");
    curve(1450,530,1410,620,1250,720,1150,620);
    stroke("black");
    curve(1500,560,1500,430,1400,600,1350,650,1200,550,1250,650);
    curve(1200,500,1450,390,1400,600,1350,550);
    stroke("grey");
    strokeWeight(5);
    line(1620,460,1500,350);
    stroke("black");
    introrect5.display();
    //writing for loop for displaying snowBalls in a sequential manner towards the ground
    for(var h = 0;h<400;h++){
      snow[h].display();
    }
    //t means the lines or the irregularities on the mountains
    t.display();



  drawSprites();
  }
}