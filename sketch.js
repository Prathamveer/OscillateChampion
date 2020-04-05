const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("any.jpg");
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;


    //ground = new Ground(600,height,1200,20);
    

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    structure=new Ground(300,100,250,20);
    chain = new Chain(bird.body,structure.body);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    

    
    structure.display();
    bird.display();
    //log6.display();
    chain.display();    
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}