$(function(){

    //回到顶部
    blk();
    function blk(){
        var het = window.scrollY;
        if(het>=600){
            $('#toTop').css('display','block');
        }else{
            $('#toTop').css('display','none');
        }
    }
    window.onscroll=function(){
        blk();
    }
    $('#toTop').click(function(){
        var scrY = window.scrollY;
        clearInterval(timer);
        var timer = setInterval(function(){
            scrY -= 32;
            if(scrY<0){
                clearInterval(timer);
            }else{
                window.scrollTo(0,scrY);
            }
        });
    });

    // 广告
    const adContainer = document.getElementById('ad');
    const content = document.getElementById('home');

    // 初始位置
    let posX = 0;
    let posY = 400;
    // 移动速度
    let speedX = 1;
    let speedY = 1;
    // 动画状态
    let isMoving = true;
    let animationId;
    
    // 更新广告位置
    function updatePosition() {
        console.log('updatePosition');
        if (!isMoving) return;
        
        // 更新位置
        posX += speedX;
        posY += speedY;
        
        // 获取内容区域尺寸
        const contentRect = content.getBoundingClientRect();
        const adRect = adContainer.getBoundingClientRect();
        // 检查广告的右边缘是否超出内容区域的右边界
        // 或广告的下边缘是否超出内容区域的下边界
        const isOutRight = (posX + adRect.width) > contentRect.width;
        const isOutBottom = (posY + adRect.height + 200) > contentRect.height;
        
        // 检查是否超出边界
        if (isOutRight || isOutBottom) {
            // 超出边界，重置位置
            posX = 0;
            posY = 400;
        }
        
        // 应用新位置
        adContainer.style.left = posX + 'px';
        adContainer.style.top = posY + 'px';
        
        // 继续动画
        animationId = requestAnimationFrame(updatePosition);
    }
    // 鼠标悬停事件
    adContainer.addEventListener('mouseenter', function() {
        console.log('鼠标进来了');
        
        isMoving = false;
    });
    // 鼠标离开事件
    adContainer.addEventListener('mouseleave', function() {
        console.log('鼠标出去了');
        isMoving = true;
        animationId = requestAnimationFrame(updatePosition);
    });
    // 初始化-开始动画
    animationId = requestAnimationFrame(updatePosition);
    // 点击关闭按钮
    $('#ad').find('.close').click(function(){
        cancelAnimationFrame(animationId);
        animationId = null;
        $('#ad').css('display','none');
    });

    // 轮播图
    var timer=null;
    clearInterval(timer);
    var now=0;

    timer=setInterval(next,2000);
    function next(){
        //旧的隐藏
        $('#imglist li').eq(now).css({
            'display':'none',
            'opacity':0
        });
        now= ++now >= $('#imglist li').size() ? 0 : now;
        //新的显示出来
        $('#imglist li').eq(now).css('display','block');
        $('#imglist li').eq(now).animate({'opacity':1},800);
    }



});