
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from '../components/BookList';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://demo-1jjr.onrender.com/api/books/')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (<>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <h2 className="text-2xl font-bold">Book List</h2>
    <ul>
      {books.map(book => (
        <li key={book._id} className="my-2">
          <h3 className="text-xl">{book.title}</h3>
          <p>{book.isbn}</p>
        </li>
      ))}
    </ul>
  </>
  );
}
