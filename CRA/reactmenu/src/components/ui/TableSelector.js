import React from "react";
import '../styles/divstyles.css'
import '../styles/button.css'

export default function TableSelector({ onSelect }) { /* kiválasztja melyik táblából fog dolgozni és ennek értékét átadja kattintáskor */
    return (
        <div className="container v">
            <h2>Válassz táblát</h2>
            <div className="contianer h">
                <button className="menu select" onClick={() => onSelect("diak")}>Diákok</button>
                <button className="menu select" onClick={() => onSelect("rendeles")}>Rendelések</button>
            </div>
            <div className="contianer h">
                <button className="menu select" onClick={() => onSelect("tk")}>Tankönyvek</button>
                <button className="menu select" onClick={() => onSelect("tkar")}>Tankönyvárak</button>
            </div>
        </div>
    );
}
