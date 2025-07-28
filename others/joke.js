const button = document.querySelector('#new-joke');
const setup = document.querySelector('#setup');
const punch = document.querySelector('#punch');

function generateNewJoke() {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => resolve(res.json()))
        .then(data => resolve(data));
    })
}

button.addEventListener('click', () => {
    setup.innerHTML = 'Loading..'
    punch.innerHTML = 'Loading..'
    generateNewJoke().then(data => {
        console.log(data);
        
        setup.innerHTML = data.setup;
        punch.innerHTML = data.punchline
    })
})