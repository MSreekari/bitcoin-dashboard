async function fetchBitcoinData(){
    try{
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
        const data = await response.json();
        document.getElementById('name').textContent = data.name;
        document.getElementById('price').textContent = '$' + data.market_data.current_price.usd;
        document.getElementById('price-exchange').textContent = data.market_data.price_change_percentage_24h + '%';
        document.getElementById('capitalization').textContent = '$' + data.market_data.market_cap.usd.toLocaleString();
        document.getElementById('volume').textContent = '$' + data.market_data.total_volume.usd.toLocaleString();
        document.getElementById('high').textContent = '$' + data.market_data.high_24h.usd;
        document.getElementById('low').textContent = '$' + data.market_data.low_24h.usd;
        const globalResponse = await fetch('https://api.coingecko.com/api/v3/global');
        const globalData = await globalResponse.json();
        const dominance = globalData.data.market_cap_percentage.btc;
        document.getElementById("btc-dominance").textContent = dominance.toFixed(2) + "%";
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchBitcoinData();