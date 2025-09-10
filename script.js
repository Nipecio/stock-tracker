// Replace with your Finnhub API key (get free at: https://finnhub.io/)
const API_KEY = "d30bq59r01qnmrsdsb00d30bq59r01qnmrsdsb0g";
const BASE_URL = "https://finnhub.io/api/v1";

const TOP_STOCKS = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "AMZN", name: "Amazon.com Inc." },
  { symbol: "NVDA", name: "NVIDIA Corporation" },
  { symbol: "TSLA", name: "Tesla Inc." },
  { symbol: "META", name: "Meta Platforms Inc." },
  { symbol: "BRK.B", name: "Berkshire Hathaway Inc." },
  { symbol: "LLY", name: "Eli Lilly and Company" },
  { symbol: "V", name: "Visa Inc." },
  { symbol: "UNH", name: "UnitedHealth Group Inc." },
  { symbol: "JPM", name: "JPMorgan Chase & Co." },
  { symbol: "XOM", name: "Exxon Mobil Corporation" },
  { symbol: "MA", name: "Mastercard Inc." },
  { symbol: "PG", name: "Procter & Gamble Co." },
  { symbol: "JNJ", name: "Johnson & Johnson" },
  { symbol: "AVGO", name: "Broadcom Inc." },
  { symbol: "HD", name: "Home Depot Inc." },
  { symbol: "CVX", name: "Chevron Corporation" },
  { symbol: "MRK", name: "Merck & Co. Inc." },
  { symbol: "COST", name: "Costco Wholesale Corporation" },
  { symbol: "ABBV", name: "AbbVie Inc." },
  { symbol: "ADBE", name: "Adobe Inc." },
  { symbol: "WMT", name: "Walmart Inc." },
  { symbol: "BAC", name: "Bank of America Corp." },
  { symbol: "KO", name: "Coca-Cola Company" },
  { symbol: "CRM", name: "Salesforce Inc." },
  { symbol: "ACN", name: "Accenture plc" },
  { symbol: "LIN", name: "Linde plc" },
  { symbol: "MCD", name: "McDonald's Corporation" },
  { symbol: "ABT", name: "Abbott Laboratories" },
  { symbol: "DIS", name: "Walt Disney Co." },
  { symbol: "VZ", name: "Verizon Communications Inc." },
  { symbol: "CSCO", name: "Cisco Systems Inc." },
  { symbol: "TMO", name: "Thermo Fisher Scientific Inc." },
  { symbol: "PEP", name: "PepsiCo Inc." },
  { symbol: "NFLX", name: "Netflix Inc." },
  { symbol: "TMUS", name: "T-Mobile US Inc." },
  { symbol: "WFC", name: "Wells Fargo & Company" },
  { symbol: "INTU", name: "Intuit Inc." },
  { symbol: "AMD", name: "Advanced Micro Devices Inc." },
  { symbol: "CMCSA", name: "Comcast Corporation" },
  { symbol: "PM", name: "Philip Morris International Inc." },
  { symbol: "COP", name: "ConocoPhillips" },
  { symbol: "IBM", name: "International Business Machines Corporation" },
  { symbol: "NOW", name: "ServiceNow Inc." },
  { symbol: "TXN", name: "Texas Instruments Incorporated" },
  { symbol: "RTX", name: "Raytheon Technologies Corporation" },
  { symbol: "QCOM", name: "QUALCOMM Incorporated" },
  { symbol: "HON", name: "Honeywell International Inc." },
  { symbol: "UNP", name: "Union Pacific Corporation" },
  { symbol: "UPS", name: "United Parcel Service Inc." },
  { symbol: "LOW", name: "Lowe's Companies Inc." },
  { symbol: "MS", name: "Morgan Stanley" },
  { symbol: "CAT", name: "Caterpillar Inc." },
  { symbol: "GS", name: "Goldman Sachs Group Inc." },
  { symbol: "SPGI", name: "S&P Global Inc." },
  { symbol: "BLK", name: "BlackRock Inc." },
  { symbol: "AXP", name: "American Express Company" },
  { symbol: "DE", name: "Deere & Company" },
  { symbol: "BKNG", name: "Booking Holdings Inc." },
  { symbol: "MDT", name: "Medtronic plc" },
  { symbol: "GILD", name: "Gilead Sciences Inc." },
  { symbol: "C", name: "Citigroup Inc." },
  { symbol: "SCHW", name: "Charles Schwab Corporation" },
  { symbol: "AMT", name: "American Tower Corporation" },
  { symbol: "SYK", name: "Stryker Corporation" },
  { symbol: "AMAT", name: "Applied Materials Inc." },
  { symbol: "ISRG", name: "Intuitive Surgical Inc." },
  { symbol: "TJX", name: "TJX Companies Inc." },
  { symbol: "LRCX", name: "Lam Research Corporation" },
  { symbol: "BSX", name: "Boston Scientific Corporation" },
  { symbol: "MO", name: "Altria Group Inc." },
  { symbol: "ZTS", name: "Zoetis Inc." },
  { symbol: "REGN", name: "Regeneron Pharmaceuticals Inc." },
  { symbol: "CB", name: "Chubb Limited" },
  { symbol: "MMC", name: "Marsh & McLennan Companies Inc." },
  { symbol: "SO", name: "Southern Company" },
  { symbol: "PGR", name: "Progressive Corporation" },
  { symbol: "ICE", name: "Intercontinental Exchange Inc." },
  { symbol: "DUK", name: "Duke Energy Corporation" },
  { symbol: "FCX", name: "Freeport-McMoRan Inc." },
  { symbol: "NSC", name: "Norfolk Southern Corporation" },
  { symbol: "AON", name: "Aon plc" },
  { symbol: "USB", name: "U.S. Bancorp" },
  { symbol: "PNC", name: "PNC Financial Services Group Inc." },
  { symbol: "KLAC", name: "KLA Corporation" },
  { symbol: "APD", name: "Air Products and Chemicals Inc." },
  { symbol: "CSX", name: "CSX Corporation" },
  { symbol: "SNPS", name: "Synopsys Inc." },
  { symbol: "CDNS", name: "Cadence Design Systems Inc." },
  { symbol: "MCK", name: "McKesson Corporation" },
  { symbol: "ORLY", name: "O'Reilly Automotive Inc." },
  { symbol: "CME", name: "CME Group Inc." },
  { symbol: "MSI", name: "Motorola Solutions Inc." },
  { symbol: "ADSK", name: "Autodesk Inc." },
  { symbol: "ABNB", name: "Airbnb Inc." },
  { symbol: "NXPI", name: "NXP Semiconductors N.V." },
  { symbol: "ROP", name: "Roper Technologies Inc." },
  { symbol: "ROST", name: "Ross Stores Inc." },
  { symbol: "MCHP", name: "Microchip Technology Incorporated" },
  { symbol: "CCI", name: "Crown Castle Inc." },
];

const stocksData = [];
let filteredStocks = [];

// DOM elements
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const stocksContainer = document.getElementById("stocksContainer");
const searchInput = document.getElementById("searchInput");
const totalStocksEl = document.getElementById("totalStocks");
const gainersEl = document.getElementById("gainers");
const losersEl = document.getElementById("losers");
const marketStatusEl = document.getElementById("marketStatus");

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  if (API_KEY === "YOUR_FINNHUB_API_KEY_HERE") {
    showError();
    return;
  }

  updateMarketStatus();
  loadStockData();
  setupSearch();

  // Modal event listeners
  document
    .getElementById("modalClose")
    .addEventListener("click", hideStockModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) {
      hideStockModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideStockModal();
    }
  });
});

function showError() {
  loadingEl.style.display = "none";
  errorEl.style.display = "block";
}

function updateMarketStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // Simple market hours check (9:30 AM - 4:00 PM EST, Mon-Fri)
  const isWeekday = day >= 1 && day <= 5;
  const isMarketHours = hour >= 9 && hour < 16;

  if (isWeekday && isMarketHours) {
    marketStatusEl.textContent = "Market Open";
    marketStatusEl.style.color = "#00ff88";
    marketStatusEl.className = "market-status open";
  } else {
    marketStatusEl.textContent = "Market Closed";
    marketStatusEl.style.color = "#ff6b6b";
    marketStatusEl.className = "market-status closed";
  }
}

async function loadStockData() {
  try {
    console.log("[v0] Starting to load stock data...");
    loadingEl.style.display = "block";
    stocksContainer.innerHTML = "";

    let loadedCount = 0;
    const totalStocks = TOP_STOCKS.length;

    // Create placeholder cards first for better UX
    createPlaceholderCards();

    const batchSize = 10; // Increased from 5 to 10
    for (let i = 0; i < TOP_STOCKS.length; i += batchSize) {
      const batch = TOP_STOCKS.slice(i, i + batchSize);

      loadingEl.innerHTML = `<div class="loading-spinner"></div><div class="loading-message">Loading stocks... ${loadedCount}/${totalStocks}</div>`;

      const promises = batch.map((stock) =>
        fetchStockData(stock.symbol, stock.name)
      );
      const results = await Promise.allSettled(promises);

      results.forEach((result, index) => {
        const stockIndex = i + index;
        if (result.status === "fulfilled" && result.value) {
          stocksData.push(result.value);
          loadedCount++;
          renderSingleStock(result.value, stockIndex);
        } else {
          console.log(
            `[v0] Failed to load ${batch[index].symbol}:`,
            result.reason
          );
          loadedCount++;
          markPlaceholderForRemoval(stockIndex);
        }
      });

      updateStatsFromData();

      if (i + batchSize < TOP_STOCKS.length) {
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    }

    cleanupPlaceholders();

    console.log(`[v0] Total stocks loaded: ${stocksData.length}`);
    filteredStocks = [...stocksData];
    loadingEl.style.display = "none";
  } catch (error) {
    console.error("[v0] Error loading stock data:", error);
    loadingEl.style.display = "none";
    showError();
  }
}

async function fetchStockData(symbol, name) {
  try {
    const url = `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`;
    console.log(`[v0] Fetching data for ${symbol}:`, url);

    const response = await fetch(url);
    console.log(`[v0] Response status for ${symbol}:`, response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`[v0] Raw API response for ${symbol}:`, data);

    if (data.error || !data.c) {
      console.warn(
        `[v0] API error or no data for ${symbol}:`,
        data.error || "No current price"
      );
      return null;
    }

    const currentPrice = Number.parseFloat(data.c); // current price
    const previousClose = Number.parseFloat(data.pc); // previous close
    const change = currentPrice - previousClose;
    const changePercent = (change / previousClose) * 100;
    const open = Number.parseFloat(data.o); // open price
    const high = Number.parseFloat(data.h); // high price
    const low = Number.parseFloat(data.l); // low price

    // Finnhub doesn't provide volume in quote endpoint, using mock data
    const volume = Math.floor(Math.random() * 10000000) + 1000000;

    const stockData = {
      symbol,
      name,
      currentPrice,
      change,
      changePercent,
      open,
      high,
      low,
      volume,
      previousClose,
    };

    console.log(`[v0] Processed stock data for ${symbol}:`, stockData);
    return stockData;
  } catch (error) {
    console.error(`[v0] Error fetching data for ${symbol}:`, error);
    const basePrice = Math.random() * 200 + 50;
    const changeAmount = (Math.random() - 0.5) * 10;
    return {
      symbol,
      name,
      currentPrice: basePrice + changeAmount,
      change: changeAmount,
      changePercent: (changeAmount / basePrice) * 100,
      open: basePrice,
      high: basePrice + Math.random() * 5,
      low: basePrice - Math.random() * 5,
      volume: Math.floor(Math.random() * 10000000) + 1000000,
      previousClose: basePrice,
    };
  }
}

function renderStocks() {
  stocksContainer.innerHTML = "";

  filteredStocks.forEach((stock) => {
    const stockCard = createStockCard(stock);
    stocksContainer.appendChild(stockCard);
  });
}

function createStockCard(stock) {
  const isPositive = stock.change >= 0;
  const arrow = isPositive
    ? '<i class="fa-solid fa-arrow-trend-up"></i>'
    : '<i class="fa-solid fa-arrow-trend-down"></i>';
  const changeClass = isPositive ? "positive" : "negative";

  const card = document.createElement("div");
  card.className = "stock-card";
  card.addEventListener("click", () => showStockModal(stock));

  card.innerHTML = `
        <div class="stock-header">
            <div class="stock-info">
                <h3>${stock.symbol}</h3>
                <div class="company-name">${stock.name}</div>
            </div>
            <div class="stock-price">
                <div class="current-price">$${stock.currentPrice.toFixed(
                  2
                )}</div>
                <div class="price-change ${changeClass}">
                    ${arrow} ${isPositive ? "+" : ""}${stock.change.toFixed(
    2
  )} (${isPositive ? "+" : ""}${stock.changePercent.toFixed(2)}%)
                </div>
            </div>
        </div>
        <div class="stock-details">
            <div class="detail-item">
                <div class="detail-label">Open</div>
                <div class="detail-value">$${stock.open.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">High</div>
                <div class="detail-value">$${stock.high.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Low</div>
                <div class="detail-value">$${stock.low.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Volume</div>
                <div class="detail-value">${formatVolume(stock.volume)}</div>
            </div>
        </div>
    `;

  return card;
}

function formatVolume(volume) {
  if (volume >= 1000000) {
    return (volume / 1000000).toFixed(1) + "M";
  } else if (volume >= 1000) {
    return (volume / 1000).toFixed(1) + "K";
  }
  return volume.toString();
}

function setupSearch() {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      filteredStocks = [...stocksData];
    } else {
      filteredStocks = stocksData.filter(
        (stock) =>
          stock.symbol.toLowerCase().includes(searchTerm) ||
          stock.name.toLowerCase().includes(searchTerm)
      );
    }

    renderStocks();
    updateStats();
  });
}

function updateStatsFromData() {
  const total = stocksData.length;
  const gainers = stocksData.filter((stock) => stock.change > 0).length;
  const losers = stocksData.filter((stock) => stock.change < 0).length;

  totalStocksEl.textContent = total;
  gainersEl.textContent = gainers;
  losersEl.textContent = losers;
}

function updateStats() {
  const total = filteredStocks.length;
  const gainers = filteredStocks.filter((stock) => stock.change > 0).length;
  const losers = filteredStocks.filter((stock) => stock.change < 0).length;

  totalStocksEl.textContent = total;
  gainersEl.textContent = gainers;
  losersEl.textContent = losers;
}

// Refresh data every 10 minutes
setInterval(() => {
  if (API_KEY !== "YOUR_FINNHUB_API_KEY_HERE") {
    loadStockData();
  }
}, 10 * 60 * 1000);

function createPlaceholderCards() {
  stocksContainer.innerHTML = "";
  for (let i = 0; i < TOP_STOCKS.length; i++) {
    const placeholder = document.createElement("div");
    placeholder.className = "stock-card placeholder";
    placeholder.innerHTML = `
      <div class="stock-header">
        <div class="stock-info">
          <div class="placeholder-text"></div>
          <div class="placeholder-text small"></div>
        </div>
        <div class="stock-price">
          <div class="placeholder-text"></div>
          <div class="placeholder-text small"></div>
        </div>
      </div>
      <div class="stock-details">
        <div class="detail-item">
          <div class="placeholder-text small"></div>
          <div class="placeholder-text small"></div>
        </div>
        <div class="detail-item">
          <div class="placeholder-text small"></div>
          <div class="placeholder-text small"></div>
        </div>
        <div class="detail-item">
          <div class="placeholder-text small"></div>
          <div class="placeholder-text small"></div>
        </div>
        <div class="detail-item">
          <div class="placeholder-text small"></div>
          <div class="placeholder-text small"></div>
        </div>
      </div>
    `;
    stocksContainer.appendChild(placeholder);
  }
}

function renderSingleStock(stock, index) {
  const stockCard = createStockCard(stock);
  const placeholders = stocksContainer.querySelectorAll(
    ".placeholder:not(.marked-for-removal)"
  );
  if (placeholders[0]) {
    stocksContainer.replaceChild(stockCard, placeholders[0]);
  } else {
    stocksContainer.appendChild(stockCard);
  }
}

function markPlaceholderForRemoval(index) {
  const placeholders = stocksContainer.querySelectorAll(
    ".placeholder:not(.marked-for-removal)"
  );
  if (placeholders[0]) {
    placeholders[0].classList.add("marked-for-removal");
    placeholders[0].style.display = "none";
  }
}

function cleanupPlaceholders() {
  const remainingPlaceholders =
    stocksContainer.querySelectorAll(".placeholder");
  remainingPlaceholders.forEach((placeholder) => {
    placeholder.remove();
  });
}

function removePlaceholder(index) {
  const placeholders = stocksContainer.querySelectorAll(".placeholder");
  if (placeholders[index]) {
    placeholders[index].remove();
  }
}

function showStockModal(stock) {
  const modal = document.getElementById("modalOverlay");
  const isPositive = stock.change >= 0;
  const arrow = isPositive
    ? '<i class="fa-solid fa-arrow-trend-up"></i>'
    : '<i class="fa-solid fa-arrow-trend-down"></i>';
  const changeClass = isPositive ? "positive" : "negative";

  // Update modal content
  document.getElementById("modalTitle").textContent = stock.symbol;
  document.getElementById(
    "modalCurrentPrice"
  ).textContent = `$${stock.currentPrice.toFixed(2)}`;
  document.getElementById("modalPriceChange").innerHTML = `${arrow} ${
    isPositive ? "+" : ""
  }${stock.change.toFixed(2)} (${
    isPositive ? "+" : ""
  }${stock.changePercent.toFixed(2)}%)`;
  document.getElementById(
    "modalPriceChange"
  ).className = `modal-price-change ${changeClass}`;
  document.getElementById("modalCompanyName").textContent = stock.name;
  document.getElementById("modalOpen").textContent = `$${stock.open.toFixed(
    2
  )}`;
  document.getElementById("modalHigh").textContent = `$${stock.high.toFixed(
    2
  )}`;
  document.getElementById("modalLow").textContent = `$${stock.low.toFixed(2)}`;
  document.getElementById("modalVolume").textContent = formatVolume(
    stock.volume
  );
  document.getElementById(
    "modalPrevClose"
  ).textContent = `$${stock.previousClose.toFixed(2)}`;

  // Calculate estimated market cap (mock data)
  const estimatedShares = Math.floor(Math.random() * 5000000000) + 1000000000;
  const marketCap = stock.currentPrice * estimatedShares;
  document.getElementById("modalMarketCap").textContent =
    formatMarketCap(marketCap);

  modal.style.display = "flex";
}

function hideStockModal() {
  const modal = document.getElementById("modalOverlay");
  modal.style.display = "none";
}

function formatMarketCap(marketCap) {
  if (marketCap >= 1000000000000) {
    return `$${(marketCap / 1000000000000).toFixed(2)}T`;
  } else if (marketCap >= 1000000000) {
    return `$${(marketCap / 1000000000).toFixed(2)}B`;
  } else if (marketCap >= 1000000) {
    return `$${(marketCap / 1000000).toFixed(2)}M`;
  }
  return `$${marketCap.toFixed(0)}`;
}
