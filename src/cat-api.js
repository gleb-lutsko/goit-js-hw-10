export  function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds?api_key=live_jPHvQ1Ha9Dr4V1GJoC2FPgdJjATKRRP9QbBENWCrnebKxRLr37qeEd9IDEzZECiD').then(responce => responce.json());
}
export  function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_jPHvQ1Ha9Dr4V1GJoC2FPgdJjATKRRP9QbBENWCrnebKxRLr37qeEd9IDEzZECiD`).then(responce => responce.json())
}