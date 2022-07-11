import type { NextPage } from 'next'
import next from 'next'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'

import { GLOBALS } from '../config'

const Home: NextPage = () => {

  const [pokemonListData, setPokemonListData] = useState<any>()

  const loadNext = () => {
    console.log('loading next')
    fetch(pokemonListData!.next)
      .then((res) => res.json())
      .then((data) => {
        setPokemonListData((prevState: any) => {
          return { next: data.next, results: prevState.results.concat(data.results) }
        })
      })
  }

  useEffect(() => {
    fetch(`${GLOBALS.apiUrl}pokemon?offset=0&limit=12`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonListData(data)
      })
  }, [])

  return (
    <Layout>
      <div className='grid grid-cols-4'>
        {pokemonListData && pokemonListData.results && pokemonListData.results.map((pokemon: any) => <Card name={pokemon.name} key={pokemon.name} />)}
      </div>

      <div className='flex justify-center m-10'>
        <button className='text-lg bg-sky-500 hover:bg-sky-600 text-white p-3 font-light rounded-md' onClick={loadNext}>
          Cargar más pokemon
        </button>
      </div>

    </Layout>


  )
}



export default Home
