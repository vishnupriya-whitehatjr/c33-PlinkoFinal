var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  fill("white");
  text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 10 ", 10, 550);
  text(" 100 ", 80, 550);
  text(" 100 ", 160, 550);
  text(" 10 ", 250, 550);
  text(" 10 ", 330, 550);
  text(" 50 ", 410, 550);
  text(" 50 ", 490, 550);
  text(" 150 ", 560, 550);
  text(" 150 ", 640, 550);
  text(" 10 ", 730, 550);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     if(particles[j].body.position.y>780){
      console.log("working");
     }
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}