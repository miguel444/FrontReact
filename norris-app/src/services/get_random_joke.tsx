
function getRandomJoke(): Promise<any> {
    return fetch('https://api.chucknorris.io/jokes/random').then(reponse => reponse.json());
}

export {getRandomJoke}