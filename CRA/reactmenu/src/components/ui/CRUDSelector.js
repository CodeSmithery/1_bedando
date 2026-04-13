import '../styles/divstyles.css'
import '../styles/button.css'

export default function CRUDSelector({ onSelect, onBack }) { /*  */
    return (
        <div className="container v">
            <h2>Válassz műveletet</h2>
            <div className="contianer h">
                <button className="menu select" onClick={() => onSelect("create")}>Create</button>
                <button className="menu select" onClick={() => onSelect("read")}>Read</button>
            </div>
            <div className="contianer h">
                <button className="menu select" onClick={() => onSelect("update")}>Update</button>
                <button className="menu select" onClick={() => onSelect("delete")}>Delete</button>
            </div>
            <div className="return">
                <button className="menu return" onClick={onBack}>Vissza</button>
            </div>
        </div>
    );
}