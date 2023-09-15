import React from 'react';
import './article.css';

const Article = ({ imgUrl, position, name, text }) => (
  <div className="sbc__blog-container_article">
    <div className="sbc__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="sbc__blog-container_article-content">
      <div>
        <p>{position}</p>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      
    </div>
  </div>
);

export default Article;
