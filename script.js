const quoteContainer = document.getElementById("quote-container");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const authorText = document.getElementById("author");
const quoteText = document.getElementById("quote");

let apiQuotes = [];

function newQuote() {
  // Pick a random quote from apiQuote array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if author is blank
  if (!quote.author) {
    authorText.textContent = '" - Unknown"';
  } else {
    authorText.textContent = '" - ' + quote.author + '"';
  }

  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
}
// Get Quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error here
  }
}
// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On load

getQuotes();
