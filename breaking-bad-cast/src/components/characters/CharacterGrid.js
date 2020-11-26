import React from 'react'
import Loading from '../ui/Loading'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (
        <Loading />
    ) : (
        <section className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} character={item} />
            ))}
        </section>
    )

}

export default CharacterGrid