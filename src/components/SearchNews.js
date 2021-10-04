import React from "react";
import "./SearchNews.css";

function SearchNews(props) {
//   console.log(props, "hello!!!");
 const handleSubmit = (e) => {
     e.preventDefault()
 }

  return (
    <form className="search-wrapper" onSubmit={handleSubmit}>
      <input type="text" className="text-input" value={props.search} onChange={props.searchChange}></input>
      <p className="search-button">Search News</p>
    </form>
  );
}

export default SearchNews;
