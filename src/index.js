import './css/styles.css';
import { fetchCountries } from './api/fetch';

const baseUrl = 'restcountries.com/v3.1/all';
const EndPointName = 'restcountries.com/v3.1/name/{name}';
const DEBOUNCE_DELAY = 300;
