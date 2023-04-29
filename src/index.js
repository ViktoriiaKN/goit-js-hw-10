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

refs.input.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(e) {
    e.preventDefault();
    const valueInput = e.target.value.trim();
    if (!valueInput) {
        resetMarkup(refs.countryList);
        resetMarkup(refs.countryInfo);
        return;
    }
}

fetchCountries(valueInput)
    .then(dataCountry => {
        if (dataCountry.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } else if (dataCountry.length >= 2 && dataCountry.length <= 10) {
            resetMarkup(refs.countryList);
            createMarkupCountryList(dataCountry);
            resetMarkup(refs.countryInfo);
        } else {
            resetMarkup(refs.countryInfo);
            createMarkupCountryInfo(dataCountry);
            resetMarkup(refs.countryList);
        }
    }).catch(() => {
        resetMarkup(refs.countryList);
        resetMarkup(refs.countryInfo);
        Notiflix.Notify.failure('Oops, there is no country with that name.');
    });
        