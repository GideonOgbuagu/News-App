import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import News from "./components/News";

function App(props) {
  const [news, setNews] = useState("");
  console.log(props, "Checking Props= App.js")

  const handleChange = (e) => {
    setNews(e.target.value);
  };

  const filteredStories = props.stories.filter((story) => {
    return story.title.toLowerCase().includes(news.toLowerCase());
  });

  return (
    <div className="App">
      <h1 className="App-heading">New York Times News</h1>
      <News stories={filteredStories} searchChange={handleChange} news={news}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
    isLoading: state.isLoading,
  };
};

// const mapDispatchToProps = {
//   fetchUsNews,
//   fetchWorldNews,
//   fetchScienceNews,
//   fetchArtsNews,
//   fetchHomeNews,
// };

export default connect(mapStateToProps, null)(App);
