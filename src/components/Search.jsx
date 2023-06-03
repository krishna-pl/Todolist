import React, { useState } from 'react' 
import style from './Search.module.css'

function Search({users}) {
    
    const [search, setSearch] = useState("");
console.log(search);
  return (
    <form >
       <input className={style["search-box"]} placeholder='Search' type='text' name='name'   onChange={(e) => setSearch(e.target.value)} />
    </form>
  )
}

export default Search