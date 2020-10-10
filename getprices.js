var xmr_usd_pln = "https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD,PLN"
$("#xmr-button").click(function()
{
	$("#xmr-button").hide();
	$.getJSON(xmr_usd_pln, function(data)
	{
		$("#xmr-price").append(data.USD+" USD");
		$("#xmr_price").append(data.PLN+" PLN");
	});
});

var btc_usd_pln = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,PLN"

$("#btc-button").click(function()
{
	$("#btc-button").hide();
	$.getJSON(btc_usd_pln, function(data)
	{
		$("#btc-price").append(data.USD+" USD");
		$("#btc-price").append(data.PLN+" PLN");
	});
});