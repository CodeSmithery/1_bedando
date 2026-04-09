// LOGIN
function login() {
    let username = document.getElementById("username")?.value;
    let password = document.getElementById("password")?.value;

    if (username?.trim() === "Figura Kristof" && password?.trim() === "beadando") {
        window.location.href = "crud.html";
    } else {
        let error = document.getElementById("error");
        if (error) error.innerText = "Invalid username or password!";
    }
}


// DATA ARRAY
let students = [
    { name: "Török Nóra", class: "2001B" },
    { name: "Molnár Róbert", class: "2002A" },
    { name: "Szabó Ádám", class: "2002B" },
    { name: "Blazsetics Olga", class: "2003B" },
    { name: "Bodosi János", class: "2005A" }
];


// CREATE
function addStudent() {
    let name = document.getElementById("newName")?.value;
    let className = document.getElementById("newClass")?.value;

    if (!name || !className) {
        alert("Please fill in all fields!");
        return;
    }

    students.push({ name, class: className });

    document.getElementById("newName").value = "";
    document.getElementById("newClass").value = "";

    render();
}


// READ
function render() {
    let list = document.getElementById("list");
    if (!list) return;

    list.innerHTML = "";

    if (students.length === 0) {
        list.innerHTML = "<li>No data available</li>";
        return;
    }

    students.forEach((d, index) => {
        list.innerHTML += `
            <li>
                ${d.name} (${d.class})
                <button onclick="deleteStudent(${index})">Delete</button>
                <button onclick="editStudent(${index})">Edit</button>
            </li>
        `;
    });
}


// DELETE
function deleteStudent(index) {
    students.splice(index, 1);
    render();
}


// UPDATE
function editStudent(index) {
    let newName = prompt("New name:", students[index].name);
    let newClass = prompt("New class:", students[index].class);

    if (newName && newClass) {
        students[index].name = newName;
        students[index].class = newClass;
        render();
    }
}


window.onload = function () {
    render();
};