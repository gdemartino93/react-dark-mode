import React, { useState, useEffect } from "react";
import data from "./data";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isDark , setIsDark] = useState(false);
  return (
    <section>
      <div className="container">
        <h2 className="text-center">DARK MODE APP</h2>
        <button className="btn btn-outline-primary d-flex" onClick={()=>{setIsDark(!isDark)}}> {isDark ? <BsFillSunFill /> : <BsFillMoonFill/> } </button>
      </div>
        <section className="article-section">
          {data.map(el => {
            return <article key={el.id} className="articolo col-3">
                      <h3>{el.title}</h3>
                  </article>
          })}
        </section>
    </section>
  );
}

export default App;
