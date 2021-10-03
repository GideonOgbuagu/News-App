import React from 'react'
import './NewsCard.css';

const NewsCard = (props) => {
    
    // const articleDate = (props.article.publishedAt);
    // const date = new Date(articleDate)
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log(date.toLocaleDateString(), options)
    return (
        <div className="newscard">
          <a href={props.article.url} className="link" target="_blank">
            <div className="img-container"><img src={props.article.multimedia[0].url} alt="the news"/></div>
            <div className="article-container">
                <h2 className="heading">{props.article.title}</h2>
                <div className="author-container">
                    <span>Author(s): {props.article.byline}</span><span>{props.article.created_date}</span>
                </div>
                <div className="news-text">
                    <p>{props.article.abstract}</p>
                </div>
            </div>
          </a>
        </div>
    )
}

export default NewsCard;
