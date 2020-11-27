import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import Pagination from './components/ui/Pagination'
import CharacterGrid from './components/characters/CharacterGrid'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(300)

  useEffect(()=>{
    const fetchItems = async() =>{
      setIsLoading(true)
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${query}`
      )

      setItems(result.data.results)
      setMaxPage(result.data.info.pages)
      setIsLoading(false)
    }

    fetchItems()
  },[query, page])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) =>setQuery(q)} getPage={(p) => setPage(p)}/>
      <CharacterGrid items={items} isLoading={isLoading} />
      <Pagination page={page} getPage={(p) => setPage(p)} maxPage={maxPage}/>
    </div>


  );
}

export default App;
