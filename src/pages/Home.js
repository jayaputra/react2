import React, {component, Component} from 'react';
import FeaturedCities from '../components/FeaturedCities';
import ImageandWelcome from '../components/ImageandWelcome';

class Home extends Component {
    render () {
         /*Array*/
        const citiesDummy = [
            {id: 72, name: "Jakarta", country_name: "Indonesia"},
            {id: 11052, name: "Bandung", country_name: "Indonesia"},
            {id: 170, name: "Bali", country_name: "Indonesia"}
        ];
        return(
            <>
                <ImageandWelcome />
                
                    <div className="container-fluid my-3">
                    <FeaturedCities bayiasam={citiesDummy} />
                </div>
            </>
        )
    }
}

export default Home;