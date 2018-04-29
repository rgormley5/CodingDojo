$(document).ready(function(){
    for (var i = 1; i <= 20; i++) {
        $('.pic').append('<img id="' + i + '"' + 'src="https://pokeapi.co/media/img/' + i + '.png\">');
    }

    $('img').click(function(){
        var pokeid = $(this).attr('id');
        // console.log('pokeid is ', pokeid);
        $.get("https://pokeapi.co/api/v2/pokemon/" + pokeid + "/", function(res) {   
            // $('.pokedex').html('<h4>' + res.name + '</h4>');
            console.log(res);

        // html string
        var html_str = "";

        // get name 
        // console.log(res.name);
        html_str += "<h4>" + res.name + "</h4>";
        
        // get image - consider using .attr so that image swithes attr/src when clicked on
        // console.log(res.sprites.front_shiny);
        html_str += "<img src='" + res.sprites.front_shiny + "'>";

        // get Types
        // console.log(res.types[0].type.name);
        html_str += "<h4>Types</h4>";
        html_str += "<ul>";
        html_str += "<ol>" + res.types[0].type.name + "</ol>";
        html_str += "</ul>";

        // get Height
        console.log(res.height);
        html_str += "<h4>Height</h4>";
        html_str += "<ul>";
        html_str += "<ol>" + res.height + "</ol>";
        html_str += "</ul>";

        // get Weight
        console.log(res.weight);
        html_str += "<h4>Weight</h4>";
        html_str += "<ul>";
        html_str += "<ol>" + res.weight + "</ol>";
        html_str += "</ul>";

        // .html string to pokedex
        $('.pokedex').html(html_str);

        }, "json");
    });


    // $.get("'http://pokeapi.co/api/v2/pokemon/" + pokeid + "/'", function(res) {
    //     console.log(res.name);
    // }, "json"); // end of $.get

    // $.get("https://pokeapi.co/api/v2/pokemon/20/", function(res) {
    //     console.log(res.name);


    // }, "json"); // end of $.get
    

}); // end of document.ready