var   smFish=function(){
  this.x ;
  this.y ;
  this.smfishBody=[];
  this.eye=[];
  this.smfishTail=[];
  this.angle ;
  //尾巴摆动的变量
  this.timers;
  this.pictureNum;
  //眼睛持续的变量
  this.eyeTimers;
  this.eyePictureNum;
  this.eyeInterval;//持续的时间
  //身体变化的变量
  this.bodyTimers;
  this.bodyPictureNum;

}

smFish.prototype.init=function(){
  this.x=canWidth*0.5-50;
  this.y=canHeight*0.5-50;
  for(var i=0;i<2;i++){var image=new Image();image.src="./src/babyEye"+i+".png";this.eye[i]=image;}
  for(var i=0;i<8;i++){var imge=new Image();imge.src="./src/babyTail"+i+".png";this.smfishTail[i]=imge;}
  for(var i=0;i<20;i++){var imge=new Image();imge.src="./src/babyFade"+i+".png";this.smfishBody[i]=imge;}
  this.angle=0;
  this.timers=0;
  this.pictureNum=0;
  this.eyeTimers=0;
  this.eyePictureNum=0;
  //限定的展示时间
  this.eyeInterval=200;

   this.bodyTimers=0;
  this.bodyPictureNum=0;
}

smFish.prototype.draw=function(){
      this.x=lerpDistance(bigfish.x-50,this.x,0.99);
      this.y=lerpDistance(bigfish.y-50,this.y,0.99);

      var intervalX=bigfish.x-this.x;
      var intervalY=bigfish.y-this.y;
      var goalAngle=Math.atan2(intervalY,intervalX)+Math.PI;    
      this.angle=lerpAngle(goalAngle,this.angle,0.9);


      //小鱼尾巴摆动
      this.timers+=intervalTime;
      if(this.timers>50){
      	this.pictureNum=(++this.pictureNum)%8;
      	this.timers%=50;
      }
      //小鱼眼睛眨动
      this.eyeTimers+=intervalTime;
      if(this.eyeTimers>this.eyeInterval){
         this.eyePictureNum=(this.eyePictureNum+1)%2;
         this.eyeTimers=this.eyeTimers%intervalTime;
         if(this.eyePictureNum==0){
          this.eyeInterval=2000+Math.random()*1500;
         }else{
          this.eyeInterval=200;
         }
      }
      //小鱼身体变化
      this.bodyTimers+=intervalTime;
      if (this.bodyTimers>400) {
        this.bodyPictureNum=(this.bodyPictureNum+1)%20;
        this.bodyTimers%=intervalTime
      }
     // gameover游戏结束如果照片的图片号码为20那么就游戏结束
      if(this.bodyPictureNum==20){
      //gameover();
      }
     ctx1.save();
     ctx1.translate(this.x,this.y);
     ctx1.rotate(this.angle);
     ctx1.drawImage(this.smfishBody[this.bodyPictureNum], -this.smfishBody[this.bodyPictureNum].width*0.5, -this.smfishBody[this.bodyPictureNum].height*0.5);
     ctx1.drawImage(this.smfishTail[this.pictureNum], -this.smfishTail[this.pictureNum].width*0.5+25, -this.smfishTail[this.pictureNum].height*0.5);
     ctx1.drawImage(this.eye[this.eyePictureNum], -this.eye[this.eyePictureNum].width*0.5, -this.eye[this.eyePictureNum].height*0.5);
     ctx1.restore();







     //向周围发射果实子弹
   // for(var i=1;i<=12;i++){
   //   ctx1.save();
   //   ctx1.translate(this.x,this.y);
   //   ctx1.rotate(i*30/180*Math.PI);
   //   ctx1.drawImage(fruit.orange, 10, 10)//-Math.tan((i*30)/180*Math.PI)*100);
   //   ctx1.restore();
   //   }

}
