import React from "react";
import CountryInterface from "../interfaces/CountryInterface";

type Props = {
    country: CountryInterface;
    onPressed: (name: string) => void;
}

export default function Country({country, onPressed}: Props) {
    function getArrayAsStrign(length: number, array: string[]): string {
        if (array.length > length) {
            array.length = length;
            array.push("...");
        }
        return array.join(", ");
    }

    return (
        <div className="box" onClick={() => onPressed(country.name.common)}>
            <div className="image">
                <img src={country.flags.png} alt="flag" className="img" loading="lazy"/>
            </div>
            <div className="content">
                <table>
                    <tbody>
                    <tr>
                        <td className="subject">Land:</td>
                        <td>{country.name.common}</td>
                    </tr>
                    {country.capital && <tr>
                        <td className="subject">Hauptstadt:</td>
                        <td>
                            {country.capital[0]}
                        </td>
                    </tr>}
                    {country.languages && <tr>
                        <td className="subject">Sprache(n):</td>
                        <td>{getArrayAsStrign(4, Object.values(country.languages))}</td>
                    </tr>}
                    <tr>
                        <td className="subject">Fläche:</td>
                        <td>{country.area} km²</td>
                    </tr>
                    <tr>
                        <td className="subject">Einwohner:</td>
                        <td>{country.population}</td>
                    </tr>
                    <tr>
                        <td className="subject">Subregion:</td>
                        <td>{country.subregion}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}