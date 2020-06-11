var eng,bo,wor,r=0;




function setup(){
  createCanvas(1200,600);
eng=Matter.Engine.create();
wor=eng.world;
bo=Matter.Bodies.rectangle(600,500,1200,10);
Matter.World.add(wor,bo);
bo.isStatic=true;
b1=new Box(800,400,90,90);
b2=new Box(1100,400,90,90);
l1=new Log(950,390,387,40);
l2=new Log(950,290,387,40);
b3=new Box(800,300,90,90);
b4=new Box(1100,300,90,90);
bird=new Bird(0,0,50,50)
//950,170

 b5=new Box(950,160,90,90)
 //806,135
 //l3=new Log(806,170,40,200)
 //1060,182
// l4=new Log(1060,170,40,200);
 //Matter.Body.setAngle(l3.RigidBody,PI/7);
// Matter.Body.setAngle(l4.RigidBody,-PI/7);
}
function draw(){
  background(0);
  //console.log(b1.RigidBody.angle);
  Matter.Engine.update(eng);
  bird.RigidBody.position.x=mouseX;
  bird.RigidBody.position.y=mouseY;

b1.Display();
b2.Display();
b3.Display();
b4.Display();
l1.Display();
l2.Display();
b5.Display();
//l3.Display();
//l4.Display();
bird.Display();
rectMode(CENTER);
rect(bo.position.x,bo.position.y,1200,10)
text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY)
}