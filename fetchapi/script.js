const API_URL = "http://nje.tankonyvrendeles.nhely.hu/api.php/";

const tableBody = document.querySelector("#tkTableBody");
const form = document.querySelector("#tkForm");

const titleInput = document.querySelector("#title");
const subjectInput = document.querySelector("#subject");
const publisherInput = document.querySelector("#publisher");

const submitBtn = document.querySelector("#submitBtn");

let editId = null;


//  LISTA BETÖLTÉSE
async function loadBooks() {
    const res = await fetch(API_URL);
    const data = await res.json();

    tableBody.innerHTML = "";

    data.forEach(book => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.subject}</td>
            <td>${book.publisher}</td>
            <td>
                <button class="editBtn" data-id="${book.id}">✏️</button>
                <button class="deleteBtn" data-id="${book.id}">🗑️</button>
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
        btn.addEventListener("click", () => deleteBook(btn.dataset.id));
    });
}


//  HOZZÁADÁS / MÓDOSÍTÁS
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const book = {
        title: titleInput.value,
        subject: subjectInput.value,
        publisher: publisherInput.value
    };

    if (editId === null) {
        // CREATE
        await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        });
    } else {
        // UPDATE
        await fetch(`${API_URL}?id=${editId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        });

        editId = null;
        submitBtn.textContent = "Hozzáadás";
    }

    form.reset();
    loadBooks();
});


//  MÓDOSÍTÁS INDÍTÁSA
async function startEdit(id) {
    const res = await fetch(API_URL);
    const data = await res.json();

    const book = data.find(b => b.id == id);

    titleInput.value = book.title;
    subjectInput.value = book.subject;
    publisherInput.value = book.publisher;

    editId = id;
    submitBtn.textContent = "Módosítás";
}


//  TÖRLÉS
async function deleteBook(id) {
    if (!confirm("Biztosan törlöd?")) return;

    await fetch(`${API_URL}?id=${id}`, {
        method: "DELETE"
    });

    loadBooks();
}


//  OLDAL BETÖLTÉSEKOR
loadBooks();
