import { React, useContext, useState } from 'react';
import '../styles/App.css';
import '../styles/divstyles.css'

import TableSelector from "../ui/TableSelector";
import CRUDSelector from "../ui/CRUDSelector";

import Read from '../crud/Read';
import Create from '../crud/Create';
import Update from "../crud/Update";
import Delete from "../crud/Delete";

function MainApp() {
    const [selectedTable, setSelectedTable] = useState(null);
    const [selectedAction, setSelectedAction] = useState(null);

    function resetToTables() {
        setSelectedTable(null);
        setSelectedAction(null);
    }

    function resetToActions() {
        setSelectedAction(null);
    }

    return (
        <div style={{ padding: "20px" }}>
            
            {/* 1. lépés: tábla választás */}
            {!selectedTable && (
                <TableSelector onSelect={setSelectedTable} />
            )}

            {/* 2. lépés: CRUD választás */}
            {selectedTable && !selectedAction && (
                <CRUDSelector 
                    onSelect={setSelectedAction} 
                    onBack={resetToTables}
                />
            )}

            {/* 3. lépés: CRUD UI megjelenítése */}
            {selectedTable && selectedAction && (
                <div>
                    <button onClick={resetToActions}>Vissza</button>

                    {selectedAction === "read" && (
                        <Read table={selectedTable} />
                    )}

                    {selectedAction === "create" && (
                        <Create table={selectedTable} />
                    )}

                    {selectedAction === "update" && (
                        <Update table={selectedTable} />
                    )}

                    {selectedAction === "delete" && (
                        <Delete table={selectedTable} />
                    )}
                </div>
            )}
        </div>
    );
}

export default MainApp;
