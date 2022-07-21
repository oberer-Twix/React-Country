import React, {useEffect, useState} from "react";
import CountryInterface from "../interfaces/CountryInterface";

export default function CountryDetails() {

    const [country, setCountry] = useState<CountryInterface>({} as CountryInterface);
    const [loading, setLoading] = useState<boolean>(true);
    const [raw, setRaw] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        async function fetchData(countryName: string) {
            await fetchCountry(countryName);
            setLoading(false);
        }

        let countryName = window.location.pathname.split("/")[2];

        fetchData(countryName);
    }, []);

    async function fetchCountry(countryName: string) {
        let res: Response = await fetch(
            `https://restcountries.com/v3/name/${countryName}`
        );
        const data: CountryInterface[] = await res.json();
        setCountry(data[0]);
    }

    function getCurrencyAsString() {
        let currencyArray: string[] = [];
        let cur = country.currencies;
        for (const key in cur) {
            if (Object.prototype.hasOwnProperty.call(cur, key)) {
                const element = cur[key];
                currencyArray.push(
                    element.name + " [" + element.symbol + " = " + key + "]"
                );
            }
        }
        return currencyArray.join(", ");
    }

    function getPrettyJson() {
        return JSON.stringify(country, undefined, 4);
    }

    return (
        <>
            {loading && <div>Loading...</div>}
            {!loading && <div className="details">
                <div className="detailContent">
                    <h1>{country.name.common}</h1>
                    <input type={"button"} onClick={() => setRaw(!raw)}
                           value={raw ? "switch to clear" : "switch to raw"}/>
                    <br/>
                    {!raw && <table>
                        <tbody>
                        <tr>
                            <td className="subject">Hauptstadt:</td>
                            {country.capital && <td>{country.capital[0]}</td>}
                        </tr>
                        <tr>
                            <td className="subject">Sprache(n):</td>
                            {country.languages && <td>
                                {Object.values(country.languages).join(", ")}
                            </td>}
                        </tr>
                        <tr>
                            <td className="subject">Fläche:</td>
                            <td>{country.area} km²</td>
                        </tr>
                        <tr>
                            <td className="subject">Einwohner:</td>
                            <td>{country.population}</td>
                        </tr>

                        <tr>
                            <td className="subject">Kontinent:</td>
                            <td>{country.region}</td>
                        </tr>
                        <tr>
                            <td className="subject">Subregion:</td>
                            <td>{country.subregion}</td>
                        </tr>
                        <tr>
                            <td className="subject">Status:</td>
                            <td>{country.status}</td>
                        </tr>
                        <tr>
                            <td className="subject">Unabhängig:</td>
                            <td>{country.independent}</td>
                        </tr>
                        <tr>
                            <td className="subject">Un-Mitglied:</td>
                            <td>{country.unMember}</td>
                        </tr>
                        {country.currencies && <tr>
                            <td className="subject">Währung</td>
                            <td>{getCurrencyAsString()}</td>
                        </tr>}
                        {country.car.signs && <tr>
                            <td className="subject">KFZ-Kennzeichen:</td>
                            <td>
                                {country.car.signs.join(", ") + " -- " + country.car.side}
                            </td>
                        </tr>}
                        {country.borders && <tr>
                            <td className="subject">Nachbarländer:</td>
                            <td>{(country.borders).join(", ")}</td>
                        </tr>}
                        {country.postalCode && <tr>
                            <td className="subject">Post-Code:</td>
                            <td>{country.postalCode.format}</td>
                        </tr>}
                        </tbody>
                    </table>}
                    {raw && <textarea>
                        {getPrettyJson()}
                    </textarea>}
                </div>
                {country.flags && <div className="image">
                    <img src={Object.values(country.flags)[0]} alt="flag" id="img" className="flag"/> {/*wegen komischer api*/}
                </div>}
            </div>}
        </>
    );
}