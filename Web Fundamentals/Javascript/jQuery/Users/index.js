// $(document).ready(function(){

//     console.log("jQuery is on");

// });


$(document).ready(function(){
    $(document).on('click', '#submit', function(){
        var firstName = $('#first_name_input').val();
        // console.log("fist name is: ", firstName);
        $('#first_name_th').append('<tr><td>' + firstName + '</tr></td>');
        return false;
    });

});

// $('form').submit(function(){
//     var firstName = $('#first_name_input').val();
//     console.log("fist name is: ", firstName);
//     $('#first_name_th').append("<tr><th>" + firstName + "</tr></th>");
//     return false;