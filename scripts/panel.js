jQuery(document).ready(function(){
    // OPEN/CLOSE
    var time_out = 300;
    var etheme_cp = jQuery('.etheme_cp');
    var btn_show = jQuery('.etheme_cp_btn_show');
    var btn_close = etheme_cp.find('.etheme_cp_head .etheme_cp_btn_close');
    function hide_cp(time){
        etheme_cp.animate({
            'left': '-450px' 
        },time, function() {
            btn_show.show().animate({
                'left':'0px'
            },time);
        }); 
   }    
    hide_cp(1);
    function show_cp(time){
        btn_show.animate({
            'left':'-60px'  
        },time, function() {
            etheme_cp.show().animate({
                'left':'0px'
            });
        });
    }
    
    btn_close.bind("click", function() {
        hide_cp(300);
    }); 
    
    btn_show.bind("click", function() {
        show_cp(300);
    });   
});//End ready