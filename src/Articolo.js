import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Articolo = ({title,body}) => {
  return (
    
    <article className="article col-lg-5 col-md-6 col-sm-6 col-12 shadow p-3 mb-5 rounded">
      <div className="article-title">
        <h4 className="fw-bold">{title}</h4>
        <div className="underline"></div>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </article>
  );
};

export default Articolo;
