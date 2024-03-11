import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import { list } from "postcss";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect( () => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    } , [])

    function handleVisitedCountry(country){
        
        const newVisitedCountry = [...visitedCountries,country]

        setVisitedCountries(newVisitedCountry)
    }


    function handleFlags(flag){
        const newVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags)
    }
    console.log(visitedFlags);

    return ( <div >
        <h3 className="text-7xl">Country : {countries.length}</h3>

        <div>
            <h3>Visited Countries : {visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ul>
        </div>
        <div>
            {
                visitedFlags.map(flag => <img className="h-20 w-32" src={flag}></img>)
            }
        </div>

        <div className="grid grid-cols-3">
        {
            countries.map(country => <Country country={country} handleVisitedCountry={handleVisitedCountry} handleFlags={handleFlags}></Country>)
        }
        </div>
    </div>
    );
};

export default Countries;