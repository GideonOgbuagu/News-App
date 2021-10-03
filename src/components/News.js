import React from "react";
import NewsCard from "./NewsCard";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsNews, fetchWorldNews, fetchScienceNews, fetchArtsNews, fetchHomeNews } from "../actions/newsActions";
import "./News.css";
import SearchNews from "./SearchNews";

const News = (props) => {
  return (
    <div className="news-wrapper">
      <div className="fetch-search-container">
        <div className="fetch-wrapper">
          <Link to
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchUsNews();
            }}
          >
            US News
          </Link>
          <Link to
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchNews();
            }}
          >
            World News
          </Link>
          <Link to
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchNews();
            }}
          >
            Science News
          </Link>
          <Link to
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchNews();
            }}
          >
            Arts News
          </Link>
          <Link to
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchNews();
            }}
          >
            Home News
          </Link>
        </div>
        <div className="fetch-search-wrapper">
          <SearchNews searchChange={props.searchChange} news={props.news} />
        </div>
      </div>

      <div className="news-list">
        {props.stories.map((story, i) => (
          <NewsCard key={i} article={story} />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = { 
  fetchUsNews, 
  fetchWorldNews, 
  fetchScienceNews, 
  fetchArtsNews, 
  fetchHomeNews 
}
export default connect(null, mapDispatchToProps)(News);
