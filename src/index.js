import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl'
import './index.css';
import SeriesList from './components/seriesList'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import messages_es from './locale/series-es.json'
import messages_en from './locale/series-en.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
let messages = {
  'es': messages_es,
  'en': messages_en
}
let titles={
  'es':{
    'numeral':"#",
    'name':'Nombre',
    'channel':'Canal',
    'seasons':'Temporadas',
    'episodes':'Episodios',
    'release':'Fecha de lanzamiento'
  },
  'en':{
    'numeral':"#",
    'name':'Name',
    'channel':'Channel',
    'seasons':'Seasons',
    'episodes':'Episodes',
    'release':'Release Date'
  }
}

const language = navigator.language.split('-')[0]

ReactDOM.render(
  <IntlProvider locale ={language} messages = {{'series':messages[language], 'titles':titles[language]}}>
    {console.log(language)}
    <App/>
    <SeriesList/>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
