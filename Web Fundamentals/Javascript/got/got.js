$(document).ready(function(){
    $(document).on('click', 'img', function(){

        var img_id = $(this).attr('id');
        console.log("img_id is: ", img_id);

        $.get("https://www.anapioficeandfire.com/api/houses/" + img_id, function(res){
            console.log("name is: ", res.name);
            var html_str = "";
            html_str += "<h3>Name: " + res.name + "</h3>";
            $('.name').html(html_str);
            // var name = res.name;
        }, 'json'); // End .get

        $.get("https://www.anapioficeandfire.com/api/houses/" + img_id, function(res){
            console.log("words is: ", res.words);
            // var words = res.words;
            var html_str = "";
            html_str += "<h3 class='words'>Words: " + res.words + "</h3>";
            $('.words').html(html_str);
        }, 'json'); // End .get

        $.get("https://www.anapioficeandfire.com/api/houses/" + img_id, function(res){
            console.log("title is: ", res.titles);
            var titles = "";
            for (var i = 0; i < res.titles; i++) {
                titles += res.titles[i];
            }
            var html_str = "";
            html_str += "<h3>Titles: " + res.titles + "</h3>";
            $('.titles').html(html_str);
        }, 'json'); // End .get

        // html_str += "<h3>Words: " + words + "</h3>";
        // html_str += "<h3>Titles: " + titles + "</h3>";

        // $('.details_container').html(html_str);

    }); // End doc.on


}); // End doc.ready