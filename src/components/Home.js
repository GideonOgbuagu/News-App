import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const [homeStories, setHomeStories] = useState([]);
  console.log(props, "Checking Props= Home.js");

  useEffect(() => {
    axios
      .get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
      .then((res) => {
        console.log(res.data, "TEST!!!");
        // dispatch({ type: FETCH_HOME_NEWS, payload: res.data.results });
        setHomeStories(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredHomeStories = homeStories.filter((story) => {
    return story.title.toLowerCase().includes(props.search.toLowerCase());
  });

  // console.log(homeStories, "Home!!!");

  return (
    <div className="home-news-list">
      {filteredHomeStories.map((homeStory) => (
        <div className="homecard">
        <Link to={{ pathname: `${homeStory.url}` }} className="home-link" target="_blank">
          <div className="home-img-container">
            <img src={homeStory.multimedia[0].url} alt="the news" />
          </div>
          <div className="home_article-container">
            <h2 className="home-heading">{homeStory.title}</h2>
            <div className="home-author-container">
              <span>{homeStory.byline}</span>
              <span>{homeStory.created_date}</span>
            </div>
            <div className="home-news-text">
              <p>{homeStory.abstract}</p>
            </div>
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
