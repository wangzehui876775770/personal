window.onload=function(){

var frame=document.getElementById('frame');
var button=true;
var count=0;
var time=document.getElementById('time');
for(var i=0;i<50;i++){
	var colors='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+
				Math.floor(Math.random()*255)+','+'0.9)';	
	var word=document.createElement('div');
		word.setAttribute('class','word');
		frame.appendChild(word);
		word.style.boxShadow=colors+' '+'0px 0px 20px inset';
	var str=Math.floor(65+ Math.random()*57) ;
		while(str>=91&&str<=96){
			str=Math.floor(65+ Math.random()*57) ;
		}
		var st=String.fromCharCode(str);
		word.innerHTML=st;
}
var top=frame.firstElementChild;
document.onkeydown=function(e){
	console.log(top);
	if(e.shiftKey){
		if(e.keyCode!=top.innerHTML.charCodeAt(0)) return;
	}else{
		if(e.keyCode+32!=top.innerHTML.charCodeAt(0))  return;
	}
	top.style.background=null;
	top.style.boxShadow=null;
	top.style.color='black';
	top=top.nextElementSibling;
	if(top==null){	
		alert(count+'棒极了');	
		location.reload();
	 }
	if(button){
	var timeId=setInterval(function(){
		count+=1;
		time.innerHTML=count;
		if(count==50){
			clearInterval(timeId);
			alert('时间到,你太慢了');
			location.reload();
		}
	},1000);
	button=false;
}
}
//--------------
var shezhi=document.getElementById('shezhi');
shezhi.onclick=function(){
  location.reload();
}
var qita=document.getElementById('else');
qita.onclick=function(){
  window.open('../3d轮播/index.html');
}
	



};