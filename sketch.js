const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var hero;
var fly;
var backgroundImage;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18,box19,box20,box21,box22;
var box23,box24,box25,box26,box27;
var monster;

function preload() {
backgroundImage = loadImage("background.png")
}


function setup() {
  createCanvas(1520, 800);
  
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(400,50,200);
  fly = new Fly(hero.body,{x:600,y:50})
  ground = new Ground(750,620,1000,5);

  box1 = new Box(800,600,50,50);
  box2 = new Box(800,540,50,50);
  box3 = new Box(800,500,50,50);
  box4 = new Box(800,450,50,50);
  box5 = new Box(800,400,50,50);
  box6 = new Box(800,350,50,50);
  box7 = new Box(800,300,50,50);

  box8 = new Box(870,600,50,50);
  box9 = new Box(870,540,50,50);
  box10 = new Box(870,500,50,50);
  box11 = new Box(870,450,50,50);
  box12 = new Box(870,400,50,50);
  box13 = new Box(870,350,50,50);

  box14 = new Box(940,600,50,50);
  box15 = new Box(940,540,50,50);
  box16 = new Box(940,500,50,50);
  box17 = new Box(940,450,50,50);
  box18 = new Box(940,400,50,50);
  box19 = new Box(940,350,50,50);
  box20 = new Box(940,300,50,50);
  box21 = new Box(940,250,50,50);
  box22 = new Box(940,200,50,50);

  box23 = new Box(1010,600,50,50);
  box24 = new Box(1010,540,50,50);
  box25 = new Box(1010,500,50,50);
  box26 = new Box(1010,450,50,50);
  box27 = new Box(1010,400,50,50)

  monster = new Monster(1200,100,50,50)
}


function draw() {
  background(backgroundImage);
  Engine.update(engine);
  textSize(25);
  fill("yellow");
  stroke("black")
  text("Drag the Superhero to defeat the Monster",300,100);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();

  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();


  hero.display();
  ground.display();
  
  monster.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY})
}
