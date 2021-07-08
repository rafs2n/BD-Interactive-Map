$(document).ready(function () {
    $('#mySVG').load("bd-map.html", function () {

        $("#bd-map").click(function (evt) {         //when user click evt will return the id
            
            $("#bd-map").find('path').removeClass('active');
            let targ = evt.target.tagName === 'path' ? $(evt.target) : $(evt.target).parent().prev('path');
            console.log(targ.attr('id'))
            targ.addClass('active')
            switch (targ.attr('id')){

            // switch (evt.target.id) {
                case "panchagarh":
                    $('#info').load('info.html #panchagarh')     //loading data from info.html
                    break;
                case "bandarban":
                    $('#info').load('info.html #bandarban')
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