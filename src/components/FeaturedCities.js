import React from 'react';
import CityCard from './CityCard';

const FeaturedCities = (props) => (
    <>
        <div className="row">
            <div className="col-12">
              <h3>Featured Cities</h3>
            </div>
        </div>
        <div className="row">
            { props.bayiasam.map(kotal => (
              <CityCard key={kotal.id} katipung={kotal} />
            ))}
        </div>
    </>
)
export default FeaturedCities;