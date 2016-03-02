var list = document.getElementById('payslider');
var p = document.getElementById('p');
var n = document.getElementById('n');

p.onclick = function(){
	list.insertAdjacentElement("beforeEnd", list.firstElementChild);
	return false;

}
n.onclick = function(){
	list.insertAdjacentElement("afterBegin", list.lastElementChild);
	return false;

}


function bind_click(i){
	document.getElementById('plus'+i).onclick = function(){	
		if (!document.getElementById('left'+i).style || document.getElementById('left'+i).style.display == "none" || document.getElementById('left'+i).style.display == "") {
			this.style.listStyleImage = "url(images/plas.png)";
			document.getElementById('left'+i).style.display = "block";
		}
		else{
			this.style.listStyleImage = "url(images/minys.png)";
			document.getElementById('left'+i).style.display = "none";
		}
		return false;
	}
}
for (var i = 1; i <= 5; i++) {
 	bind_click(i);
	
}

//одиночная галлерея с оплатой
var pics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

var i = 0;
var img = document.querySelectorAll('.gallerypay img')[0];
document.getElementById('nextpay').onclick = function(){
	i++;
	if( i>=pics.length ) i = 0;
	img.setAttribute('src', 'images/'+pics[i]);

	return false;
}
document.getElementById('prevpay').onclick = function(){
	i--;
	if( i < 0 ) i = pics.length-1;
	img.setAttribute('src', 'images/'+pics[i]);

	return false;
}