function getJokeByCategory(category: string): Promise<any>{
    return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then(reponse => reponse.json());
}

export {getJokeByCategory}