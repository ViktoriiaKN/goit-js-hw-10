import './css/styles.css';

fetch('https://restcountries.com/v3.1/all').then(resp => resp.json()).then(data => console.log(data))

const DEBOUNCE_DELAY = 300;
