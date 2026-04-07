import React, { useContext, useState } from 'react';
import '../styles/divstyles.css'
import CRUDButton from '../CRUDButton.js'
import '../styles/button.css'

const originalTexts = [
    "Létrehoz",
    "Olvas",
    "Frissít",
    "Töröl"
];

export default function StartLayout() {
    const [texts, setTexts] = useState(originalTexts);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const changeText = (index) => {
        setTexts(originalTexts.map((text, i) =>
            i === index ? `${text}\n(aktív)` : text
        ));
        setSelectedIndex(index);
    }

    return (
        <div className="container v">
            <div className="container h">
                <div className="container button">
                    <CRUDButton text={texts[0]} onClick={() => changeText(0)} selected={selectedIndex === 0}/>
                    <CRUDButton text={texts[1]} onClick={() => changeText(1)} selected={selectedIndex === 1}/>
                    <CRUDButton text={texts[2]} onClick={() => changeText(2)} selected={selectedIndex === 2}/>
                    <CRUDButton text={texts[3]} onClick={() => changeText(3)} selected={selectedIndex === 3}/>
                </div>
                <div className="container v">
                    <div className='container h'>
                    </div>
                </div>
            </div>
        </div>
    )
}
