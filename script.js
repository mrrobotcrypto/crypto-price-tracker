async function fetchSelectedCoin() {
  const coin = document.getElementById("coin-select").value;
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    );
    const data = await response.json();
    document.getElementById("selected-price").innerText = data[coin].usd;
  } catch (error) {
    document.getElementById("selected-price").innerText = "Error";
  }
}

document.getElementById("coin-select").addEventListener("change", fetchSelectedCoin);
fetchSelectedCoin();

document.getElementById("last-updated").innerText = 
  "Last updated: " + new Date().toLocaleTimeString();



document.getElementById("dark-mode-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


setInterval(fetchSelectedCoin, 30000);
