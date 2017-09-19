/*
* @Author: dulovely
* @Date:   2017-09-18 17:36:19
* @Last Modified by:   dulovely
* @Last Modified time: 2017-09-20 00:51:09
*/
window.onload=function(){
    let main=document.getElementsByTagName('main')[0];
	let aside=document.getElementsByClassName('aside')[0];
	let lis=aside.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
    let imgBox=document.getElementsByClassName('.imgBox')[0];
    let bannerBtn=document.getElementsByClassName('bannerBtn')[0];
    let btns=bannerBtn.getElementsByTagName('li');
    let imgs=document.getElementsByClassName('imgs');

    let lefts=document.getElementsByClassName('left')[0];
    let rights=document.getElementsByClassName('right')[0];

    let num=0;
    let t;





    //////////////////////////////////////////////
    
    t=setInterval(move,600);

    
    //////////////////////////////////////////////
    // 鼠标移入移出轮播图停留或滚动
    main.onmouseover=function(){
        clearInterval(t);
    }
    main.onmouseout=function(){
        t=setInterval(move,600);       
    }

    
    //////////////////////////////////////////////
    // 侧导航鼠标移入移出，ul细节框显示或消失
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}  

    ///////////////////////////////////////////////
   //轮播图按钮点击换图
    for(let i=0;i<btns.length;i++){
    	btns[i].onclick=function(){
    		for(let j=0;j<imgs.length;j++){
    			imgs[j].style.display='none';
                btns[j].style.background='#0085d0';
    		}
            btns[i].style.background='#ff6700';
    		imgs[i].style.display='block';
            num=i;
    	}
        	
    } 
    /////////////////////////////////////////////////
    //左右箭头效果
   
          lefts.onclick=function(){
              move();
          }
          rights.onclick=function(){
               num--;
               if(num == 0){
                   num=imgs.length-1;
               }
               for(let i=0;i<imgs.length;i++){
                   imgs[i].style.display='none';
                   btns[i].style.background='#0085d0';
               }
               btns[num].style.background='#0085d0';
               imgs[num].style.display='block';
          }
   
   
    // //////////////////////////////////////////////
    //自动轮播效果
    function move(){
        num++;
        if(num == imgs.length){
            num=0;
        }
        for(let i=0;i<imgs.length;i++){
                imgs[i].style.display='none';
                btns[i].style.background='#0085d0';
        }
        btns[num].style.background='#0085d0';
        imgs[num].style.display='block';

    }






}