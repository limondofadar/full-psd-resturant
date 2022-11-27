
 
 $(window).on('scroll',function(){
    
    if($(window).scrollTop()){
        $('.navbar').addClass('add_class');
    }
    else{


        $('.navbar').removeClass('add_class');
    }
})