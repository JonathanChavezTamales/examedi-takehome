import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { padThreeZeros, capitalize, typeToColor } from '../../utils'

import { GLOBALS } from '../../config'


export default function Card({ name }: { name: string }) {

    const [pokemonImage, setPokemonImage] = useState<string>()
    const [pokemonData, setPokemonData] = useState<any>()

    useEffect(() => {
        const url = `${GLOBALS.apiUrl}pokemon/${name}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPokemonImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padThreeZeros(data.id)}.png`)
                setPokemonData(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            {pokemonData &&
                <Link
                    href={name}>
                    <a>
                        <div className='flex justify-center flex-col p-5'>
                            {/* Imagen principal */}
                            <div className='bg-gray-100 rounded'>
                                {pokemonImage && <Image src={pokemonImage} width="210" height="210" alt={'pokemon'} />}
                            </div>
                            {/* Detalle de la carta */}
                            <div className='px-4'>
                                <div className='text-sm text-gray-400 font-medium mb-2'>
                                    N.°{padThreeZeros(pokemonData.id)}
                                </div>
                                <div className='text-2xl font-medium mb-1'>
                                    {capitalize(name)}
                                </div>
                                <div className='flex justify-start flex-row text-xs font-light'>
                                    {pokemonData.types.map((type: any) =>
                                        <div key={type.name} className={`px-3 mr-1 bg-green-300 rounded bg-${typeToColor(type.type.name)}-300`} >
                                            {type.type.name}
                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>
                    </a>
                </Link>

            }
        </>
    )
}

