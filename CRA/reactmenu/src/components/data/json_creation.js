export function DiakJSON() {
    return fetch('/reactapp/data/diak.txt')
        .then(r => r.text())
        .then(text =>
            text
                .trim()
                .split('\n')
                .slice(1)              // fejléc kihagyása
                .map(line => line.trim())
                .filter(Boolean)       // üres sorok kiszűrése
                .map(line => {
                    const p = line.split('\t');
                    return {
                        az: Number(p[0]),
                        nev: p[1],
                        osztaly: p[2]
                    };
                })
        );
}


export function RendelesJSON() {
    return fetch('/reactapp/data/rendeles.txt')
        .then(r => r.text())
        .then(text =>
            text
                .trim()
                .split('\n')
                .slice(1)
                .map(line => line.trim())
                .filter(Boolean)
                .map(line => {
                    const p = line.split('\t');
                    return {
                        az: Number(p[0]),
                        ev: Number(p[1]),
                        tkaz: Number(p[2]),
                        diakaz: Number(p[3]),
                        ingyenes: p[4] === "1"
                    };
                })
        );
}


export function TkJSON() {
    return fetch('/reactapp/data/tk.txt')
        .then(r => r.text())
        .then(text =>
            text
                .trim()
                .split('\n')
                .slice(1)
                .map(line => line.trim())
                .filter(Boolean)
                .map(line => {
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


export function TkarJSON() {
    return fetch('/reactapp/data/tkar.txt')
        .then(r => r.text())
        .then(text =>
            text
                .trim()
                .split('\n')
                .slice(1)
                .map(line => line.trim())
                .filter(Boolean)
                .map(line => {
                    const p = line.split('\t');
                    return {
                        ev: Number(p[0]),
                        tkaz: Number(p[1]),
                        ertek: Number(p[2])
                    };
                })
        );
}