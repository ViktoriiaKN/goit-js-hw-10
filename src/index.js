import './css/styles.css';
import { fetchCountries } from './api/fetch';
import { debounce } from 'lodash.debounce';
import {Notiflix} from 'notiflix';


const DEBOUNCE_DELAY = 300;



