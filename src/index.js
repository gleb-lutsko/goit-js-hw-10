import { fetchBreeds, fetchCatByBreed } from './cat-api';
const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const textLoader = document.querySelector('.loader');
const textError = document.querySelector('.error');

hideElement(select);
hideElement(textError);
createOption();

function createOption() {
    fetchBreeds()
        .then(data => {
            data.map(dataItem => select.insertAdjacentHTML('beforeend', `<option value="${dataItem.id}">${dataItem.name}</option>`))
            showElement(select);
        })
        .catch(() => showElement(textError))
        .finally(() => hideElement(textLoader));
};

select.addEventListener('change', onSelectCat);
function onSelectCat(evt) {
    fetchCatByBreed(evt.target.value)
        .then(data => catInfo.innerHTML = createCatMarkup(data))
        .catch(() => showElement(textError));
}

function createCatMarkup(arr) {
    return arr.map(item => `<img src="${item.url}" width="300" alt="cat">
        <h1>${item.breeds[0].name}</h1>
        <p>${item.breeds[0].description}</p>
        <p>Temperament: ${item.breeds[0].temperament}</p>
    `).join('')
}

function showElement(element) {
    element.hidden = false;
}
function hideElement(element) {
    element.hidden = true;
}