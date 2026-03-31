import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [books, setBooks] = useState ([]);
 
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [publisher, setPublisher] = useState("");

   useEffect(() => {
  fetch("./tk.txt")
    .then(res => {
      if (!res.ok) throw new Error("File not found");
      return res.text();
    })
    .then(text => {
      const lines = text.split("\n").slice(1);

      const loadedBooks = lines
        .filter(line => line.trim() !== "")
        .map((line, index) => {
          const parts = line.split("\t");

          return {
            id: index + 1,
            title: parts[2],
            subject: parts[3],
            publisher: parts[1]
          };
        });

      console.log("LOADED BOOKS:", loadedBooks);
      setBooks(loadedBooks);
    })
    .catch(err => console.error("ERROR:", err));
}, []);


  const addBook = () => {
    if (!title || !subject || !publisher) {
      alert("Fill all fields!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      subject,
      publisher
    };

    setBooks([...books, newBook]);

    setTitle("");
    setSubject("");
    setPublisher("");
  };


  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

 
  const editBook = (id) => {
  const book = books.find(b => b.id === id);

  const newTitle = prompt("New title:", book.title);
  const newSubject = prompt("New subject:", book.subject);
  const newPublisher = prompt("New publisher:", book.publisher);

  if (newTitle && newSubject && newPublisher) {
    setBooks(
      books.map(b =>
        b.id === id
          ? { ...b, title: newTitle, subject: newSubject, publisher: newPublisher }
          : b
      )
    );
  }
};

  return (
    <div className="container">
      <h1>📚 Book Management</h1>

      <div className="form">
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />

        <input
          placeholder="Publisher"
          value={publisher}
          onChange={e => setPublisher(e.target.value)}
        />

        <button onClick={addBook}>Add</button>
      </div>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            <span>
              {book.title} ({book.subject}) - {book.publisher}
            </span>

            <div>
              <button className="delete" onClick={() => deleteBook(book.id)}>Delete</button>
              <button className="edit" onClick={() => editBook(book.id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;