import './css/styles.css';
import { fetchCountries } from './api/fetch';
import { debounce } from 'lodash.debounce';
import {Notiflix} from 'notiflix';


const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.getElementById('search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input',)

function searchCountry(e) {
    e.preventDefault();
    const valueInput = e.target.value.trim();
    if (!valueInput) {
        resetMarkup(refs.countryList);
        resetMarkup(refs.countryInfo);
        return;
    }
}
