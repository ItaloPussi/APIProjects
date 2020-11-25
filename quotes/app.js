let quotes = ''

const quoteText = document.querySelector("#quoteContainer")
const quoteAuthor = document.querySelector("#quoteAuthor")

const generateNew = document.querySelector("button")
generateNew.addEventListener("click", newQuote)

function getQuoteData(){
    fetch("https://type.fit/api/quotes")
        .then(response => response.json()) 
        .then(data => {
            quotes = data 
            newQuote()           
        })
}

function newQuote(){
    let quote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteText.textContent = quote.text
    quoteAuthor.textContent = quote.author
}
getQuoteData()
