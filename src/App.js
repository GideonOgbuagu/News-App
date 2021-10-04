import React, { useState } from "react";
import News from "./components/News";
import Home from "./components/Home";
import "./App.css";
import { connect } from "react-redux";
export const FETCH_HOME_NEWS = "FETCH_HOME_NEWS";


function App(props) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredStories = props.stories.filter((story) => {
    return story.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <h1 className="App-heading">New York Times News</h1>
      <News stories={filteredStories} handleSearchChange={handleSearchChange} search={search}/>
      <Home search={search} />
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
