var ane=function(){
    this.x=[];
    this.len=[];
    this.radius;
    this.intervalCount;
    this.direction;
}
ane.prototype.num=40;

ane.prototype.init=function(){
	for(var i=0;i<this.num;i++){
      this.x[i]=i*20+Math.floor(Math.random()*10);
      this.len[i]=200+Math.floor(Math.random()*50);
	}
  this.radius=0;
  this.intervalCount=0;
   this.direction=canWidth;

}
ane.prototype.draw=function(){ 
//海葵摆动的角度
  this.intervalCount+=intervalTime;
  if(this.intervalCount>60){
    if(this.radius==90){
      num=-1;
    }



    if(this.radius==0){
      this.direction=this.direction==canWidth?0:canWidth;
      this.radius=0;
      num=1;
    }
     this.radius=this.radius+1*(num) ;
     this.intervalCount=0; 
  }




   ctx2.save();
   ctx2.globalAlpha=0.6 ;
   ctx2.lineCap="round";
   ctx2.lineWidth=20;
   ctx2.strokeStyle="#3b154e";
   for(var i in this.x ){
   	ctx2.beginPath();
   ctx2.moveTo(this.x[i],600);
   ctx2.arcTo(this.x[i],600-this.len[i],this.direction,canHeight-this.len[i],this.radius);
   //ctx2.lineTo(this.x[i],600-this.len[i]);
    ctx2.stroke();
}

   ctx2.restore();
   

}