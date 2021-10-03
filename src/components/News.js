import React from "react";
import NewsCard from "./NewsCard";
import "./News.css";
import SearchNews from "./SearchNews";

const News = (props) => {
  console.log(props, "hiiiii");
  return (
    <div className="news-wrapper">
      <div className="fetch-search-container">
        <div className="div1"></div>
        <div className="fetch-search-wrapper">
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchNews();
            }}
          >
            Fetch News
          </button>
          <SearchNews searchChange={props.searchChange} news={props.news} />
        </div>
      </div>

      <div className="news-list">
        {props.articles.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

export default News;
// const mapStateToProps = state => {
//     return {
//         articles: state.articles,
//         isLoading: state.isLoading
//     }
// }

// // const mapDispatchToProps = () => {
// //     fetchNews()
// // }

// export default connect(mapStateToProps, {fetchNews})(News);
