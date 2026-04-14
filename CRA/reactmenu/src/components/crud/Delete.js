import { useContext } from "react";
import { DataContext } from '../../context/DataContext';
import '../styles/divstyles.css'
import '../styles/textstyles.css'
import { tableConfig } from "../data/tableConfig";

/* Működési magyarázat a Create.js fáljban. */

export default function Delete({ table }) {
    const { diak, setDiak, rendeles, setRendeles, tk, setTk, tkar, setTkar } = useContext(DataContext);

    const dataMap = { diak, rendeles, tk, tkar };
    const setterMap = { diak: setDiak, rendeles: setRendeles, tk: setTk, tkar: setTkar };

    const data = dataMap[table];
    const setData = setterMap[table];
    const config = tableConfig[table];

    function handleDelete(id) {
        const filtered = data.filter(row => row[config.key] !== id);
        setData(filtered);
    }

    return (
        <div className="container v">
        <h2>{config.label} – Törlés</h2>
            <ul>
                {data.map((row, i) => (
                    <li key={row[config.key]}>
                        {config.fields.map(f => (
                            <div className="leftAligned" key={f.name}>  
                                <span className="">
                                    <strong>{f.label}:</strong> 
                                </span>
                                <span className="aligned">
                                    {String(row[f.name])}
                                </span>  
                                
                            </div>
                        ))}
                        <button className="delete" onClick={() => handleDelete(row[config.key])}>Törlés</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
