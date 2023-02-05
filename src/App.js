import React, { useState, useEffect } from "react";
import data from "./data";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Articolo from "./Articolo"; 



function App() {

// se localstorage è settato ritorna il valore settato altrimenti ritorno comunque light mode
  const getFromStorage = () =>{
    if(localStorage.getItem('theme')){
      return localStorage.getItem('theme');
    }else{
      return 'light-mode'
    }
  };
  // usestate per gestire il cambio del tema in base al dato conservato nel local storage del browser
  const [theme , setTheme] = useState(getFromStorage());
  // usestate per gestire il cambio del tasto
  const [isDark , setIsDark] = useState(false);

  
  const changeTheme = () =>{
    if (theme === "light-mode"){
      setTheme("dark-mode")
      setIsDark(true)
    }
    else{
      setTheme("light-mode")
      setIsDark(false)
    }
  };

  useEffect(()=>{
    // conserva il valore del thema nel localstorage del browser
    localStorage.setItem("theme",theme);
    // cambia la classe al tag html ogni volte che cambia il valore di theme
    document.documentElement.className = theme;
  },[theme])
  
  return (
    <section>
      <div className="container">
        <h2 className="text-center p-4">Mondo digitale</h2>
        <button className="btn btn-outline-primary d-flex btn-theme" onClick={changeTheme}> 
          {isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </div>
        <section className="article-section col-12">
          {data.map(el=>{
           const {id} = el;
            return <Articolo key={id} {...el} />
          })}          
        </section>
    </section>
  );
}

export default App;
