import React from 'react';

function News({ data }) {
  return (
    <div className="container my-3">
      <h2>NewsMonkey - Top Headlines</h2>
      <div className="row">
        {data.articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={article.urlToImage} className="card-img-top" alt="Article" />
              <div className="card-body">
                <h5 className="card-title">{article.title.slice(0,30)}</h5>
                <p className="card-text">{article.description.slice(0,45)}</p>
                <a href={article.url} className="btn btn-primary">Read More</a>
              </div>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
