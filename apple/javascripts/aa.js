window.onload=function(){

    //    var beijing=document.getElementsByClassName("beijing")[0];
    //beijing.onmouseover=function(){
    //    beijing.style.width=600+"px";
    //    beijing.style.width=600+"px";
    //
    //    beijing.addEventListener("webkitTransitionEnd",function(){
    //        console.log("e4warg");
    //    })
    //}


    var arr=[];
    var clientW=document.documentElement.clientWidth;
    var clientH=document.documentElement.clientHeight;
    for(var i=0;i<300;i++) {
        var div = document.createElement("div");
        var lefts = 10 + (clientW - 20) * Math.random();
        var time = 3 * Math.random();
        div.style.cssText="width:1px;height:20px;background:white;position:absolute;top:-20px;left:"+lefts+"px;transition:top 3s linear "+time+"s;-webkit-filter:blur(1px)";
        document.body.appendChild(div);
        arr.push(div);
    }
        setTimeout(function(){
            for(var i=0;i<arr.length;i++){
                arr[i].style.top=clientH+"px";
                arr[i].addEventListener("webkitTransitionEnd",function(){
                    console.log(1);
                    var that=this;
                    this.style.transition="none";
                    this.style.top="-20px";
                    var time=3*Math.random();
                    setTimeout(function(){
                        that.style.transition="top 1s linear"+time+"s";
                        that.style.top=(clientH-20)+"px";
                    },0)
                },false);
            }
        },0);










};