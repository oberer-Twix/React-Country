import React, {useEffect, useState} from "react";
import CountryInterface from "../interfaces/CountryInterface";
import Country from "../components/Country";

export default function Countries() {

    const [countries, setCountries] = useState<CountryInterface[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await fetchCountries();
        }

        fetchData();
    }, []);

    async function fetchCountries() {
        setLoading(true);
        let res: Response = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setLoading(false);
        setCountries(data);
    }

    function pushToDetails(name:string){
        window.location.href = `CountryDetails/${name}`;
    }

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && <div className="flexing">
                {countries.map(country => <div className="container">
                    <Country key={country.name.common} country={country} onPressed={pushToDetails}/>
                </div>)}
            </div>}
        </div>
    )
}