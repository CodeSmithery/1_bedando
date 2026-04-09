import React from "react";

export default function TableSelector({ onSelect }) { /* kiválasztja melyik táblából fog dolgozni és ennek értékét átadja kattintáskor */
    return (
        <div>
            <h2>Válassz táblát</h2>
            <button onClick={() => onSelect("diak")}>Diákok</button>
            <button onClick={() => onSelect("rendeles")}>Rendelések</button>
            <button onClick={() => onSelect("tk")}>Tankönyvek</button>
            <button onClick={() => onSelect("tkar")}>Tankönyvárak</button>
        </div>
    );
}
