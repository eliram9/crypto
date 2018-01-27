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

	//Stellar
	var urlXLM = 'https://min-api.cryptocompare.com/data/price?fsym=XLM&tsyms=USD';

	$.get( urlXLM, function( data ) {
		console.log(data);
		$( "#XLM" ).text("$" + data.USD );
	});

	//Neo
	var urlNEO = 'https://min-api.cryptocompare.com/data/price?fsym=NEO&tsyms=USD';

	$.get( urlNEO, function( data ) {
		console.log(data);
		$( "#NEO" ).text("$" + data.USD );
	});	
}); //end self-invoking func