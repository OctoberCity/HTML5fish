 var wave=function(){
 	this.x=[];
 	this.y=[];
 	this.alive=[];//boolean
 	this.color=[];
 	this.r=[];
 }

 wave.prototype.num=10;
 wave.prototype.init=function(){
 	for(var i=0;i<this.num;i++){this.x[i]=0,this.y[i]=0;this.alive[i]=false;this.r[i]=0;this.color[i]="255,255,255";}
 }
 wave.prototype.draw=function(){
 	ctx1.save();
 	ctx1.showdownBlur=10;
 	ctx1.showdownColor="#fff";
   for(var i=0;i<this.num;i++){
           if(this.alive[i]){
           	 this.r[i]+=intervalTime*0.05;
           	 var  alpha=1-0.02*this.r[i];
              if(this.r[i]>60){this.alive[i]=false;break;}
             ctx1.beginPath();
             ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
             ctx1.closePath();
             ctx1.strokeStyle="rgba("+this.color[i]+","+alpha+")";
             ctx1.lineWidth="2";       
             ctx1.stroke();
           }
   } 
    ctx1.restore();

    
 }
 wave.prototype.born=function(x,y,rgbaColor){

 	for(var i=0;i<this.num;i++){
     if(!this.alive[i]){
 			this.alive[i]=true;
 			this.x[i]=x;
 			this.y[i]=y;
 			this.r[i]=20;
            this.color[i]=rgbaColor;
 			return;
 		}
 }
}
 