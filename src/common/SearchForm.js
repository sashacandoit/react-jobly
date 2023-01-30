import React, { useState } from "react";
import { CssBaseline, Container } from '@mui/material';
import "./SearchForm.css"

const SearchForm = ({ searchFor }) => {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    searchFor(term.trim() || undefined);
    setTerm(term.trim());
  }

  function handleChange(e) {
    setTerm(e.target.value);
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            id="term"
            type="text"
            name="term"
            placeholder="Enter Search Term ..."
            className="search-form-input"
            value={term}
            onChange={handleChange}
          />
          <button type="submit" className="search-form-submit">
            Search
          </button>
        </form>
      </Container>
    </>
  );
}

export default SearchForm;