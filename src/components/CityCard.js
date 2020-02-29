import React from 'react';

const CityCard = (props) => (
    <div className="col-md-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h3 className="card-title">{props.katipung.name}</h3>
                <p>{props.katipung.country_name}</p>
                <a href="#" className="card-text">See restaurant in {props.katipung.name}</a>
            </div>
        </div>
    </div>
);

export default CityCard;