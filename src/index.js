import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl'
import './index.css';
import SeriesList from './components/seriesList'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Graph from './components/graph';

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
};

let imgErrors = {
  'es': "hubo un problema mientras cargaba la imagen",
  'en': "Error while loading the image."
};

const language = navigator.language.split('-')[0];

fetch("https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json")
.then((res) => res.json())
.then((res) => {
  const es = res;
  fetch("https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json")
  .then((res) => res.json())
  .then((res) => {
    const en = res;
    const messages ={
      'es' : es,
      'en' : en
    };
    ReactDOM.render(
      <IntlProvider locale ={language} messages = {{'series':messages[language], 'titles':titles[language], 'imgErrors':imgErrors[language]}}>
        <App/>
        <SeriesList/>
        <Graph/>
      </IntlProvider>,
      document.getElementById('root')
    );
  });
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
