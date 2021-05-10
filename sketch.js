const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1 , stand2;


function setup(){
    createCanvas(1300, 700);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(650, 680, 1300, 20);

    stand1 = new Ground(500,500,220,20);
    stand2 = new Ground(1000,350,170,20);

    box1 = new Box(440,465,20,30);
    box2 = new Box(460,465,20,30);
    box3 = new Box(480,465,20,30);
    box4 = new Box(500,465,20,30);
    box5 = new Box(520,465,20,30);
    box6 = new Box(540,465,20,30);
    box7 = new Box(560,465,20,30);

    box8 = new Box(460,435,20,30);
    box9 = new Box(480,435,20,30);
    box10 = new Box(500,435,20,30);
    box11 = new Box(520,435,20,30);
    box12 = new Box(540,435,20,30);
    
    box13= new Box(480,405,20,30);
    box14 = new Box(500,405,20,30);
    box15 = new Box(520,405,20,30);

    box16 = new Box(500,380,20,30);



    box17 = new Box(960,315,20,30);
    box18= new Box(980,315,20,30);
    box19 = new Box(1000,315,20,30);
    box20 = new Box(1020,315,20,30);
    box21 = new Box(1040,315,20,30);
    
    box22= new Box(980,285,20,30);
    box23 = new Box(1000,285,20,30);
    box24 = new Box(1020,285,20,30);

    box25 = new Box(1000,255,20,30);

    polygon = new Polygon(100,450,40);
    rope = new Rope(polygon.body,{x:100,y:450});


}
function draw(){
    background(255);
    Engine.update(engine);

    ground.display();
    
    stand1.display();
    stand2.display();

    fill("red");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("yellow");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("green");    
    box13.display();
    box14.display();
    box15.display();
    fill("white");
    box16.display();

    fill("black");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
    fill("white");
    box22.display();
    box23.display();
    box24.display();
    
    fill("pink");
    box25.display();


    polygon.display();
    rope.display();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})

}


//create mouseReleased function here
function mouseReleased(){
  rope.fly();

}


//create keyPressed function here
function keyPressed(){
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, {x:100, y:450}) 
    rope.attach(polygon.body);
  }

}