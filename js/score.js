function  drawScore(){
	ctx1.beginPath;
	ctx1.font="30px Verdana";
	ctx1.fillStyle="#f2f2f2";
    ctx1.fillText("你的成绩是"+score,canWidth*0.5-ctx1.measureText("你的成绩是"+score).width*0.5,40);
}