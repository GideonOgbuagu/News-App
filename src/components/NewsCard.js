import React from 'react'
import { Link } from 'react-router-dom'
import './NewsCard.css';

const NewsCard = (props) => {
    
    // const articleDate = (props.article.publishedAt);
    // const date = new Date(articleDate)
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log(date.toLocaleDateString(), options)
    return (
        <div className="newscard">
          <Link to={{  pathname: `${props.article.url}`}} className="link" target="_blank">
            <div className="img-container"><img src={props.article.multimedia[0].url} alt="the news"/></div>
            <div className="article-container">
                <h2 className="heading">{props.article.title}</h2>
                <div className="author-container">
                    <span>{props.article.byline}</span><span>{props.article.created_date}</span>
                </div>
                <div className="news-text">
                    <p>{props.article.abstract}</p>
                </div>
            </div>
          </Link>
        </div>
    )
}

export default NewsCard;
