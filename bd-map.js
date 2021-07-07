$(document).ready(function () {
    $('#mySVG').load("bd-map.html", function () {


        $("#bd-map").click(function (evt) {
            switch (evt.target.id) {
                case "bandarban":
                    $('#info').load('info.html #bandarban')     //loading data from info.html
                    break;
                case "comilla":
                    $('#info').load('info.html #comilla')
                    break;
                case "sylhet":
                    $('#info').load('info.html #sylhet')
                    break;
            }
        });
    });

})