import React from "react"
import {useState} from 'react'
import {useIntl} from 'react-intl'
import Serie from "./serie"
import Show from "./showCard"
import './seriesList.css'
const SeriesList = () => {

    const intl = useIntl();
    const series = intl.messages.series;
    const titles = intl.messages.titles;
    console.log(series)
    const [serie, setSerie] = useState()
    return (
      <div className="row">
          <div className="col list">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">{titles.numeral}</th>
                  <th scope="col">{titles.name}</th>
                  <th scope="col">{titles.channel}</th>
                  <th scope="col">{titles.seasons}</th>
                  <th scope="col">{titles.episodes}</th>
                  <th scope="col">{titles.release}</th>
                </tr>
              </thead>
              <tbody>
                {series.map((e, i) => (
                  <Serie key={i} serie={e} detalle={setSerie}/>
                ))}
              </tbody>
            </table>
            <div className="col">
              <Show serie={serie}/>
            </div>
          </div>
        </div>
    );
};

export default SeriesList;