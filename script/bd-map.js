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
            // console.log(targ.attr('id'))
            let targetId = targ.attr('id');
            
            targ.addClass('active')
            switch (targ.attr('id')) {
                case "panchagarh":
                    $('#card-header').html('<h4>Pachagarh | পঞ্চগড়</h4>')
                    $('#info').load('db.html #panchagarh')     //loading data from db.html
                    $("#population").load("db.html #panchagarh-population")
                    $("#volume").load("db.html #panchagarh-volume")
                    $("#food").load("db.html #panchagarh-food")
                    $("#tourist-place").load("db.html #panchagarh-tourist-place")
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
                    $("#food").load("db.html #comilla-food")
                    $("#tourist-place").load("db.html #comilla-tourist-place")
                    break;

                case "sylhet":
                    $('#card-header').html('<h4>Sylhet | সিলেট</h4>')
                    $('#info').load('db.html #sylhet')
                    $("#population").load("db.html #sylhet-population")
                    $("#volume").load("db.html #sylhet-volume")
                    $("#food").load("db.html #sylhet-food")
                    $("#tourist-place").load("db.html #sylhet-tourist-place")
                    break;
                case "dhaka":
                    $('#card-header').html('<h4>Dhaka | ঢাকা</h4>')
                    $('#info').load('db.html #dhaka')
                    $("#population").load("db.html #dhaka-population")
                    $("#volume").load("db.html #dhaka-volume")
                    $("#food").load("db.html #dhaka-food")
                    $("#tourist-place").load("db.html #dhaka-tourist-place")
                    break;

            }

            // -------Weather Function-------


const display = document.getElementById('img-display');
const iconDisplay = document.getElementById('icon-display');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const warning = document.getElementById('warning');


            const img = document.createElement('img');
            display.innerText = null;
            iconDisplay.innerText = null;
            warning.innerText = null;
         fetch('https://api.openweathermap.org/data/2.5/weather?q=' + targetId + '&units=metric&appid=93d71f6bc1ab4092643bae17067ef4c9')
            .then(response => response.json())
            .then(data => {
            const city = data.name;
            const temperature = data.main.temp;
            const descrip = data.weather[0].main;
                const icon = data.weather[0].icon;
                img.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'
                iconDisplay.appendChild(img);
                cityName.innerText = city;
                temp.innerText = temperature;
                desc.innerText = descrip;
            })
            .catch(err => {
                warning.innerText = 'city not found'
        })
    
        });
        
    });


})


// ----------Weather----------

const inputCity = document.getElementById('input-city');
const btn = document.getElementById('btn');
const display = document.getElementById('img-display');
const iconDisplay = document.getElementById('icon-display');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const warning = document.getElementById('warning');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=93d71f6bc1ab4092643bae17067ef4c9';
const img = document.createElement('img');
fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const dName = data.name;
        const dTemp = data.main.temp;
        const dDesc = data.weather[0].main;
        const dicon = data.weather[0].icon;
        
        // const img = document.createElement('img');
        img.src = 'https://openweathermap.org/img/wn/' + dicon + '@2x.png'
        display.appendChild(img);

        cityName.innerText = dName;
        temp.innerText = dTemp;
        desc.innerText = dDesc;
    })


btn.addEventListener('click', function () {
    
    warning.innerText = null;
    const usrInput = inputCity.value;
    if (usrInput != null && usrInput != '') {
        iconDisplay.innerText = null;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + usrInput + '&units=metric&appid=93d71f6bc1ab4092643bae17067ef4c9')
            .then(response => response.json())
            .then(data => {
            // console.log(data);
            const city = data.name;
            const temperature = data.main.temp;
            const descrip = data.weather[0].main;
                const icon = data.weather[0].icon;
                img.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'
                iconDisplay.appendChild(img);

                cityName.innerText = city;
                temp.innerText = temperature;
                desc.innerText = descrip;
            })
            .catch(err => {
                warning.innerText = 'city not found'
        })
    } else {
        warning.innerText= 'invalid input'
    }
    inputCity.value = null;
    inputCity.focus();
})

