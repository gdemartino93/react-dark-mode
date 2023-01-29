import React from "react";
import data from './data';
const Articolo = ({title,body}) => {
  return (
    
    <article>
        <h4> </h4>
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
