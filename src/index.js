import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl'
import './index.css';
import App from './App';
import SeriesList from './components/seriesList'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import messages_es from './locale/series-es.json'
import messages_en from './locale/series-es.json'

let messages = {
  'es': messages_es,
  'en': messages_en
}

const language = navigator.language.split('-')[0]

ReactDOM.render(
  <IntlProvider locale ={language} messages = {messages[language]}>
    {console.log(language)}
    <SeriesList/>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
