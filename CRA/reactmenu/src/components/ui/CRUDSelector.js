import '../styles/divstyles.css'
import '../styles/button.css'

export default function CRUDSelector({ onSelect, onBack }) { /*  */
    return (
        <div className="container v">
            <h2>Válassz műveletet</h2>
            <div className="contianer h">
                <button className="menu select" onClick={() => onSelect("create")}>Létrehoz</button>
                <button className="menu select" onClick={() => onSelect("read")}>Olvas</button>
            </div>
            <div className="contianer h">
                <button className="menu select" onClick={() => onSelect("update")}>Frissít</button>
                <button className="menu select" onClick={() => onSelect("delete")}>Töröl</button>
            </div>
            <div className="return">
                <button className="menu return" onClick={onBack}>Vissza</button>
            </div>
        </div>
    );
}