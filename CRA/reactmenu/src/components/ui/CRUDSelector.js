export default function CRUDSelector({ onSelect, onBack }) {
    return (
        <div>
            <h2>Válassz műveletet</h2>

            <button onClick={() => onSelect("create")}>Create</button>
            <button onClick={() => onSelect("read")}>Read</button>
            <button onClick={() => onSelect("update")}>Update</button>
            <button onClick={() => onSelect("delete")}>Delete</button>

            <br /><br />
            <button onClick={onBack}>Vissza</button>
        </div>
    );
}
