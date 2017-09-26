/**
 * Created by chunchun on 2017/6/6.
 */
 window.onload=function(){
 	//广告
 	let imgb=document.querySelector('.img');
 	let imgs=document.querySelector('.imgs');
 	let closeb=document.querySelector('.img .closeb');
 	let closes=document.querySelector('.imgs .closes');
 	let t=setInterval(move,2000);

 	function move(){
 		imgb.style.display='none';
 		imgs.style.display='block';
 	}
 	closeb.onclick=function () {
 	    clearInterval(t);
        imgb.style.display='none';
        imgs.style.display='block';
    }
     closes.onclick=function () {
         clearInterval(t);
         imgs.style.display='none';
     }

 	// 城市
 	let span=document.querySelector('.top .top_left>a>span');
 	let city=document.querySelector('.top .top_left .city');
 	let citya=document.querySelector('.top .top_left .city span a');
 	let cityall=document.querySelector('.top .top_left .cityAll');

     citya.onclick=function () {
         cityall.style.display='block';
     }
	// console.log(span,city);
 	span.onclick=function(){
 		city.style.display='block';
 	}
 	document.ondblclick=function(){
 		cityall.style.display='none';
        city.style.display='none';
 	}

 	// 首页
 	let lis=document.querySelectorAll('.banner .banner_top .yidong');
 	let uls=document.querySelectorAll('.banner .banner_top>li .con_bot ');
 	let a=document.querySelectorAll('.banner .banner_top .yidong>a');
 	let content=document.querySelector('.banner .banner_top');

 	for(let i=0;i<lis.length;i++){
 		lis[i].onmouseenter=function(){
 			uls[i].style.display='block';
 			lis[i].style.background='#F3F3F3';
 			a[i].style.color='#31ADFC';
 		}
 		lis[i].onmouseleave=function(){
            uls[i].style.display='none';
 			lis[i].style.background='#E4E4E4';
 			a[i].style.color='#888888';
 		}
 		// content.onmouseleave=function(){
 		// 	uls[i].style.display='none';
 		// }
 	}

 	//banner
	 let b_img=document.querySelector('.banner .banner_bot .bot_cen');
	 let b_lis=document.querySelectorAll('.banner .banner_bot .bot_cen .img li');
	 let b_point=document.querySelectorAll('.banner .banner_bot .bot_cen .point li');
	 let bc_left=document.querySelector('.banner .banner_bot .bot_cen .bc_left');
     let bc_right=document.querySelector('.banner .banner_bot .bot_cen .bc_right');
	 let b_width=b_lis[0].offsetWidth;
     let bnow=0,bnext=0,bcurrent=0;
	 let b_time=setInterval(bMoveR,2000);

     b_img.onmouseenter=function () {
         clearInterval(b_time);
     }
     b_img.onmouseleave=function () {
         b_time=setInterval(bMoveR,2000);
     }
     //点击右侧
     bc_right.onclick=function () {
         bMoveR();
     }
     //点击左侧
     bc_left.onclick=function () {
         bMoveL();
     }
	 //左移
	 function bMoveR() {
         bnext=bnow+1;
         if(bnext>=b_lis.length){
             bnext=0;
         }
		 b_lis[bnext].style.left=b_width+'px';
         b_point[bnext].className='hot';
         b_point[bnow].className='';
		 animate(b_lis[bnow],{left:-b_width});
         animate(b_lis[bnext],{left:0});
         bnow=bnext;
     }
     //右移
     function bMoveL() {
         bnext=bnow-1;
         if(bnext<0){
             bnext=b_lis.length-1;
         }
         b_lis[bnext].style.left=-b_width+'px';
         b_point[bnext].className='hot';
         b_point[bnow].className='';
         animate(b_lis[bnow],{left:b_width});
         animate(b_lis[bnext],{left:0});
         bnow=bnext;
     }

     //点击圆点
	 b_point.forEach(function (value,index) {
		 value.onclick=function () {
             if(bnow==index) {
                 return ;
             }
			 //右移
			 if (index < bnow) {
				 b_lis[index].style.left = -b_width + 'px';
				 b_point[index].className = 'hot';
				 b_point[bnow].className = '';
				 animate(b_lis[bnow], {left: b_width});
				 animate(b_lis[index], {left: 0});
				 bnow = bnext = index;
			 }
			 //左移
			 if (index >bnow) {
				 b_lis[index].style.left = b_width + 'px';
				 b_point[index].className = 'hot';
				 b_point[bnow].className = '';
				 animate(b_lis[bnow], {left: -b_width});
				 animate(b_lis[index], {left: 0});
				 bnow = bnext = index;
			 }
		 }
     })

	 // banner右侧
	 let brs=document.querySelectorAll('.banner .banner_bot .bot_right .br_bot>ul>li');
     let brcur=1;
     let bflag=0;
     for(let i=0;i<brs.length;i++){
     	brs[i].onclick=function () {
     		bflag=1;
     		if(brcur==i){
     			return ;
			}
			if(brcur!=i){
                brs[i].className='pink';
                brs[brcur].className='';
                brcur=i;
			}
        }
        brs[i].onmouseenter=function () {
			brs[i].className='pink';
        }
         brs[i].onmouseleave=function () {
			 brs[i].className='';
			 if(bflag=1){
                 brs[brcur].className='pink';
			 }
         }
	 }

	 //右侧
	 let icon=document.querySelectorAll('.banner .banner_bot .bot_right .br_top .iconfont');
	 for(let i=0;i<icon.length;i++){
	 	icon[i].onmouseenter=function(){
	 		icon[i].style.fontSize=`30px`;
		}
         icon[i].onmouseleave=function(){
             icon[i].style.fontSize=`26px`;
         }
	 }

	 // banner底部
	 let bbul=document.querySelector('.bannerb .uls ul');
	 let bblis=bbul.querySelectorAll('li');
	 let bbwidth=parseInt(getComputedStyle(bblis[0],null).width);
	 let bbleft=document.querySelector('.bannerb .bb_left');
     let bbright=document.querySelector('.bannerb .bb_right');
     let bbtime=setInterval(bbMoveL,2000);

     // console.log(2*bbwidth);

	 bbleft.onclick=function () {
		 clearInterval(bbtime);
		 bbtime=setInterval(bbMoveR,2000);
	 }
     bbright.onclick=function () {
		 clearInterval(bbtime);
		 bbtime=setInterval(bbMoveL,2000);
     }
     function bbMoveL() {
         animate(bbul,{left:-bbwidth},function () {
             let first=getFirst(bbul);
             bbul.appendChild(first);
             bbul.style.left=0;
         });
     }
     function bbMoveR() {
         let last=getLast(bbul);
         let first=getFirst(bbul);
         bbul.insertBefore(last,first);
         bbul.style.left=-bbwidth+'px';
         animate(bbul,{left:0});
     }

     //公告
	 let ggao_left=document.querySelector('.ggao .ggao_right .left');
     let ggao_right=document.querySelector('.ggao .ggao_right .right');
     let ggao_li=document.querySelectorAll('.ggao .ggao_cen .ggao_ul ul li');
     let ggao_ul=document.querySelector('.ggao .ggao_cen .ggao_ul ul');
     let ggao_width=ggao_li[0].offsetWidth;
     let gg_now=0,gg_next1=1,gg_next2=1;
     let tss=setInterval(ggaoR,2000)
     ggao_left.onclick=function () {
     	 ggaoL();
     }
     ggao_right.onclick=function () {
         ggaoR();
     }
     // ggao_left.onmouseenter=function () {
     //     clearInterval(tss);
     // }
     // ggao_right.onmouseenter=function () {
     //     clearInterval(tss);
     // }
     // ggao_left.onmouseleave=function () {
     //     setInterval(ggaoR,2000)
     // }
     // ggao_right.onmouseleave=function () {
     //     setInterval(ggaoR,2000)
     // }

     //点击左面
     function ggaoL(){
         gg_next2=gg_now-1;

         if(gg_next2<0){
             gg_next2=ggao_li.length-1;
         }
         ggao_li[gg_now].style.left=ggao_width+'px';
         ggao_li[gg_next1].style.left=ggao_width*2+'px';
         ggao_li[gg_next2].style.left=1+'px';
         gg_next1=gg_now;
         gg_now=gg_next2;

     }
     //点击右面
     function ggaoR(){
         gg_next2=gg_next1+1;
         if(gg_next2>=ggao_li.length){
             gg_next2=0;
         }
         ggao_li[gg_now].style.left=-ggao_width+'px';;
         ggao_li[gg_next1].style.left=1+'px';
         ggao_li[gg_next2].style.left=ggao_width+'px';
         gg_now=gg_next1;
         gg_next1=gg_next2;
     }

 }
