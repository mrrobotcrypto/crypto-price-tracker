
async function fetchPrices() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    );
    const data = await response.json();
    document.getElementById("btc-price").innerText = data.bitcoin.usd;
    document.getElementById("eth-price").innerText = data.ethereum.usd;
  } catch (error) {
    console.error("Error fetching prices:", error);
  }
}

fetchPrices();
