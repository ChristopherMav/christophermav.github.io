var url = "https://steamcommunity.com/market/priceoverview/?appid=730&currency=1&market_hash_name=Berlin%202019%20Inferno%20Souvenir%20Package"
$("button").click(function() 
{
    $.getJSON(url, function(data)
		    {
        $("ul").append("<li>"+data.success+"</li>");
        $("ul").append("<li>"+data.lowest_price+"</li>");
    	$("ul").append("<li>"+data.volume+"</li>");
        $("ul").append("<li>"+data.median_price+"</li>");
    });
});