$(function(){

    // 导航栏nav下拉菜单
    $('nav').find('li').hover(function(){
        $(this).find('.classify').css('display','block');
        $(this).find('.classify').animate({
            'opacity':1
        },500);
    },function(){
        $(this).find('.classify').css('display','none');
        $(this).find('.classify').animate({
            'opacity':0
        },500);
    });

});