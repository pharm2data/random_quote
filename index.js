const quotes = [
    "Quote 1 Placeholder",
    "Quote 2-Placeholder",
    "Quote 3-Placeholder",
    "Quote 4-Placeholder",
    "Quote 5-Placeholder",
    "Quote 6-Placeholder",
    "Quote 7-Placeholder",
    "Quote 8-Placeholder"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if(usedIndexes.size >= quotes.length) {
    usedIndexes.clear()
}
    while (true) {
        const randomIdx = Math.floor(Math.random() * quote.length)
        if (usedIndexes.has(randomIdx)) continue
    
    
    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
    }
}