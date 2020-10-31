function getTextSearch(phrase: string) : Promise<any> {
    return fetch(`https://api.chucknorris.io/jokes/search?query=${phrase}`).then(reponse => reponse.json());

}


export {getTextSearch}