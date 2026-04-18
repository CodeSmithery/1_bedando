
//  ALAP BEÁLLÍTÁSOK
const API_URL = "api.php";

// DOM elemek
const tableBody = document.querySelector("#diakTableBody");
const form = document.querySelector("#diakForm");
const azInput = document.querySelector("#az");
const nevInput = document.querySelector("#nev");
const osztalyInput = document.querySelector("#osztaly");
const submitBtn = document.querySelector("#submitBtn");

let editMode = false;   // false = új, true = módosítás


//  LISTA BETÖLTÉSE
async function loadDiakok() {
    const res = await fetch(API_URL);
    const data = await res.json();

    tableBody.innerHTML = "";

    data.forEach(diak => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${diak.az}</td>
            <td>${diak.nev}</td>
            <td>${diak.osztaly}</td>
            <td>
                <button class="editBtn" data-id="${diak.az}">✏️</button>
                <button class="deleteBtn" data-id="${diak.az}">🗑️</button>
            </td>
        `;

        tableBody.appendChild(tr);
    });

    addEventListeners();
}


//  ESEMÉNYEK HOZZÁADÁSA
function addEventListeners() {
    document.querySelectorAll(".editBtn").forEach(btn => {
        btn.addEventListener("click", () => startEdit(btn.dataset.id));
    });

    document.querySelectorAll(".deleteBtn").forEach(btn => {
        btn.addEventListener("click", () => deleteDiak(btn.dataset.id));
    });
}

//  HOZZÁADÁS / MÓDOSÍTÁS
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const diak = {
        az: azInput.value,
        nev: nevInput.value,
        osztaly: osztalyInput.value
    };

    if (!editMode) {
        // CREATE
        await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(diak)
        });
    } else {
        // UPDATE
        await fetch(API_URL, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(diak)
        });

        editMode = false;
        submitBtn.textContent = "Hozzáadás";
    }

    form.reset();
    loadDiakok();
});


//  MÓDOSÍTÁS INDÍTÁSA
async function startEdit(az) {
    const res = await fetch(API_URL);
    const data = await res.json();

    const diak = data.find(d => d.az == az);

    azInput.value = diak.az;
    nevInput.value = diak.nev;
    osztalyInput.value = diak.osztaly;

    editMode = true;
    submitBtn.textContent = "Módosítás";
}

//  TÖRLÉS
async function deleteDiak(az) {
    if (!confirm("Biztosan törlöd?")) return;

    await fetch(API_URL, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ az })
    });

    loadDiakok();
}


//  OLDAL BETÖLTÉSEKOR
loadDiakok();
