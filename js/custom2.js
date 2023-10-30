$("#banner").owlCarousel({
    loop:true, // cho lap lại
    items:1, // xuất hiện 1 ảnh thôi
    smartSpeed:180, // tốc độ thay đổi ảnh
    autoplay:true, // cho phép tự động chạy
    autoplayTimeout:3200, // thời gian chờ khi chuyển ảnh khi chạy tự động
    nav: false, // cho xuất hiện bộ nút tới lui
    margin:0,
    dots:false,
    rtl:true,
    autoHeight:true

    });

    $("#banner2").owlCarousel({
        loop:true, // cho lap lại
        items:1, // xuất hiện 1 ảnh thôi
        smartSpeed:180, // tốc độ thay đổi ảnh
        autoplay:true, // cho phép tự động chạy
        autoplayTimeout:3200, // thời gian chờ khi chuyển ảnh khi chạy tự động
        nav: false, // cho xuất hiện bộ nút tới lui
        margin:0,
        dots:false,
        rtl:true,
        autoHeight:true,
       
        })
    
        $(window).scroll(function(){
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
            });

$("#text-slide").owlCarousel({
        loop:true, // cho lap lại
        items:1, // xuất hiện 1 ảnh thôi
        smartSpeed:180, // tốc độ thay đổi ảnh
        autoplay:true, // cho phép tự động chạy
        autoplayTimeout:3200, // thời gian chờ khi chuyển ảnh khi chạy tự động
        nav: false, // cho xuất hiện bộ nút tới lui
        margin:0,
        dots:false,
        
       
        })