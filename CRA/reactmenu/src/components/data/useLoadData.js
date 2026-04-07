import { DiakJSON, RendelesJSON, TkJSON, TkarJSON } from "./json_creation";
import { useEffect, useState } from "react";

export function useLoadData() {
    const [diakok, setDiakok] = useState([]);
    const [rendelesek, setRendelesek] = useState([]);
    const [tk, setTk] = useState([]);
    const [tkar, setTkar] = useState([]);

    useEffect(() => {
        Promise.all([
            DiakJSON(),
            RendelesJSON(),
            TkJSON(),
            TkarJSON()
        ]).then(([D, R, T, Ta]) => {
            setDiakok(D);
            setRendelesek(R);
            setTk(T);
            setTkar(Ta);
        });
    }, []);

    return { diakok, rendelesek, tk, tkar };
}
