import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';

const App = () => (
  <div className="main">
    <section>
      <Navbar />
      <Routes>
        <Route exact path="/">
          <BooksPage />
          <Form />
        </Route>
        <Route path="/categories">
          <CategoryPage />
        </Route>
      </Routes>
    </section>
    <section>
      <Footer />
    </section>
  </div>
);

export default App;
