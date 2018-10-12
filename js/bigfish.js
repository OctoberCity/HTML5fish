var BigFish=function(){
      this.x=0;
      this.y=0;
      this.eye=[];
      this.eyeTimers;
      this.eyePictureNum;
      this.eyeInterval;
      this.bodyBlue=[];
      this.bodyOran=[];
      this.bodyPictureNum;
      this.tail=[];
      this.tailTimers;
      this.tailPictureNum;
      this.angle;
}

BigFish.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
  for(var i=0;i<2;i++){var image=new Image();image.src="./src/bigEye"+i+".png";this.eye[i]=image;}
     this.eyeTimers=0;
    this.eyePictureNum=0;
    this.eyeInterval=200;
  for(var i=0;i<8;i++){var image=new Image();image.src="./src/bigSwim"+i+".png";this.bodyOran[i]=image;}
  for(var i=0;i<8;i++){var image=new Image();image.src="./src/bigSwimBlue"+i+".png";this.bodyBlue[i]=image;}
    this.bodyPictureNum=0;
  for(var i=0;i<8;i++){var image=new Image();image.src="./src/bigTail"+i+".png";this.tail[i]=image;}
    this.tailTimers=0;
    this.tailPictureNum=0;


	this.angle=0;//开始的时候是PI

}


BigFish.prototype.draw=function(){
     this.x=lerpDistance(mousex,this.x,0.9);
     this.y=lerpDistance(mousey,this.y,0.9);

     //改变角度
     var  intervalX=-mousex+this.x;
     var intervaly=-mousey+this.y;
     var  goalAngel=Math.atan2(intervaly,intervalX);

     this.angle=lerpAngle(goalAngel,this.angle,0.8);


     //尾巴摇动
     this.tailTimers+=intervalTime;
     if(this.tailTimers>50){
         this.tailPictureNum=(++this.tailPictureNum)%8;
         this.tailTimers%=intervalTime;
     }
     
     //身体变换
     //眼睛
     this.eyeTimers+=intervalTime;
     if(this.eyeTimers>this.eyeInterval){
      this.eyePictureNum=(++this.eyePictureNum)%2;
      this.eyeTimers%=intervalTime;
      if(this.eyePictureNum==0){
        this.eyeInterval=2000+Math.random()*1500;
      }else{
        this.eyeInterval=200;
      }
     }
  var bodyImage=eatdFruitType==2?this.bodyBlue[this.bodyPictureNum]:this.bodyOran[this.bodyPictureNum];
	ctx1.save();
	ctx1.translate(this.x,this.y);
  ctx1.rotate(this.angle);
  ctx1.drawImage(bodyImage,-bodyImage.width*0.5,-bodyImage.height*0.5);
	ctx1.drawImage(this.tail[this.tailPictureNum],-this.tail[this.tailPictureNum].width*0.5+30,-this.tail[this.tailPictureNum].height*0.5);
  ctx1.drawImage(this.eye[this.eyePictureNum],-this.eye[this.eyePictureNum].width*0.5,-this.eye[this.eyePictureNum].height*0.5);  


	ctx1.restore();

}