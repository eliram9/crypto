//wrap entire document in self-invoking jQuery function
$(function() {	
	var urlXRP = 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD';

	//ripple
	$.get( urlXRP, function( data ) {
		console.log(data);
		$( "#XRP" ).text("$" + data.USD );
	});
	var urlETH = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';

	//Ethereum
	$.get( urlETH, function( data ) {
		console.log(data);
		$( "#ETH" ).text("$" + data.USD );
	});

	//Ethereum Classic
	var urlETC = 'https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD';

	$.get( urlETC, function( data ) {
		console.log(data);
		$( "#ETC" ).text("$" + data.USD );
	});	

	//Stellar
	var urlXLM = 'https://min-api.cryptocompare.com/data/price?fsym=XLM&tsyms=USD';

	$.get( urlXLM, function( data ) {
		console.log(data);
		$( "#XLM" ).text("$" + data.USD );
	});

	//Bitcoin
	var urlBTC = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';

	$.get( urlBTC, function( data ) {
		console.log(data);
		$( "#BTC" ).text("$" + data.USD );
	});

	//Bitcoin Classic 
	var urlBCH = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD';

	$.get( urlBCH, function( data ) {
		console.log(data);
		$( "#BCH" ).text("$" + data.USD );
	});
}); //end self-invoking func