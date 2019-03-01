//assuming you have jQuery. This gives the same result that the function above

$(document).ready(function(){
    $('button').click(function(){
        // $.get("https://apu.github.com/users/"+user_name+"", display_name);
        $.get("https://api.github.com/users/koandamb01/", function (data){ 
            $('p').html(data.name);
            // console.log(data);
        });

    })
});    