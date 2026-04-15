import { useContext } from "react";
import { DataContext } from '../../context/DataContext';
import '../styles/divstyles.css'
import '../styles/textstyles.css'
import { tableConfig } from "../data/tableConfig";

/* Működési magyarázat a Create.js fáljban. */

export default function Read({ table }) {
    const { diak, rendeles, tk, tkar } = useContext(DataContext);

    const dataMap = { diak, rendeles, tk, tkar };
    const data = dataMap[table];
    const config = tableConfig[table];

    return (
        <div className="container v">
            <h2>{config.label} – Lista</h2>
            <ul>
                {data.map((row, i) => (
                    <li key={i}>
                        {config.fields.map(f => (
                            <div className="leftAligned" key={f.name}>
                                <strong>{f.label}:</strong> 
                                <span className="aligned">
                                    {String(row[f.name])}{" "}
                                </span>
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
}
