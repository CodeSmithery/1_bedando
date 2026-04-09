import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { tableConfig } from "../../data/tableConfig";

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
        <div>
            <h2>{config.label} – Törlés</h2>

            <ul>
                {data.map(row => (
                    <li key={row[config.key]}>
                        {config.fields.map(f => (
                            <span key={f.name}>
                                <strong>{f.label}:</strong> {String(row[f.name])}{" "}
                            </span>
                        ))}
                        <button onClick={() => handleDelete(row[config.key])}>Törlés</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
