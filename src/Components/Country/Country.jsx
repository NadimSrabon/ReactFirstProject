import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry,handleFlags}) => {

    // console.log(country);

    const {name ,flags ,population,area,cca3} = country;


    const [visited , setVisited] = useState(false);

    function handleVisit(){
        setVisited(!visited)
    }

    function passWithParams(){

        handleVisitedCountry(country)

    }

    function passFlag(){
        handleFlags(country.flags.png)
    }

    return ( <div className={`box ${visited && 'bg-orange-200'}`}>
        <h3 style={{ color: visited ? 'purple':'white'}}>Name: {name.common}</h3>
        <img src={flags.png} alt="" />
        <h3>Population: {population}</h3>
        <h3>Area: {area}</h3>
        <h3>Code: {cca3}</h3>
        <button onClick={passWithParams}>Mark Visited</button>
        <br />
        <button onClick={passFlag}>Add Flag</button>
        <br />
        <button onClick={handleVisit}>{visited? 'Visited': 'Going'}</button>
        {visited ? 'I have Visited this Country' : 'I want to visit' }

    </div>
    );
};

export default Country;