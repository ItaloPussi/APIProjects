import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async() =>{
      setIsLoading(true)
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) =>setQuery(q)}/>
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
