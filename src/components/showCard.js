import React from 'react'
import './showCard.css'
const Show = (props) =>{
    const carTop = ()=>{
        if(navigator.onLine){
            return(
                <img className="card-img-top" src={props.serie.poster} alt ={props.imgErrors} ></img>
            )
        }
        else{
            return(
                <p className="card-text">
                        {props.imgErrors}
                    </p>
            )
        }
    }
    if (props.serie !== undefined){
        return(
            <div className="card">
                {carTop()}
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