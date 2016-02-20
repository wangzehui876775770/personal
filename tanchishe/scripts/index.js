 window.onload=function(){

//---------------------------------贪吃蛇-------------------------------------
var she=document.getElementById('tanchishe');
var ROM=15,LEFT=37,UP=38,RIGHT=39,DOWN=40,defaultDiretion=RIGHT;
var snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
for(var i=0;i<ROM;i++){
	for(var j=0;j<ROM;j++){
		var blocks=document.createElement('div')
			blocks.setAttribute('id',i+'--'+j)
			blocks.setAttribute('class','blocks');
		she.appendChild(blocks); 
	}
}
var random=function(){
	return Math.floor(Math.random()*ROM);
};
//---------------------
var isInsnake=function(x,y){
	for(var i=0;i<snake.length;i++){
		while(snake[i].x==x && snake[i].y==y){
			return true;
		}
	}
	return false;
};
//---------------------
var drowfood=function(){
	var x=random(),y=random();
	if(snake.length==ROM*ROM){ return;}
	while( isInsnake(x,y) ){ x=random(); y=random();}
	document.getElementById(x+'--'+y).style.background='#dd88ff';
	return {x:x,y:y};
}
var food=drowfood();
var zou=function(dir){
	var snakeHead=snake[snake.length-1];
	var newHead;
	if(defaultDiretion==RIGHT){ newHead={x:snakeHead.x,y:snakeHead.y+1} };
	if(defaultDiretion==LEFT){ newHead={x:snakeHead.x,y:snakeHead.y-1} };
	if(defaultDiretion==UP){ newHead={x:snakeHead.x-1,y:snakeHead.y} };
	if(defaultDiretion==DOWN){ newHead={x:snakeHead.x+1,y:snakeHead.y} };
	if(newHead.x>ROM-1 ||newHead.x<0 || newHead.y>ROM-1 || newHead.y<0){
		clearInterval(tt);
		return null;
	}
	if(isInsnake(newHead.x,newHead.y)){
		clearInterval(tt);
		return null;
	}
	snake.push(newHead);
	if(newHead.x==food.x && newHead.y==food.y){
		document.getElementById(food.x+'--'+food.y).style.background='#88ddff';
		food=drowfood();
		return null;
	}
	var weiba=snake.shift();
	document.getElementById(weiba.x+'--'+weiba.y).style.background='#fff';
	document.getElementById(newHead.x+'--'+newHead.y).style.background='#88ddff';
};
//--------------------
(function(){
	for(var i=0;i<snake.length;i++){
		document.getElementById(snake[i].x+'--'+snake[i].y).style.background='#88ddff';
	}
})(); 
//--------------------
document.onkeydown=function(e){
	var d=e.keyCode;
	if( (d==UP || d==LEFT || d==RIGHT || d==DOWN) && Math.abs(defaultDiretion-d)!==2){
		defaultDiretion=d;
		zou(d);
	}
};
 // var tt=setInterval(zou,1000);

var shezhi=document.getElementById('shezhi');
shezhi.onclick=function(){
  location.reload();
}
var qita=document.getElementById('else');
qita.onclick=function(){
  window.open('../3d轮播/index.html');
}
var stop=document.getElementById('stop');
stop.onclick=function(){
  clearInterval(tt);
}
var start=document.getElementById('start');
start.onclick=function(){
  tt=setInterval(zou,1000);
}




};