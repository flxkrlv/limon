
function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
	var day = date.getDay();
	var m = date.getMonth();
	
	var monthList = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 
    'августа', 'сентября', 'октября', 'ноября', 'декабря');
    var month = monthList[m];
	
	
    if(minutes < 10)
    {minutes = '0' + minutes;}
	if(day < 10)
    {day = '0' + day;}
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes;
	

	document.getElementById('datedisplay').innerHTML = day + ' ' + month;
}
setInterval(getDate, 0);