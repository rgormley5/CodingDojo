$(document).ready(function(){
        $('form').submit(function(){
            var location = $('#field').val();
            console.log("location is: ", location);

            $.get("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&&appid=21ee5bd131c030d449ee65aed35f0a85", function(res) {
                console.log("This is temp (k): ", res.main.temp);
                // console.log("This is conversion (k to f): ", res.main.temp.unit('fahrenheit'));

                var html_str = "";
                html_str += "<h1>" + location + "</h1>";
                html_str += "<h3>Temperature: " + res.main.temp + "</h3>"; 

                $('.page').html(html_str);


                // $('.page').html("<h1>locations</h1>");
                // $('.page').html("<h3>Temperature: " + res.main.temp + "</h3>");                

                

            }, 'json');
            return false;

        }); // end .submit
}); // end doc.ready