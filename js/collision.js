function   fishEatFruit(){
	for(var i=0;i<fruit.num;i++){
     var distance=Math.pow((fruit.x[i]-bigfish.x),2)+Math.pow((fruit.y[i]-bigfish.y),2);
		if(fruit.alive[i]&&distance<200){
            //吃到食物产生白色圈圈
            waves.born(fruit.x[i],fruit.y[i],"255,255,255");
			 //score+=(fruit.fruitType[i].src).indexOf("blue")!=-1?2:1//判断果实蓝色加2分黄色加1分
              if((fruit.fruitType[i].src).indexOf("blue")!=-1){
                          score+=2;
                          eatdFruitType=2;
                  }else{
                                 score+=1;
                          eatdFruitType=1;
                  }

             fruit.dead(i);
             ++bigfish.bodyPictureNum;
             if(bigfish.bodyPictureNum>7){bigfish.bodyPictureNum=7;}
            // bigfish.bodyPictureNum=(++bigfish.bodyPictureNum)>7?7:1=1;
		}
	}
}
//母亲喂儿子食物
function  smfishEatFromBig(){
	if(score>0){
     var msdistance=Math.pow((smfish.x-bigfish.x),2)+Math.pow((smfish.y-bigfish.y),2);
     if(msdistance<400){
      waves.born(smfish.x,smfish.y,"255,58,12");
     	smfish.bodyPictureNum=0;
     	bigfish.bodyPictureNum=0;
     	--score;
     }
	}
}


