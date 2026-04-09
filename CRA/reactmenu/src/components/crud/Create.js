import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { tableConfig } from "../../data/tableConfig";

export default function Create({ table }) {
    const { diak, setDiak, rendeles, setRendeles, tk, setTk, tkar, setTkar } = useContext(DataContext);

    const dataMap = { diak, rendeles, tk, tkar };
    const setterMap = { diak: setDiak, rendeles: setRendeles, tk: setTk, tkar: setTkar };

    const data = dataMap[table];
    const setData = setterMap[table];

    const config = tableConfig[table];

    const [form, setForm] = useState(
        Object.fromEntries(config.fields.map(f => [f.name, ""]))
    );

    function handleChange(e, field) {
        const value = field.type === "checkbox" ? e.target.checked : e.target.value;
        setForm({ ...form, [field.name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newId =
            data.length > 0
                ? Math.max(...data.map(d => d[config.key])) + 1
                : 1;

        const newRow = { ...form, [config.key]: newId };

        setData([...data, newRow]);

        setForm(Object.fromEntries(config.fields.map(f => [f.name, ""])));
    }

    return (
        <div>
            <h2>{config.label} – Új elem hozzáadása</h2>

            <form onSubmit={handleSubmit}>
                {config.fields.map(field => (
                    <div key={field.name}>
                        <label>{field.label}:</label>
                        <input
                            type={field.type}
                            value={form[field.name]}
                            onChange={e => handleChange(e, field)}
                        />
                    </div>
                ))}

                <button type="submit">Hozzáadás</button>
            </form>
        </div>
    );
}
