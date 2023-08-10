export function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds').then(responce => responce.json());
}
export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`).then(responce => responce.json())
}