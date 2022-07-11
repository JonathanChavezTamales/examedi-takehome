import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { padThreeZeros, capitalize } from '../utils'


import { GLOBALS } from '../config'

const Pokemon: NextPage = () => {

    const router = useRouter()
    const { pokemon } = router.query

    const [pokemonImage, setPokemonImage] = useState()
    const [pokemonData, setPokemonData] = useState()

    useEffect(() => {
        if (!router.isReady) return;
        const url = `${GLOBALS.apiUrl}pokemon/${pokemon}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPokemonImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padThreeZeros(data.id)}.png`)
                setPokemonData(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [router.isReady])


    return (
        <Layout>
            {
                pokemonData &&

                <div className='p-3'>
                    <div className='text-center text-4xl font-light mb-5'>
                        {capitalize(pokemon)} <span className='text-gray-400'>N.°{padThreeZeros(pokemonData.id)}</span>
                    </div>
                    <div className='flex'>
                        <div className='bg-gray-100 rounded w-3/6'>
                            <Image src={pokemonImage} width="410" height="410" alt={'pokemon'} />
                        </div>
                        <div className='w-3/6 p-5 text-lg font-light'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab non velit distinctio nobis. Animi labore ut repellendus ipsa eius facilis reprehenderit! Odio aspernatur reiciendis provident eligendi, tempore officia velit voluptatibus.</p>
                            <div className='bg-sky-500 rounded mt-10 p-5'>
                                Altura categoría, etc
                            </div>
                        </div>
                    </div>
                </div>

            }
        </Layout>
    )
}


export default Pokemon
