$(function(){
    $('#title')
        .on('mouseover', function() {
            $('#title').animate({
                color: '#ebc000'
            },
            300
            );
        })
        .on('mouseout', function(){
            $('#title').animate({
                color: '#fff'
            },
            300
            );
        });
});