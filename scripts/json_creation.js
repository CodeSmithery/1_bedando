function diakJSON() {
    return fetch('diak.txt')
        .then(r => r.text())
        .then(text => 
            text.split('\n').map(line => {
                const p = line.split('\t');
                return {
                    az: Number(p[0]),
                    nev: p[1],
                    osztaly: p[2]
                };
            })
        );
}

function rendelesJSON() {
    return fetch('rendeles.txt')
        .then(r => r.text())
        .then(text => 
            text.split('\n').map(line => {
                const p = line.split('\t');
                return {
                    az: Number(p[0]),
                    ev: Number(p[1]),
                    tkaz: Number(p[2]),
                    diakaz: Number(p[3]),
                    ingyenes: p[4] === "1" // boolean érték, true ha ingyenes, false ha nem
                };
            })
        );
}

function tkJSON() {
    return fetch('tk.txt')
        .then(r => r.text())
        .then(text => 
            text.split('\n').map(line => {
                const p = line.split('\t');
                return {
                    az: Number(p[0]),
                    kiadoikod: p[1],
                    cim: p[2],
                    targy: p[3]
                };
            })
        );
}

function tkarJSON() {
    return fetch('tkar.txt')
        .then(r => r.text())
        .then(text => 
            text.split('\n').map(line => {
                const p = line.split('\t');
                return {
                    ev: Number(p[0]),
                    tkaz: Number(p[1]),
                    ertek: Number(p[2])
                };
            })
        );
}