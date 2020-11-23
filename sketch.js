const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var bgImg
var gbox,sBox,mBox,log,bBox,ball,chain,ground;
var gameState="onChain"
var chance=15;
var score=0
var hour
var bg="bg1.jpg"
function preload(){
getBackgroundImg();

}

function setup(){
  createCanvas(2000,1000);
  engine=Engine.create();
  world=engine.world;
  gbox=new Box1(1280,850,150,150);
  gbox1=new Box1(1415,850,150,150);
  gbox2=new Box1(1550,850,150,150)
  gbox3=new Box1(1685,850,150,150);
  gbox4=new Box1(1820,850,150,150);
  sBox=new Box(1280,750,150,150,PI/7);
  sBox1=new Box(1405,750,150,150,PI/7)
  sBox2=new Box(1550,750,150,150,PI/7);
  sBox3=new Box(1685,750,150,150,PI/7);
  sBox4=new Box(1805,750,150,150,PI/7);
  mBox=new stoneBox(1300,650,160,120,PI/7);
  mBox2=new medBox(1570,650,120,120,PI/7);
  mBox3=new medBox(1460,650,120,120,PI/7);
  mBox4=new medBox(1680,650,120,120,PI/7);
  mBox5=new stoneBox(1760,650,160,120,PI/7);
  mBox6=new stoneBox(1360,550,150,130,PI/7);
  mBox7=new medBox(1520,550,100,100,PI/7);
  mBox8=new medBox(1600,550,100,100,PI/7);
  mBox9=new medBox(1700,550,100,100,PI/7);
  mBox10=new stoneBox(1800,550,150,130,PI/7);
  mBox11=new stoneBox(1500,450,130,130,PI/7);
  mBox12=new stoneBox(1700,450,130,130,PI/7);
  mBox13=new medBox(1650,450,80,80,PI/7);
  mBox14=new medBox(1600,350,160,160,PI/7)
 

  ball=new Ball(200,740,PI/7);
 
  chain=new SlingShot(ball.body,{x:200,y:740})

  ground=new Ground(635,998,1300,20);
  ground2=new Ground(1995,500,20,2000);
  



}
function draw(){
 if(bgImg) 
  background(bgImg)
  Engine.update(engine);
 
  textSize(30);
  textFont("Arial Black");
 

  textSize(32);
  textStyle(BOLD)
  fill("yellow");
    text("CHANCE LEFT:"+chance,250,150);

  
   
 // console.log(sBox.body.position)
dis();
endd();
}

function mouseReleased(){
  chain.fly();
  gameState="launched";
}



function mouseDragged(){
  if(gameState==="onChain"){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
}

function keyPressed(){
  if((keyCode===32)&&gameState==="launched"){
    Matter.Body.setPosition(ball.body,{x:200,y:740})
    chain.attach(ball.body)
    gameState="onChain"
    chance=chance-1;
    Matter.Body.setVelocity(ball.body,{x:0,y:0})
  }
}

function dis(){
  sBox.display();
  gbox.display();
  gbox1.display();
  gbox2.display();
  gbox3.display();
  gbox4.display();
  sBox1.display();
  sBox2.display();
  sBox3.display();
  sBox4.display(); 
  mBox.display();
  mBox2.display();
  mBox3.display();
  mBox4.display();
  mBox5.display();
  mBox6.display();
  mBox7.display();
  mBox8.display();
  mBox9.display();
  mBox10.display();
  mBox11.display();
  mBox12.display();
  mBox13.display();
  mBox14.display();
  ball.display();
  chain.display();
  ground.display();
  ground2.display();
  mBox10.score();
    mBox11.score();

  mBox12.score();
    mBox5.score();
  mBox6.score();
  mBox.score();

  sBox.score();
  sBox1.score();
  sBox2.score();
  sBox3.score();
  sBox4.score();
  mBox2.score();
  mBox3.score();
  mBox4.score();
    mBox7.score();

  mBox8.score();

  mBox9.score();

  mBox13.score();

  mBox14.score();

  colorChange();


}

function colorChange(){

if(hour>=6&&hour<19){
    fill("black")
text("Stone:600s",700,180)
text("MediumBox:400s",900,180)
text("StoneBox:200s",1200,180)
 fill("red");
  text("PRESS SPACE TO GET A ONE MORE CHANCE",700,100);
  text("STONE REQUIRE MORE HITS TO VANISH",750,140);
fill("blue")
 text("SCORE:"+score,250,200)

}else{
  fill("yellow")
text("Stone:600s",700,180)
text("MediumBox:400s",900,180)
text("StoneBox:200s",1200,180)
 fill(102,255,0);
  text("PRESS SPACE TO GET A ONE MORE CHANCE",700,100);
  text("STONE REQUIRE MORE HITS TO VANISH",740,140);

fill("white")
 text("SCORE:"+score,250,200)
}
}


function endd(){
  if(chance===0){
    Matter.Body.setPosition(ball.body,{x:200,y:730});
    
    gameState="end";
    textSize(55);
    fill("grey")
    text("GAME OVER",850,300)
    text("RESTART THE GAME",760,350);
    textSize(31)
    fill("red")
      textStyle(BOLD)
    text("YOU SCORE:"+score,895,410)
  }
}

async function getBackgroundImg(){

var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON= await response.json();
var dateTime=responseJSON.datetime;
    hour=dateTime.slice(11,13);

if(hour>=6&&hour<19){

bg="bg1.jpg";

}else {

bg="bg2.jpg"

}

bgImg=loadImage(bg)

}
