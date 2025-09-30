async function fetchLogo(coin) {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
    const data = await response.json();
    document.getElementById("coin-logo").src = data.image.small;
  } catch (error) {
    console.error("Error fetching logo:", error);
  }
}

async function fetchSelectedCoin() {
  const coin = document.getElementById("coin-select").value;
  const currency = document.getElementById("currency-select").value;
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`
    );
    const data = await response.json();
    document.getElementById("selected-price").innerText = data[coin][currency];
    document.getElementById("last-updated").innerText =
      "Last updated: " + new Date().toLocaleTimeString();
    fetchLogo(coin);
  } catch (error) {
    document.getElementById("selected-price").innerText = "Error";
  }
}

document.getElementById("coin-select").addEventListener("change", fetchSelectedCoin);
document.getElementById("currency-select").addEventListener("change", fetchSelectedCoin);

fetchSelectedCoin();

document.getElementById("dark-mode-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

setInterval(fetchSelectedCoin, 30000);
