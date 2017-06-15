$(function() {
    $('.card--hover > div ').hover(
        function() {
            $(this).find('> img.activator').toggle();
        }, function() {
            $(this).find('> img.activator').toggle();
        }
    );
});
