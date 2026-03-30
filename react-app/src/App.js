import { useState } from "react";
import "./App.css";

function App() {

  const [books, setBooks] = useState
  ([
    { id: 1, title: "Kémia 9.", subject: "kémia", publisher: "DW-695-2822-1" },
    { id: 2, title: "Matematika 9.", subject: "matematika", publisher: "SH-2309" },
    { id: 3, title: "Négyjegyű függvénytáblázat", subject: "matematika", publisher: "BB-0319" },
    { id: 4, title: "Geometriai feladatgyűjtemény I.", subject: "matematika", publisher: "NK-10127/I" },
    { id: 5, title: "Történelem I.", subject: "történelem", publisher: "NK-13163/1" }
  ]);

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [publisher, setPublisher] = useState("");

  // CREATE
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

  // DELETE

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // UPDATE
 
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