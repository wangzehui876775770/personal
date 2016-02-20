window.onload=function(){

    var date=new Date();
    var ht=date.getHours();
    var mt=date.getMinutes();
    var st=date.getSeconds();


    var clock=document.getElementsByClassName("clock")[0];
    for(var i=0;i<60;i++){
        var w, h;
        if(i%5==0){
            w=4;h=10;
        }else{
            w=2;h=6;
        }
        var l=(200-w)/2;
        var div=document.createElement("div");
        div.style.cssText="width:"+w+"px;height:"+h+"px;background:#000;position:absolute;left:0;top:0";
        div.style.transform="translate("+l+"px,0px) rotate("+6*i+"deg)";
        div.style.transformOrigin="center 100px";
        clock.appendChild(div);
    }
    function hp(x,y){

    }







};