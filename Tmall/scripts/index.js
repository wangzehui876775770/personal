window.onload=function(){

//---------------------------头部------------------------------------
// var snMenu=document.getElementsByClassName('sn-menu');
// var menuBd=document.getElementsByClassName('menu-bd');
// for(var i=0;i<snMenu.length;i++){
// 	snMenu[i].index=i;
// 	snMenu[i].onmouseover=function(){
// 		menuBd[this.index].style.display='block';
// };
// 	snMenu[i].onmouseout=function(){
// 		menuBd[this.index].style.display='none';
// };
// }

// //----------------------------banner部分-----------------------------
// var bannerMenu=document.getElementsByClassName('banner-menus');
// var hiddenBannerMenu=document.getElementsByClassName('hidden-banner-menu');
// var hiddenimg=document.getElementsByClassName('hiddenimg');
// var hiddenimgs=document.getElementsByClassName('hiddenimgs');
// var bannerMainitem=document.getElementsByClassName('banner-main-item');
// var bannerColor=document.getElementsByClassName('banner-color');
// var colorHand=['#c89eff','#ffd34c','#f2f7fd','#355272','#D82D62','#FAA912','#9CEEE0','#EBE8E3',
// 				'#DE0609','#FFE74F','#FFC5D4','#29A6FF','#E4E2E3','#FFE1E1','#30C4FF','#D8E9C7'];
// 	hiddenimg[0].style.display='block';
// 	hiddenimgs[0].style.display='block';
// 	var el;
// for(var i=0;i<bannerMenu.length;i++){
// 	bannerMenu[i].index=i;
// 	bannerMenu[i].onmouseover=function(){
// 		clearInterval(timer);
// 		if(el){
// 		hiddenBannerMenu[el].style.display='none';
// 		hiddenimg[el].style.display='none';
// 		hiddenimgs[el].style.display='none';
// 		}
// 		hiddenBannerMenu[this.index].style.display='block';
// 		hiddenimg[this.index].style.display='block';
// 		hiddenimgs[this.index].style.display='block';
// 		bannerColor[0].style.background=colorHand[this.index];
// 	};
// 	bannerMenu[i].onmouseout=function(){
// 		el=this.index;
// 		hiddenBannerMenu[el].style.display='none';
// 		hiddenimg[el].style.display='block';
// 		hiddenimgs[el].style.display='block';
// 		bannerColor[0].style.background=colorHand[el];
// 	};
// }
// //------------------------------轮播--------------------------------
// var bannerMainChang=document.getElementById('banner-main-chang');
// var indexx=1,timer,timespec=2000;
// var color=['#c89eff','#f7f6f4','#65C8A9','#E5E5E5','#B90AF9','#6F90FF'];
// var fnn=function(){
// 	bannerMainChang.style.marginLeft=indexx*(-810)+'px';
// 	bannerColor[0].style.background=color[indexx];
// 	indexx += 1;
// 	if(indexx==6){
// 		indexx=0;
// 	}
// };
// timer=setInterval(fnn,timespec);
// // for(var i=0;i<6;i++){
// // 	bannerMainChang.ss=i;
// // 	bannerMainChang.onclick=function(){
// // 		clearInterval(timer);
// // 		bannerMainChang.style.marginLeft=[this.ss]*(-810)+'px';
// // 		bannerColor[0].style.background=color[this.ss];

// // 	}
// // }

// // 闭包:函数在定义时会记录下自己可见的变量
//----------------------------------------------------------------
$('.sn-item').hover(function(){
		$(this).children('.menu-bd').show()
	},function(){
		$(this).children('.menu-bd').hide();
	}
)
//----------------------------------------------------------------
var count=0;
var lunbo=function(){
	
	$('#banner-main-chang').css({marginLeft:count*(-810)});
	$('.banner-color').css({background:color[count]});
	$($('.dian')[count]).addClass('backg');
	$($('.dian')[count-1]).removeClass('backg');
	count+=1;
	if(count>=$('.dian').length){
		count=0;
	}
	if(count==1){
		$($('.dian')[5]).removeClass('backg');
	}
	// console.log(count);
}
var timerId=setInterval(lunbo,1000);
//----------------------------------------------------------
$('.dian').hover(function(){
	clearInterval(timerId);
	var diandian=$('.dian').index(this);
	$('.dian').removeClass('backg');
	$(this).addClass('backg');
	$('#banner-main-chang').css({marginLeft:diandian*(-810)});
	$('.banner-color').css({background:color[diandian]});
	count=diandian;
	},function(){
		clearInterval(timerId);
		timerId=setInterval(lunbo,1000);
	}
)
//-------------------------------------------------------------
var color=['#c89eff','#f7f6f4','#65C8A9','#E5E5E5','#B90AF9','#6F90FF'];
$('.dian').click(function(){
	var ii=$('.dian').index(this);
	$('#banner-main-chang').css({marginLeft:ii*(-810)});
	$('.banner-color').css({background:color[ii]});
})
//----------------------------------------------------------------------------
var colorHand=['#c89eff','#ffd34c','#f2f7fd','#355272','#D82D62','#FAA912','#9CEEE0','#EBE8E3',
				'#DE0609','#FFE74F','#FFC5D4','#29A6FF','#E4E2E3','#FFE1E1','#30C4FF','#D8E9C7'];
$('.banner-menus').hover(function(){
		var j = $('.banner-menus').index(this);
		if(j!=0){
			clearInterval(timerId);
			$('.hiddenimg').hide();
			$('.hiddenimgs').hide();
			$( $('.hiddenimg')[j]).show();
			$( $('.hiddenimgs')[j]).show();
			$('.banner-color').css({background:colorHand[j]});
			$(this).children('.hidden-banner-menu').show();
		}else{
			$('.banner-color').css({background:color[count-1]});
			if(count==0){
				$('.banner-color').css({background:color[5]});
			}
			
			clearInterval(timerId);
			$('.hiddenimg').hide();
			$('.hiddenimgs').hide();
			$( $('.hiddenimg')[j]).show();
			$( $('.hiddenimgs')[j]).show();
			$(this).children('.hidden-banner-menu').show();
			timerId=setInterval(lunbo,1000);
		}
	},function(){
		j = $('.banner-menus').index(this);
		if(j!=0){
			clearInterval(timerId);
			$('.hiddenimg').hide();
			$( $('.hiddenimg')[j]).show();
			$('.hiddenimgs').hide();
			$( $('.hiddenimgs')[j]).show();
			$('.banner-color').css({background:colorHand[j]});
			$(this).children('.hidden-banner-menu').hide();
		}else{
			// console.log(count);
			clearInterval(timerId);
			$('.hiddenimg').hide();
			$( $('.hiddenimg')[j]).show();
			$('.hiddenimgs').hide();
			$( $('.hiddenimgs')[j]).show();
			$('.banner-color').css({background:color[count-1]});
			$(this).children('.hidden-banner-menu').hide();
			timerId=setInterval(lunbo,1000);
		}
	}
)

//----------------------------------------------------------------------------------
$('.grid-col-199-img').hover(function(){
		$(this).animate( {left:'2px'},'fast' )
	},function(){
		$(this).animate( {left:'0'},'fast' )
	}
)
$('.grid-col-166-img').hover(function(){
		$(this).animate( {left:'2px'},'fast' )
	},function(){
		$(this).animate( {left:'0'},'fast' )
	}
)
//------------------------------------------------
// $('.brand-slid-c-right').click(function(){
// 	var i=$('.brand-slid-c-right').index(this);
// 	var ns=Number( $($('.brand-slide-content-chang')[i]).position().left );
// 	console.log(ns);
// 	ns=ns-100;
// 	if(ns==-300){ ns=0;}
// 	$($('.brand-slide-content-chang')[i]).animate({left:ns});
// })
// $('.brand-slid-c-left').click(function(){
// 	i=$('.brand-slid-c-left').index(this);
// 	ns=Number( $($('.brand-slide-content-chang')[i]).position().left );
// 	ns=ns+100;
// 	if(ns==100){ ns=-200;}
// 	$($('.brand-slide-content-chang')[i]).animate({left:ns});
// })
//---------------------------------------------
$($('.brand-slid-c-right')[0]).click(function(){
	clearInterval(timer_0);
	ns0=Number( $($('.brand-slide-content-chang')[0]).position().left );
	ns0=ns0-100;
	if(ns0==-300){ ns0=0;}
	$($('.brand-slide-content-chang')[0]).animate({left:ns0});
})
$($('.brand-slid-c-left')[0]).click(function(){
	clearInterval(timer_0);
	ns0=Number( $($('.brand-slide-content-chang')[0]).position().left );
	ns0=ns0+100;
	if(ns0==100){ ns0=-200;}
	$($('.brand-slide-content-chang')[0]).animate({left:ns0});
})
//------------------
$($('.brand-slid-c-right')[1]).click(function(){
	clearInterval(timer_1);
	ns1=Number( $($('.brand-slide-content-chang')[1]).position().left );
	ns1=ns1-100;
	if(ns1==-300){ ns1=0;}
	$($('.brand-slide-content-chang')[1]).animate({left:ns1});
})
$($('.brand-slid-c-left')[1]).click(function(){
	clearInterval(timer_1);
	ns1=Number( $($('.brand-slide-content-chang')[1]).position().left );
	ns1=ns1+100;
	if(ns1==100){ ns1=-200;}
	$($('.brand-slide-content-chang')[1]).animate({left:ns1});
})
//------------------
$($('.brand-slid-c-right')[2]).click(function(){
	clearInterval(timer_2);
	ns2=Number( $($('.brand-slide-content-chang')[2]).position().left );
	ns2=ns2-100;
	if(ns2==-300){ ns2=0;}
	$($('.brand-slide-content-chang')[2]).animate({left:ns2});
})
$($('.brand-slid-c-left')[2]).click(function(){
	clearInterval(timer_2);
	ns2=Number( $($('.brand-slide-content-chang')[2]).position().left );
	ns2=ns2+100;
	if(ns2==100){ ns2=-200;}
	$($('.brand-slide-content-chang')[2]).animate({left:ns2});
})
//------------------
$($('.brand-slid-c-right')[3]).click(function(){
	clearInterval(timer_3);
	ns3=Number( $($('.brand-slide-content-chang')[3]).position().left );
	ns3=ns3-100;
	if(ns3==-300){ ns3=0;}
	$($('.brand-slide-content-chang')[3]).animate({left:ns3});
})
$($('.brand-slid-c-left')[3]).click(function(){
	clearInterval(timer_3);
	ns3=Number( $($('.brand-slide-content-chang')[3]).position().left );
	ns3=ns3+100;
	if(ns3==100){ ns3=-200;}
	$($('.brand-slide-content-chang')[3]).animate({left:ns3});
})
//------------------
$($('.brand-slid-c-right')[4]).click(function(){
	clearInterval(timer_4);
	ns4=Number( $($('.brand-slide-content-chang')[4]).position().left );
	ns4=ns4-100;
	if(ns4==-300){ ns4=0;}
	$($('.brand-slide-content-chang')[4]).animate({left:ns4});
})
$($('.brand-slid-c-left')[4]).click(function(){
	clearInterval(timer_4);
	ns4=Number( $($('.brand-slide-content-chang')[4]).position().left );
	ns4=ns4+100;
	if(ns4==100){ ns4=-200;}
	$($('.brand-slide-content-chang')[4]).animate({left:ns4});
})
//------------------
$($('.brand-slid-c-right')[5]).click(function(){
	clearInterval(timer_5);
	ns5=Number( $($('.brand-slide-content-chang')[5]).position().left );
	ns5=ns5-100;
	if(ns5==-300){ ns5=0;}
	$($('.brand-slide-content-chang')[5]).animate({left:ns5});
})
$($('.brand-slid-c-left')[5]).click(function(){
	clearInterval(timer_5);
	ns5=Number( $($('.brand-slide-content-chang')[5]).position().left );
	ns5=ns5+100;
	if(ns5==100){ ns5=-200;}
	$($('.brand-slide-content-chang')[5]).animate({left:ns5});
})
//----------------------------------------------------------------

var count0=0,count1=0,count2=0,count3=0,count4=0,count5=0;
var xiaolunbo0=function(){
	$($('.brand-slide-content-chang')[0]).animate({left:count0*(-100)});
	count0+=1;
	if(count0>=3){		count0=0;	}
}
var xiaolunbo1=function(){
	$($('.brand-slide-content-chang')[1]).animate({left:count1*(-100)});
	count1+=1;
	if(count1>=3){		count1=0;	}
}
var xiaolunbo2=function(){
	$($('.brand-slide-content-chang')[2]).animate({left:count2*(-100)});
	count2+=1;
	if(count2>=3){		count2=0;	}
}
var xiaolunbo3=function(){
	$($('.brand-slide-content-chang')[3]).animate({left:count3*(-100)});
	count3+=1;
	if(count3>=3){		count3=0;	}
}
var xiaolunbo4=function(){
	$($('.brand-slide-content-chang')[4]).animate({left:count4*(-100)});
	count4+=1;
	if(count4>=3){		count4=0;	}
}
var xiaolunbo5=function(){
	$($('.brand-slide-content-chang')[5]).animate({left:count5*(-100)});
	count5+=1;
	if(count5>=3){		count5=0;	}
}
var timer_0=setInterval(xiaolunbo0,1000);
var timer_1=setInterval(xiaolunbo1,1000);
var timer_2=setInterval(xiaolunbo2,1000);
var timer_3=setInterval(xiaolunbo3,1000);
var timer_4=setInterval(xiaolunbo4,1000);
var timer_5=setInterval(xiaolunbo5,1000);
//-----------------------------------------------------
$('.brand-rec-content-i').hover(function(){
		$(this).animate( {left:'2px'},'fast' )
	},function(){
		$(this).animate( {left:'0'},'fast' )
	}
)
//-----------------------------------------------------
$('.brand-slide-content-item a').hover(function(){
		$(this).animate( {left:'2px'},'fast' )
	},function(){
		$(this).animate( {left:'0'},'fast' )
	}
)
//-----------------------------------------------
// $('.sn-nav-wrapper-item').each(function(i){
//     $(this).data('index',i);
//   });

$('.sn-nav-wrapper-item').click(function(){
	// var i = $(this).data('index');
	var i=$('.sn-nav-wrapper-item').index(this);
    var newtop = $( $('.fp-floor')[i] ).offset().top - 50;
    $({top: $('body').scrollTop()}).animate(
      {top: newtop},
      {
        duration: 700,
	step: function() {
	  $('body').scrollTop(this.top);
	}
      }
    );
})
//-------------------------------------------------------
$('.right-nav-top').click(function(){
	$({top: $(window).scrollTop()}).animate(
      {top: 0},
      {
        duration: 700,
	step: function() {
	  $(window).scrollTop(this.top);
	}
      }
    );
});
//--------------------------------------------------
var ti;
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      clearTimeout(ti);
      ti = setTimeout(function(){
	$('.tmall-nav').show();
      },1000);
    }else{
      clearTimeout(ti);
      $('.tmall-nav').hide();
    };
  });
 //-------------------------------------------------
 $(window).scroll(function(){
 	if($(window).scrollTop()>800 && $(window).scrollTop()<6750){
 		$('.fp-list').show();
 	}else{
 		$('.fp-list').hide();
 	}
 })
//----------------------------------------------------
$('.brand-rec-nav li').click(function(){
	var li=$('.brand-rec-nav li').index(this);
	$('.brand-rec-nav li').removeClass('selected');
	$(this).addClass('selected');
	$('.brand-rec-content-item').removeClass('show');
	$($('.brand-rec-content-item')[li]).addClass('show');
	$('.brand-rec-content-chang').css({marginLeft:li*(-810)});
})
//----------------------------

$('#exchange').click(function(){
	var arr=[],dict={};
	$('.show a').each(function(i){
		var t=$( $('.show a').find('img')[i]).attr('src');
    	arr.push(t);
  	});
	$('.show a').each(function(i){
		var yy=Math.floor(Math.random()*24);
		while(dict[yy]){
			yy=Math.floor(Math.random()*24);
		}
		dict[yy]=true;
		$( $('.show a').find('img')[i]).attr({'src':arr[yy]})
  	});

})
//------------------------------------------------------
$('.right-nav-menu').hover(function(){
		$(this).children('.right-nav-hidden').show();
	},function(){
		$(this).children('.right-nav-hidden').hide();
	}
)
//-----------------------------------------------------
$('.right-nav-erweima').hover(function(){
	console.log($(this));
		$(this).css({marginLeft:-70});
	},function(){
		$(this).css({marginLeft:0});
	}
)
//-------------------------------------------------------
$('.right-nav-car').hover(function(){
		$(this).children('i').css({color:"#fff"});
	},function(){
		$(this).children('i').css({color:"#c40000"});
	}
)
//----------------------------------------------------------
var arra=[];
$(window).scroll(function(){
	var top=$(window).scrollTop();
	$('.fp-floor').each(function(i){
		var height=$($('.fp-floor')[i]).offset().top;
		arra.push(height);
		if(top>=arra[i]-150&&top<=arra[i]+250){
			console.log($('.sn-nav-wrapper-item'));
			$('.sn-nav-wrapper-item').removeClass('liang');
			$($('.sn-nav-wrapper-item')[i]).addClass('liang');
		}
	})
})
	
	
//---------------------------------------------------------------









	
};