import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from './cat-api';
axios.defaults.headers.common["x-api-key"] = "live_jPHvQ1Ha9Dr4V1GJoC2FPgdJjATKRRP9QbBENWCrnebKxRLr37qeEd9IDEzZECiD";
const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const textLoader = document.querySelector('.loader');
const textError = document.querySelector('.error');

hideElement(select);
hideElement(textError);
function createOption() {
    fetchBreeds()
        .then(data => {
            data.map(dataItem => select.insertAdjacentHTML('beforeend', `<option value="${dataItem.id}">${dataItem.name}</option>`))
            showElement(select);
        })
        .catch(() => showElement(textError))
        .finally(() => hideElement(textLoader));
};
createOption();
select.addEventListener('change', onSelectCat);
function showElement(element) {
    element.hidden = false;
}
function hideElement(element) {
    element.hidden = true;
}
function onSelectCat(evt) {
    fetchBreeds().then(dataBreeds => {
        fetchCatByBreed(evt.target.value)
            .then(data => {
            createCatMarkup(data[0].url, dataBreeds.find(cat => cat.id === evt.target.value))})
            .catch(() => showElement(textError));
    })
}

function createCatMarkup(url , { name, description,temperament}) {
    catInfo.innerHTML = `
    <img src="${url}" width="300" alt="cat">
    <h1>${name}</h1>
    <p>${description}</p>
    <p>Temperament: ${temperament}</p>
    `;
}
