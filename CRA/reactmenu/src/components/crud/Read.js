import { useContext } from "react";
import { DataContext } from '../../context/DataContext';
import '../styles/divstyles.css'
import { tableConfig } from "../data/tableConfig";

/* Működési magyarázat a Create.js fáljban. */

export default function Read({ table }) {
    const { diak, rendeles, tk, tkar } = useContext(DataContext);

    const dataMap = { diak, rendeles, tk, tkar };
    const data = dataMap[table];
    const config = tableConfig[table];

    return (
        <div>
            <h2>{config.label} – Lista</h2>

            <ul>
                {data.map((row, i) => (
                    <li key={i}>
                        {config.fields.map(f => (
                            <span key={f.name}>
                                <strong>{f.label}:</strong> {String(row[f.name])}{" "}
                            </span>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
}
