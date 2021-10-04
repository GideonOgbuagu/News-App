import React from "react";
import { useHistory } from 'react-router-dom';
import NewsCard from "./NewsCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHomeNews, fetchUsNews, fetchWorldNews, fetchScienceNews, fetchArtsNews, fetchSportsNews, fetchHealthNews, fetchFoodNews, fetchNyRegionNews } from "../actions/newsActions";
import "./News.css";
import SearchNews from "./SearchNews";

const News = (props) => {
  // console.log(props, "Checking Props= News.js");
  let history = useHistory()
  return (
    <div className="news-wrapper">
      <div className="fetch-search-container">
        <div className="fetch-wrapper">
          <Link
            to=""
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              history.push("/")
            }}
          >
            Home
          </Link>
          <Link
            to="/us-news"
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchUsNews();
            }}
          >
            US
          </Link>
          <Link
            to="/world-news"
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchWorldNews();
            }}
          >
            World
          </Link>
          <Link
            to="/science-news"
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchScienceNews();
            }}
          >
            Science
          </Link>
          <Link
            to="/arts-news"
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchArtsNews();
            }}
          >
            Arts
          </Link>
          <Link
            to="/health-news"
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchSportsNews();
            }}
          >
            Sports
          </Link>
          <Link
            to="/tech-news"
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchFoodNews();
            }}
          >
            Food
          </Link>
          <Link
            to="/tech-news"
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchHealthNews();
            }}
          >
            Health
          </Link>
          <Link
            to="/tech-news"
            className="nav-button"
            onClick={(e) => {
              e.preventDefault();
              props.fetchNyRegionNews();
            }}
          >
            NY Region
          </Link>
        </div>
        <div className="fetch-search-wrapper">
          <SearchNews searchChange={props.handleSearchChange} search={props.search} />
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
  fetchHomeNews,
  fetchUsNews,
  fetchWorldNews,
  fetchScienceNews,
  fetchArtsNews,
  fetchSportsNews,
  fetchHealthNews,
  fetchFoodNews,
  fetchNyRegionNews,
};
export default connect(null, mapDispatchToProps)(News);
