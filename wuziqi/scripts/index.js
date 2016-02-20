window.onload=function(){

//---------------------------------五子棋------------------------------------------------
var qipan=document.getElementById('qipan');
var DOW=12,width=Math.floor( (qipan.offsetWidth-DOW)/DOW)+'px';
var weizhi=document.getElementsByClassName('weizhi');
var kaiguan=true;
var dicti1={};
var dicti2={};
for(var i=0;i<DOW;i++){
var xian=document.createElement('div');
	xian.style.width='600px';
	xian.style.height='1px';
	xian.style.background='white';
	xian.style.position='absolute';
	xian.style.left='0px';
	var top=Math.floor(qipan.offsetHeight/DOW/2)+Math.floor(qipan.offsetHeight/DOW)*i;
	xian.style.top=top+'px';
	qipan.appendChild(xian);
}
//----------
for(var j=0;j<DOW;j++){
var shuxian=document.createElement('div');
	shuxian.style.height='600px';
	shuxian.style.width='1px';
	shuxian.style.background='white';
	shuxian.style.position='absolute';
	shuxian.style.float='left';
	var left=Math.floor(qipan.offsetWidth/DOW/2)+Math.floor(qipan.offsetWidth/DOW)*j;
	shuxian.style.left=left+'px';
	shuxian.style.top='0';
	qipan.appendChild(shuxian);
}
//-------------
for(var i=0;i<DOW;i++){
	for(var j=0;j<DOW;j++){
		var zuobiao=document.createElement('div');
			zuobiao.setAttribute('id',i+'-'+j);
			zuobiao.setAttribute('class','weizhi');
		qipan.appendChild(zuobiao);
	}
}
//-----------------
var panduan=function(id,dicti){
var x=Number(id.split('-')[0]);
var y=Number(id.split('-')[1]);
var heng=1,lie=1,zuoxie=1,youxie=1;
var yx,ty;

tx=x;ty=y;
while(dicti[tx+'-'+(ty-1)]){ heng++;ty--;}
yx=x;ty=y;
while(dicti[tx+'-'+(ty+1)]){ heng++;ty++;}
if(heng>=5){return true;}

yx=x;ty=y;
while(dicti[(tx-1)+'-'+ty]){ lie++;tx--;}
tx=x;ty=y;
while(dicti[(tx+1)+'-'+ty]){ lie++;tx++;}
if(lie>=5){ return true;}

yx=x;ty=y;
while(dicti[(tx-1)+'-'+(ty+1)]){ youxie++;tx--;ty++;}
tx=x;ty=y;
while(dicti[(tx+1)+'-'+(ty-1)]){ youxie++;tx++;ty--;}
if(youxie>=5){ return true;}

yx=x;ty=y;
while(dicti[(tx-1)+'-'+(ty-1)]){ zuoxie++;tx--;ty--;}
tx=x;ty=y;
while(dicti[(tx+1)+'-'+(ty+1)]){ zuoxie++;tx++;ty++;}
if(zuoxie>=5){ return true;}

return false;
}
//---------------
for(var i=0;i<weizhi.length;i++){
	weizhi[i].onclick=function(){
		if(this.hasAttribute('cc')){ return;}
		if(kaiguan){
			var qiziB=document.createElement('div');
			qiziB.setAttribute('class','qiziB');
			var id=this.getAttribute('id');
			this.appendChild(qiziB);
			dicti1[id]=true;
			kaiguan=false;
			if(panduan(id,dicti1)){ alert('黑棋赢了!!');location.reload();}
		}else{
			var id2=this.getAttribute('id');
			var qiziW=document.createElement('div');
			qiziW.setAttribute('class','qiziW');
			this.appendChild(qiziW);
			dicti2[id2]=true;
			kaiguan=true;
			if(panduan(id2,dicti2)){ alert('白棋赢了!!'); location.reload();}
		}
		this.setAttribute('cc','false');
	}
}
//-------------------------
var shezhi=document.getElementById('shezhi');
shezhi.onclick=function(){
  location.reload();
}
var qita=document.getElementById('else');
qita.onclick=function(){
  window.open('../3d轮播/index.html');
}





};