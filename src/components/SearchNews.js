import React from "react";
import "./SearchNews.css";

function SearchNews(props) {
//   console.log(props, "hello!!!");
 const handleSubmit = (e) => {
     e.preventDefault()
 }

  return (
    <form className="search-wrapper" onSubmit={handleSubmit}>
      <input type="text" className="text-input" value={props.news} onChange={props.searchChange}></input>
      <button className="search-button">Search News</button>
    </form>
  );
}

export default SearchNews;
