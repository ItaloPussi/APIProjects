import React, { useState } from 'react'

import Search from './components/Search'
import Popup from './components/Popup'
import axios from 'axios'
import Results from './components/Results'

function App() {
  const [term, setTerm] = useState("")
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState({})

  const apiurl = 'http://www.omdbapi.com/?apikey=ba0e289'

  const search = e => {
    if(e.key !== "Enter") return
    axios.get(`${apiurl}&s=${term}`).then(({data}) => {
      setResults(data.Search)
    })
  }

  const handleInput = e =>{
    setTerm(e.target.value)
  }

  const openPopup = id => {
    axios.get(`${apiurl}&i=${id}`).then(({data})=> {
      setSelected(data)
    })
  }

  const closePopup = () => {
    setSelected({})
  }
  
  return (
   <div>
     <header>
       <h1>Movie Database</h1>
     </header>
     <main>
       <Search term={term} handleInput={handleInput} search={search} />
       <Results results={results} openPopup={openPopup} />
       {(typeof selected.Title != "undefined") && <Popup selected={selected} closePopup={closePopup} />}
     </main>
   </div>
  );
}

export default App;
