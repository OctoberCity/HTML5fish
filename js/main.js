var vancas1;
var ctx1;
var vancas2;
var ctx2;
var  bgImage=new Image();
var canWidth;
var canHeight;
//海葵ane
var ane;
//大鱼妈妈bigfish
var bigfish;
//小鱼amfish
var smfish;
 
document.body.onload=game;
//光点能量
var fruit;
//吃掉的果实的类型
var eatdFruitType;
//白色圈圈产生
var waves;
//计算帧之间的时间
var lastTime
var intervalTime;

//鼠标的位置
var mousex;
var mousey;

//计算获得的分数

var score;



function game(){
  init();
  //循环
   getLoop();
 
  
}

//初始化
function init(){
	vancas1=document.getElementById("canvas1");
	ctx1=vancas1.getContext("2d");
	vancas2=document.getElementById("canvas2");
	ctx2=vancas2.getContext("2d");


	lastTime=Date.now();
    score=0;


	//对bg图片的资源加载
     bgImage.src="./src/background.jpg";
     canWidth=canvas2.width;
     canHeight=canvas2.height;
     //初始化海葵ane
     ane=new ane();
     ane.init();

     fruit=new Fruitobj();
     fruit.init();
     fruit.born();

     //初始化大鱼妈妈
     bigfish=new BigFish();
     bigfish.init();
     //初始化小鱼
     smfish=new smFish();
     smfish.init();
     //初始化鼠标坐标
     mousex=canWidth*0.5;
     mousey=canHeight*0.5;
     canvas1.addEventListener("mousemove",fishMouseMove,false);
     //初始化吃的食物类型
     eatdFruitType=0;

     //初始化圆圈
     waves =new wave();
     waves.init();

}
//循环部分，例如鱼尾摆动
function getLoop(){
	requestAnimFrame(getLoop);//自动根据设备性能来改变帧率的大小，但是有缺点，每一帧的时间都不一样
    
    var nowTime=Date.now();
    intervalTime=nowTime-lastTime;
    lastTime=nowTime;
 

    drawBackground();
    ane.draw(); 
    fruit.draw(); 
    fruitMonitor();
    ctx1.clearRect(0,0,canWidth,canHeight);
    bigfish.draw(); 
    smfish.draw();
    //大鱼吃食物
    fishEatFruit();
    //成绩
    drawScore();
    //大鱼喂小鱼食物
    smfishEatFromBig();
    //画圈圈
    waves.draw();

 
}
//鼠标，大鱼运动
function fishMouseMove(event){
    event=event||window.event;
       if(event.offSetX||event.layerX){
           mousex=event.offSetX==undefined?event.layerX:event.offSetX;
           mousey=event.offSetY==undefined?event.layerY:event.offSetY;

       }

 
}