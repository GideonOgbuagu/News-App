import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchNews } from './actions/newsActions';
import News from './components/News'

function App(props) {
  const [news, setNews] = useState('');


  const handleChange = (e) => {
      setNews(e.target.value);
  }

  const filterArticles = props.results.filter(result => {
    return result.title.toLowerCase().includes(news.toLowerCase());  

})

  return (
    <div className="App">
      <h1 className="App-heading">New York Times</h1>
      <News articles={filterArticles} searchChange={handleChange} news={news} fetchNews={props.fetchNews}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      results: state.results,
      isLoading: state.isLoading
  }
}

// const mapDispatchToProps = () => {
//     fetchNews()
// }

export default connect(mapStateToProps, {fetchNews})(App);
