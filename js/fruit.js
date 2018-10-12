var Fruitobj=function(){
	this.alive=[];//boolean
	this.orange=new Image();
	this.blue=new  Image();
	this.x=[];
	this.y=[];
	//速度
	this.speed=[];
	//位移距离
	this.l=[];
	//果实类型
	this.fruitType=[];
}


Fruitobj.prototype.num=30;

Fruitobj.prototype.init=function(){
for(var i =0;i<this.num;i++ ){
	this.alive[i]=false;//最开始是死的
	this.x[i]=0;
	this.y[i]=0;
	this.born(i);
}
this.orange.src="./src/fruit.png";
this.blue.src="./src/blue.png";
}

Fruitobj.prototype.born=function(i){
 
   	var rannum=Math.floor(Math.random()*ane.num);
   	this.x[i]=ane.x[rannum];
   	this.y[i]=canHeight-ane.len[rannum]-Math.random()*10;
   	this.speed[i]=Math.floor(Math.random()*5+1)*0.01;
   	this.l[i]=0;
   	this.alive[i]=true;
   	//初始化果实类型
    this.fruitType[i]=Math.random()>0.5?this.orange:this.blue;

}
Fruitobj.prototype.draw=function(){
	for(var i=0;i<this.num*0.5;i++){
      if(intervalTime>40){
      	intervalTime=30;
      }     
    

           if(this.alive[i]){//判断果实状态
		     if(this.l[i]<this.blue.width){
		        this.l[i]+=intervalTime*0.01;
		       }else{
		         this.y[i]-=intervalTime*this.speed[i];
		       }
		      ctx2.drawImage(this.fruitType[i],this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
		      	}


      	     //让果实死去
		     if(this.y[i]<10){
		           this.alive[i]=false;
		           this.l[i]=0;
		      
		     }
     }


       }
   
		// intervalTimes=intervalTimes+intervalTime;
		//   if((intervalTimes*0.0001+2)<this.blue.width){
		//  		ctx2.drawImage(this.blue,this.x[i]-(intervalTimes*0.0001+2)*0.5,this.y[i]-(intervalTimes*0.0001+2)*0.5,intervalTimes*0.0001+2, intervalTimes*0.0001+2);	
		//  }else{
		//  	   ctx2.drawImage(this.blue,this.x[i]-this.blue.width*0.5,this.y[i]-intervalTimes*0.005*this.speed[i]);
		//  }

//让果实死亡
 Fruitobj.prototype.dead=function(i){
 	this.alive[i]=false;
 }    





 
//判断果实池子里面存在alive=true的数量
      function fruitMonitor(){
       var alivenum =0 ;
      	for(var i in fruit.alive){
      		if(fruit.alive[i]){
                  ++alivenum;
      		}

      	    if(alivenum<15){
              bornFruit();
      	    }
      	}
      }
//选择果实池子alive=false的一个果实进行出生处理
     function bornFruit(){
         for(var i in fruit.alive){
         	if(!fruit.alive[i]){
         		fruit.born(i);
         	}
         }
     }