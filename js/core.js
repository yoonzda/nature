

$(document).ready(function(){
    pageFunction();
});

function pageFunction(){
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});
    
    var $html = $("html");
     
    var page = 1;

    var tab01 = $('nav ul li');
    var tab02 = $('aside ul li');
     
    $html.animate({scrollTop:0},10);

    $(tab01).click(function(){
        page = $(this).index()+1;

        $(tab01).removeClass('active');
        $(this).addClass('active');

        $(tab02).removeClass('active');
        $(tab02[page-1]).addClass('active');
    });
    
    $(window).on("wheel", function(e){
     
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page == 5){
                return;
            }else{
                page++;
            }
     
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1){
                return;
            }else{
                page--;
            }
        }
        var posTop = (page-1) * $(window).height();
     
        $html.animate({scrollTop : posTop});

        $(tab01).removeClass('active');
        $(tab01[page-1]).addClass('active');

        $(tab02).removeClass('active');
        $(tab02[page-1]).addClass('active');
    });
}