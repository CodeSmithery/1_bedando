import { useContext, useState } from "react";
import { DataContext } from '../../context/DataContext';
import '../styles/divstyles.css'
import '../styles/textstyles.css'
import { tableConfig } from "../data/tableConfig"; /* megmondja az adott tábla milyen mezőkből áll */

export default function Create({ table }) {
    const { diak, setDiak, rendeles, setRendeles, tk, setTk, tkar, setTkar } = useContext(DataContext); /* kiemeljük contextből a tábla adatait és hozzárakjuk a settereket */

    const dataMap = { diak, rendeles, tk, tkar }; /* lehetséges táblák */
    const setterMap = { diak: setDiak, rendeles: setRendeles, tk: setTk, tkar: setTkar }; /* táblához rendelt setfüggvény */

    const data = dataMap[table]; /* beadjuk a megfelelő táblát */
    const setData = setterMap[table]; /* visszaadja a jó settert */

    const config = tableConfig[table]; /* megadja a tábla struktúrát és, hogy mi a kulcs */

    const [form, setForm] = useState( /* üres mezős form-ot készít a mezők függvényében */
        Object.fromEntries(config.fields.map(f => [f.name, ""]))
    ); 

    function handleChange(e, field) { /* frissíti az állapotot, ha chechbox akkor bool ha nem akkr string/number */
        const value = field.type === "checkbox" ? e.target.checked : e.target.value;
        setForm({ ...form, [field.name]: value });
    }

    function handleSubmit(e) { /* nem tölti újra az oldal */
        e.preventDefault();

        const newId = /* megkeresi a legnagyobb azonosítót és ha nincs 1-et állít be */
            data.length > 0
                ? Math.max(...data.map(d => d[config.key])) + 1
                : 1;

        const newRow = { ...form, [config.key]: newId }; /* elkészíti az új egyedet a form alapján az új azonosítóval */

        setData([...data, newRow]); /* visszaadja a DataContext-be */

        setForm(Object.fromEntries(config.fields.map(f => [f.name, ""]))); /* kiűríti a formot */
    }

    return (
        <div className="container v"> {/* dinamikusan kitölti a form-ot */}
            <h2>{config.label} – Új elem hozzáadása</h2>
            <div className="container v">
                <form onSubmit={handleSubmit}>
                    {config.fields.map(field => (
                        <div className="container" key={field.name}>
                            <input
                                type={field.type}
                                value={form[field.name]}
                                onChange={e => handleChange(e, field)}
                                placeholder={field.label}
                            />
                        </div>
                    ))}
                    <div className="container">
                        <button className="submit" type="submit" >Hozzáadás</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
