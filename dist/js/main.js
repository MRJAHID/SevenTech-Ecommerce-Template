// Mobile menu show hide
$('.btn_container').click(function () {
    $('.over_lay').css({
        width: '100%',
    });
    $('.list_items_container').css({
        left: '0px',
    });
});
$('.over_lay, .close_btn').click(function () {
    $('.over_lay').css({
        width: '0px',
    });
    $('.list_items_container').css({
        left: '-300px',
    });
});

// Menu toggle
$('.sub-menu ul').hide();
$('.sub-menu a').click(function () {
    $(this).parent('.sub-menu').children('ul').slideToggle('100');
    $(this).find('.right').toggleClass('fa-caret-up fa-caret-down');
});
