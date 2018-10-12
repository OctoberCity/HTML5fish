
function  drawBackground(){

bgImage.addEventListener("load",function(){
	ctx2.drawImage(bgImage,0,0,canWidth,canHeight);
}); 

if(bgImage.complete){
	ctx2.drawImage(bgImage,0,0,canWidth,canHeight);

}
  
}