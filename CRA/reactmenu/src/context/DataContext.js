import { createContext, useState, useEffect } from "react";
import { DiakJSON, RendelesJSON, TkJSON, TkarJSON } from "../components/data/json_creation";

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [diak, setDiak] = useState([]);
    const [rendeles, setRendeles] = useState([]);
    const [tk, setTk] = useState([]);
    const [tkar, setTkar] = useState([]);

    // Betöltés induláskor
    useEffect(() => {
    DiakJSON().then(data => {
        console.log("Diákok betöltve:", data);
        setDiak(data);
    });

    RendelesJSON().then(data => {
        console.log("Rendelések betöltve:", data);
        setRendeles(data);
    });

    TkJSON().then(data => {
        console.log("Tankönyvek betöltve:", data);
        setTk(data);
    });

    TkarJSON().then(data => {
        console.log("Tankönyvárak betöltve:", data);
        setTkar(data);
    });
}, []);


    const value = {
        diak, setDiak,
        rendeles, setRendeles,
        tk, setTk,
        tkar, setTkar
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}
