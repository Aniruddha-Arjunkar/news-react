import React from "react";
import './newsCard.css';

function NewsCard({author,description,publishedAt,source,title,url,urlToImage,key})
{   return(
    <div className="news-card">
        <img src={urlToImage} alt='' className="article-image"/>
        <h3 className="article-title">{title}</h3>
        <div className="news-info">
            <p>{author}</p>
            <p>{publishedAt}</p>
        </div>
        <p>{description}</p>
        <a href={url} className="read-more" target="_blank">Read more</a>
    </div>
 );   
}

export default NewsCard;
