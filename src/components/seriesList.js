import React, {useState} from "react"
import {useIntl} from 'react-intl'
import Serie from "./serie"

const SeriesList = () => {

    const intl = useIntl();
    const series = intl.messages;
    return (
        <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Channel</th>
              <th scope="col">Seasons</th>
              <th scope="col">Episodes</th>
              <th scope="col">Release date</th>
            </tr>
          </thead>
          <tbody>
            {console.log("series", series[0])}
            {series.map((e, i) => (
              <Serie key={i} serie={e} />
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default SeriesList;