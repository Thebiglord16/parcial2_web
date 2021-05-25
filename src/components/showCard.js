import React from 'react'
import './showCard.css'
const Show = (props) =>{
    if (props.serie !== undefined){
        return(
            <div className="card">
                <img className="card-img-top" src={props.serie.poster} alt ={props.serie.name} ></img>
                <div className="card-body">
                    <p className="card-text">
                        {props.serie.description}
                    </p>
                    <br/>
                    <a className="card-text" href={props.serie.webpage}>
                        {props.serie.webpage}
                    </a>
                </div>
            </div>
        );
    }
    else{
        return(
            <div></div>
        )
    }
};

export default Show;