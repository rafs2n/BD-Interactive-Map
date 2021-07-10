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
                    $('#info').load('info.html #panchagarh')     //loading data from info.html
                    break;
                case "bandarban":
                    $('#card-header').html('<h4>Bandarban | বান্দরবান</h4>')
                    $('#info').load('info.html #bandarban')
                    break;
                case "comilla":
                    $('#card-header').html('<h4>Comilla | কুমিল্লা</h4>')
                    $('#info').load('info.html #comilla')
                    break;
                case "sylhet":
                    $('#card-header').html('<h4>Sylhet | সিলেট</h4>')
                    $('#info').load('info.html #sylhet')
                    break;
                case "dhaka":
                    $('#card-header').html('<h4>Dhaka | ঢাকা</h4>')
                    $('#info').load('info.html #dhaka')
            }
        });
    });


})