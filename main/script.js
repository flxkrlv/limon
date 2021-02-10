function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
	  var day = date.getDate();


    var monthList = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
    'августа', 'сентября', 'октября', 'ноября', 'декабря');
    var month = monthList[date.getMonth()];


    if(minutes < 10)
    {minutes = '0' + minutes;}
	if(day < 10)
    {day = '0' + day;}
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes;


	document.getElementById('datedisplay').innerHTML = day + ' ' + month;
}
setInterval(getDate, 0);




var itog = 0;
var mainoption_itog = 0;
var shampoo_itog = 0;
var koja = 0;
var chern = 0;
var dvig = 0;
var silic = 0;
var bitum = 0;
var itog_calc = 0;



var комп_array = new Array(500, 550, 600, 650, 700);
var верх_array = new Array(400, 450, 500, 550, 600);
var эксп_array = new Array(300, 300, 350, 350, 400);
var техн_array = new Array(200, 200, 250, 250, 300);
var керх_array = new Array(100, 150, 150, 150, 200);
var салон_array = new Array(200, 200, 250, 250, 300);
var воск_array = new Array(150, 150, 200, 200, 250);
var нано_array = new Array(250, 250, 300, 300, 350);
var кварц_array = new Array(500, 600, 700, 800, 1000);
var кожа_array = new Array(150, 150, 200, 200, 250);



var комп = 0;
var верх = 0;
var эксп = 0;
var техн = 0;
var керх = 0;
var салон = 0;
var воск = 0;
var нано = 0;
var кварц = 0;
var кожа = 0;





function check()
{
    var brand = document.getElementsByName('n_o_c');

    var car_brand_text = new Array('BMW', 'Mercedes', 'Volkswagen', 'Skoda', 'Renault', 'Toyota', 'Lexus',
    'Mazda', 'Land Rover', 'KIA');

    for (var i = 0; i < brand.length; i++) {
        if (brand[i].type == "radio" && brand[i].checked) {
            document.getElementById('text_all_1').innerHTML = car_brand_text[brand[i].value - 1] + '';
        }
    }

    var cartype = document.getElementsByName('t_o_c');

    var car_type_text = new Array('I', 'II', 'III', 'IV', 'V');

    for (var i = 0; i < cartype.length; i++) {
        if (cartype[i].type == "radio" && cartype[i].checked) {
            document.getElementById('text_all_2').innerHTML = car_type_text[cartype[i].value - 1];
            var car_type_summa = cartype[i].value - 1;
                комп = комп_array[car_type_summa];
                верх = верх_array[car_type_summa];
                эксп = эксп_array[car_type_summa];
                техн = техн_array[car_type_summa];
                керх = керх_array[car_type_summa];
                салон = салон_array[car_type_summa];
                воск = воск_array[car_type_summa];
                нано = нано_array[car_type_summa];
                кварц = кварц_array[car_type_summa];
                кожа = кожа_array[car_type_summa];
        }
    }

    var mainoption = document.getElementsByName('m_o');

    var main_option_text = new Array('комп', 'верх', 'эксп', 'техн', 'керх', 'салон');

    for (var i = 0; i < mainoption.length; i++) {
        if (mainoption[i].type == "radio" && mainoption[i].checked) {
            document.getElementById('text_all_3').innerHTML = ' — ' + main_option_text[mainoption[i].value - 1];
            var main_option_summa = new Array(комп, верх, эксп, техн, керх, салон);
            mainoption_itog = main_option_summa[mainoption[i].value-1];
        }
    }




    var shampoo = document.getElementsByName('a_o');

    var shampoo_text = new Array(', воск', ', нано', ', кварц');

    for (var i = 0; i < shampoo.length; i++) {
        if (shampoo[i].type == "radio" && shampoo[i].checked) {
            document.getElementById('text_all_4').innerHTML = shampoo_text[shampoo[i].value - 1];
            var shampoo_array = new Array(воск, нано, кварц);
            shampoo_itog = shampoo_array[mainoption[i].value-1];

        }
    }





    var checkbox = document.getElementsByName('checkbox-кожа');

    var str = "";

    for(var i=0; i<checkbox.length; i++){

    if(checkbox[i] . checked) {str+=checkbox[i].value+" ";

    koja = кожа;

    document.getElementById('text_all_5').innerHTML = ', кожа '}

    else {document.getElementById('text_all_5').innerHTML = '';
    koja = 0;}
    }





    var checkbox = document.getElementsByName('checkbox-черн');

    var str = "";

    for(var i=0; i<checkbox.length; i++){

    if(checkbox[i] . checked) {str+=checkbox[i].value+" ";

    document.getElementById('text_all_6').innerHTML = ', черн ';
    chern = 50; }

    else {document.getElementById('text_all_6').innerHTML = '';
    chern = 0;  }
    }




    var checkbox = document.getElementsByName('checkbox-двиг');

    var str = "";

    for(var i=0; i<checkbox.length; i++){

    if(checkbox[i] . checked) {str+=checkbox[i].value+" ";

    document.getElementById('text_all_7').innerHTML =  ', двиг ';
    dvig = 250; }

    else {document.getElementById('text_all_7').innerHTML = '';
    dvig = 0; }
    }





    var checkbox = document.getElementsByName('checkbox-силик');

    var str = "";

    for(var i=0; i<checkbox.length; i++){

    if(checkbox[i] . checked) {str+=checkbox[i].value+" ";

    document.getElementById('text_all_8').innerHTML =  ', силик '
    silic = 100;  }

    else {document.getElementById('text_all_8').innerHTML = '';
    silic = 0;  }
    }




    var checkbox = document.getElementsByName('checkbox-битум');

    var str = "";

    for(var i=0; i<checkbox.length; i++){

    if(checkbox[i] . checked) {str+=checkbox[i].value+" ";

    document.getElementById('text_all_9').innerHTML =  ', битум ';
    bitum = 50; }

    else {document.getElementById('text_all_9').innerHTML = '';
    bitum = 0;  }
    }





    itog = mainoption_itog + shampoo_itog + koja + chern + dvig + silic + bitum + itog_calc;
    document.getElementById('summa').innerHTML =  itog + '₽';

}
setInterval(check, 0);


$( document ).ready(function() {
var link = $("#but_min");

link.on('click', function(e) {
e.preventDefault();
itog_calc = itog_calc - 50;
});
});

$( document ).ready(function() {
var link = $("#but_plus");

link.on('click', function(e) {
e.preventDefault();
itog_calc = itog_calc + 50;
});
});
