let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImUwNGIzODNjLTA1ZTUtNDE3OC1iNzZlLTlkMGUyMjcxOWZkMiIsImlhdCI6MTYxMjM1NDI4NSwic3ViIjoiZGV2ZWxvcGVyL2IwMTIzZTU1LTkwYmQtMjNhYy1jNzZkLTU5ZDNlYzJmNzQwNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMjguMTI4LjEyOC4xMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.yKMaA4lsSXhP-c7LR6rZSE1jmLfLY3eEWQ1o96ZRE-Zdkp7nA-uCjYYEfDXSQzuq7MKTQNzaeRl0MpLM-bkprg"

fetch("https://proxy.royaleapi.dev/v1/cards", {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
}).then(result => result.json()).then(data => {
    cards = data.items
    renderCards(cards)
}).catch(e => {
    console.log(e)
})


function getType(max) {
    switch (max) {
        case 13:
            return 'normal'
            break;
        case 11:
            return 'rare'
            break
        case 8:
            return 'epic'
            break
        case 5:
            return 'legendary'
            break
    }
}

function renderCards(cards) {
    const html = cards.map(card => {
        let type = getType(card.maxLevel)
        return `<div class="card ${type}">
            <img src="${card.iconUrls.medium}" alt="" />
            <h1>${card.name}</h1>
        </div>`
    }).join("")

    document.querySelector(".cards").innerHTML = html
}