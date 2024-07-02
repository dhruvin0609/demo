import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from '../components/BookList';

export default function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>

          <Route path="/" element={<h1 className="text-3xl font-bold underline">Hello world!</h1>} />
        </Routes>
        <Routes>
          <Route path="/books" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}
