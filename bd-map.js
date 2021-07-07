$(document).ready(function () {
    $('#mySVG').load("bd-map.html", function () {

        $("#bd-map").click(function (evt) {
            $("#bd-map").find('path').removeClass('active');
            let targ = evt.target.tagName == 'path' ? evt.target : evt.target.closest('path');
            $(targ).addClass('active')

            switch (targ.id){
            // switch (evt.target.id) {
                case "panchagarh":
                    $('#info').load('info.html #panchagarh')     //loading data from info.html
                    break;
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