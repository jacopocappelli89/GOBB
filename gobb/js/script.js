// JavaScript Document
function modulo(){
	window.location = "http://test.keepup.pro/gobb/azienda.html";	
}

function cerca(){
	
	tag = '<div class="divazienda"><p><a href="linea.html?id=1">Azienda1</a></p></div>';
	document.getElementById('risultatiricerca').innerHTML = tag;	
	
}

function cercaProdotto(){
	
	tag = '<div class="divprodotto">'+
	   	'<span class="checked"></span>'+
        '<img src="image/prodotto1.jpg" alt="prodotto1" class="immprodotto">'+
        '<h1 class="prodotto">Prodotto 1</h1>'+
		'<table class="materiali">'+
        	'<thead>'+
    	    	'<th></th><th>Materiale</th><th>Prezzo</th><th>Qnt</th>'+
            '</thead>'+
            '<tbody>'+
	           	'<tr><td><img src="image/yes.png"></td><td><a href="javascript:aggiungi(\'1\');">Cotone</a></td><td>130 Euro</td><td>200</td></tr>'+
	            '<tr><td><img src="image/no.png"></td><td><a href="#">Lana</a></td><td>180 Euro</td><td>500</td></tr>'+
            '</tbody>'+
        '</table>'+
    '</div>';
	document.getElementById('risultatiricerca').innerHTML = tag;	
	
}

function aggiungi(){
	$('#modalaggiunta').modal("show");
}

function confermaordine(){
	$('#confermaordine').modal("show");
}