import React from "react";

export default function TableSelector({ onSelect }) {
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
