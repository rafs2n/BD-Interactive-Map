/*
*
* Title: Bangladesh | A Digital Interactive Map
* Description: This JS file contain all the js function to control the application.
* Author: Abdul Aziz (Github: rafs2n)
* Date: 05/07/2021
*
*/



$(document).ready(function () {
    $('#mySVG').load("bd-map.html", function () {

        $("#bd-map").click(function (evt) {         //when user click evt will return the id

            $("#bd-map").find('path').removeClass('active');
            let targ = evt.target.tagName === 'path' ? $(evt.target) : $(evt.target).parent().prev('path');
            console.log(targ.attr('id'))
            targ.addClass('active')
            switch (targ.attr('id')) {
                case "panchagarh":
                    $('#card-header').html('<h4>Pachagarh | পঞ্চগড়</h4>')
                    $('#info').load('db.html #panchagarh')     //loading data from db.html
                    $("#population").load("db.html #panchagarh-population")
                    $("#volume").load("db.html #panchagarh-volume")
                    break;

                case "bandarban":
                    $('#card-header').html('<h4>Bandarban | বান্দরবান</h4>')
                    $('#info').load('db.html #bandarban')
                    $("#population").load("db.html #bandarban-population")
                    $("#volume").load("db.html #bandarban-volume")
                    break;

                case "rangamati":
                    $('#card-header').html('<h4>Rangamati | রাঙ্গামাটি</h4>')
                    $('#info').load('db.html #rangamati')
                    $("#population").load("db.html #rangamati-population")
                    $("#volume").load("db.html #rangamati-volume")
                    break;

                case "khagrachari":
                    $('#card-header').html('<h4>Khagrachari | খাগড়াছড়ি</h4>')
                    $('#info').load('db.html #khagrachari')
                    $("#population").load("db.html #khagrachari-population")
                    $("#volume").load("db.html #khagrachari-volume")
                    break;

                case "comilla":
                    $('#card-header').html('<h4>Comilla | কুমিল্লা</h4>')
                    $('#info').load('db.html #comilla')
                    $("#population").load("db.html #comilla-population")
                    $("#volume").load("db.html #comilla-volume")
                    // $("#food").load("db.html #comilla-food")
                    // $("#tourist-place").load("db.html #comilla-tourist-place")
                    break;

                case "sylhet":
                    $('#card-header').html('<h4>Sylhet | সিলেট</h4>')
                    $('#info').load('db.html #sylhet')
                    $("#population").load("db.html #sylhet-population")
                    $("#volume").load("db.html #sylhet-volume")
                    // $("#food").load("db.html #sylhet-food")
                    // $("#tourist-place").load("db.html #sylhet-tourist-place")
                    break;
                case "dhaka":
                    $('#card-header').html('<h4>Dhaka | ঢাকা</h4>')
                    $('#info').load('db.html #dhaka')
                    $("#population").load("db.html #dhaka-population")
                    $("#volume").load("db.html #dhaka-volume")
                    break;

            }
        });
    });


})