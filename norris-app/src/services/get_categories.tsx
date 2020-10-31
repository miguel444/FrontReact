function getCategories(): Promise<any> {
    return fetch('https://api.chucknorris.io/jokes/categories').then(reponse => reponse.json());
}

export { getCategories };