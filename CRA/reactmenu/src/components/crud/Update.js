import { useContext, useState } from "react";
import { DataContext} from '../../context/DataContext';
import '../styles/divstyles.css'
import '../styles/textstyles.css'
import { tableConfig } from "../data/tableConfig";

/* Működési magyarázat a Create.js fáljban. */

export default function Update({ table }) {
    const { diak, setDiak, rendeles, setRendeles, tk, setTk, tkar, setTkar } = useContext(DataContext);

    const dataMap = { diak, rendeles, tk, tkar };
    const setterMap = { diak: setDiak, rendeles: setRendeles, tk: setTk, tkar: setTkar };

    const data = dataMap[table];
    const setData = setterMap[table];
    const config = tableConfig[table];

    const [selected, setSelected] = useState(null);
    const [form, setForm] = useState({});

    function selectRow(row) {
        setSelected(row);
        setForm(row);
    }

    function handleChange(e, field) {
        const value = field.type === "checkbox" ? e.target.checked : e.target.value;
        setForm({ ...form, [field.name]: value });
    }

    function handleSave() {
        const updated = data.map(row =>
            row[config.key] === selected[config.key] ? form : row
        );
        setData(updated);
        setSelected(null);
    }

    return (
        <div className="container v">
            <h2>{config.label} – Módosítás</h2>
            {!selected && (
                <ul>
                    {data.map(row => (
                        <li key={row[config.key]}>
                            {config.fields.map(f => (
                                <div className="leftAligned">
                                    <strong>{f.label}:</strong> 
                                    <span className="aligned">
                                        {String(row[f.name])}{" "}
                                    </span>
                                </div>
                            ))}
                            <button className="modify" onClick={() => selectRow(row)}>Szerkesztés</button>
                        </li>
                    ))}
                </ul>
            )}

            {selected && (
                <div className="container v">
                    <h3>Kiválasztott elem szerkesztése</h3>
                    {config.fields.map(field => (
                        <div className="container">
                                <strong className="left">
                                    <label>{field.label}:</label>
                                </strong>
                                <input
                                    className="right"
                                    type={field.type}
                                    value={form[field.name]}
                                    onChange={e => handleChange(e, field)}
                                />
                        </div>
                    ))}
                    <button className="save" onClick={handleSave}>Mentés</button>
                    <button className="cancel" onClick={() => setSelected(null)}>Mégse</button>
                </div>
            )}
        </div>
    );
}
