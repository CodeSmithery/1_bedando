import { React, useContext, useState } from 'react';
import '../styles/App.css';
import '../styles/divstyles.css'


import TableSelector from "../ui/TableSelector";
import CRUDSelector from "../ui/CRUDSelector";

import Read from '../crud/Read.js';
import Create from '../crud/Create.js';
import Update from "../crud/Update.js";
import Delete from "../crud/Delete.js";

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
        <div className='container v'>
            <a href='http://nje.tankonyvrendeles.nhely.hu/'>
                <button className='mainMenu'>Föoldal</button>
            </a>
            {/* 1. lépés: tábla választás */}
            {!selectedTable && (
                <TableSelector onSelect={setSelectedTable} />
            )}

            {/* 2. lépés: művelet válastás */}
            {selectedTable && !selectedAction && (
                <CRUDSelector 
                    onSelect={setSelectedAction} 
                    onBack={resetToTables}
                />
            )}

            {/* 3. lépés: UI megjelenítés */}
            {selectedTable && selectedAction && (
                <div className='container v'>
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
                    <div className='return'>
                    <button className='menu return' onClick={resetToActions}>Vissza</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainApp;
