
/*Video content Toggle*/
    $( document ).ready(function() {
        $('.content-more').hide();
        $('#content-more').click(function(){
            $('.content-more').toggle('slow');
            $('#content-more').toggleClass('more-toggle');
        })
    })
/*-----------------------*/