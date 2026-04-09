export const tableConfig = {
    diak: {
        label: "Diákok",
        fields: [
            { name: "nev", label: "Név", type: "text" },
            { name: "osztaly", label: "Osztály", type: "text" }
        ],
        key: "az"
    },

    rendeles: {
        label: "Rendelések",
        fields: [
            { name: "ev", label: "Év", type: "number" },
            { name: "tkaz", label: "Tankönyv azonosító", type: "number" },
            { name: "diakaz", label: "Diák azonosító", type: "number" },
            { name: "ingyenes", label: "Ingyenes?", type: "checkbox" }
        ],
        key: "az"
    },

    tk: {
        label: "Tankönyvek",
        fields: [
            { name: "kiadoikod", label: "Kiadói kód", type: "text" },
            { name: "cim", label: "Cím", type: "text" },
            { name: "targy", label: "Tantárgy", type: "text" }
        ],
        key: "az"
    },

    tkar: {
        label: "Tankönyvárak",
        fields: [
            { name: "ev", label: "Év", type: "number" },
            { name: "tkaz", label: "Tankönyv azonosító", type: "number" },
            { name: "ertek", label: "Érték", type: "number" }
        ],
        key: ["ev", "tkaz"] // összetett kulcs
    }
};
