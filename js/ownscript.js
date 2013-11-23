// JavaScript Document

//Startvariablen
var offcanvas_out = '0';

//Ein/Ausklappen des OffCanvas Menü

function offcanvas(){
	
	if (offcanvas_out == '1')
  	{
  	document.getElementById('main').style.width = '100'+"%";
	document.getElementById('navigation').style.width = '0'+"%";
	document.getElementById('navigation').style.display= 'none';
	offcanvas_out = '0';
  	}
	else
  	{
	document.getElementById('main').style.width = '90'+"%";
	document.getElementById('navigation').style.width = '10'+"%";
	document.getElementById('navigation').style.display= 'block';
	offcanvas_out = '1';
	}
};
