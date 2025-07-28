const KEY = 'NOT_MY_REAL_KEY';

async function generateGif(search) {
    const baseUrl = 'https://api.giphy.com/v1/gifs/search'
    const searchParam = encodeURIComponent(search);
    const url = `${baseUrl}?api_key=${KEY}&q=${searchParam}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw Error('failed to call api with error code: ' + res.status);
    }
    const data = await res.json();
    return data['data'][0]['embed_url'];
}

async function applyGif() {
    const frame = document.querySelector('#frame')
    const input = document.querySelector('#search')    
    try {
        const gif = await generateGif(input.value);
        frame.setAttribute('src', gif);
    } catch (err) {
        console.log(err);        
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#send').addEventListener('click', applyGif)
})