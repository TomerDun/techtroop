// Ex1

async function fetchBook(isbn) {
    const prefix = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
    const url = prefix + isbn;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.items[0].volumeInfo;        
    } catch (err) {
        throw new Error(err)
    }
}

// Ex2
async function fetchBook2(queryType, query) {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
    const encodedParams = encodeURIComponent(query);
    const url = `${baseUrl}${queryType}:${encodedParams}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function fetchBook3(queryType, query) {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
    const encodedParams = encodeURIComponent(query);
    const url = `${baseUrl}${queryType}:${encodedParams}`;
    const res = await fetch(url);
    const data = await res.json();
    data.items.forEach(item => item.volumeInfo.industryIdentifiers && console.log(`title: ${item.volumeInfo.title}, Author: ${item.volumeInfo.authors[0]}, ISBN: ${item.volumeInfo.industryIdentifiers[0].identifier}`));
}



// fetchBook(9780575087057).then(console.log);


// fetchBook2("isbn", 9789814561778).then(console.log)
// fetchBook2("title", "How to Win Friends and Influence People").then(console.log)

fetchBook3("title", "How to Win Friends and Influence People")
fetchBook3("isbn", 9789814561778)

