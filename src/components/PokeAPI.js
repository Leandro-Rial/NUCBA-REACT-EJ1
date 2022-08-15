import React, { useState } from 'react'

import toast, { Toaster } from 'react-hot-toast';
import PokemonRepository from '../repositories/PokemonRepository';

const PokeAPI = () => {
    const [pokemon, setPokemon] = useState(null)
    const [pokeInput, setPokeInput] = useState("")
    
    const getPokemon = async (e, data) => {
        
        e.preventDefault()
        if (!data.length) {
            toast('Please complete the field',
                {
                    position: "top-right",
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        } else {
            try {
                
                const response = await PokemonRepository.getPokemon(data)

                console.log(response)
    
                setPokemon(response.data)
    
                setPokeInput("")
    
            } catch (error) {
                console.error(error)
                toast.error("Pokemon not found", {
                    position: "top-right",
                    style: {
                        border: "1px solid red",
                        padding: "5px",
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })
                setPokeInput("")
            }
        }
    }

    const pokeComponent = () => {

        const typeColor = {
            bug: "#26de81",
            dragon: "#ffeaa7",
            electric: "#fed330",
            fairy: "#FF0069",
            fighting: "#30336b",
            fire: "#f0932b",
            flying: "#81ecec",
            grass: "#00b894",
            ground: "#EFB549",
            ghost: "#a55eea",
            ice: "#74b9ff",
            normal: "#95afc0",
            poison: "#6c5ce7",
            psychic: "#a29bfe",
            rock: "#2d3436",
            water: "#0190FF",
        };

        const types = pokemon.types.map(type => type.type.name)
        const themeColor = typeColor[types];

        return (
            <div className="card">
                <picture className="poke--picture" style={{ background: themeColor }}>
                    <img src={pokemon.sprites.front_default} alt="" className="poke--img" />
                </picture>
                <main className="poke--main">
                    <h2 className="main--name">{pokemon.name}</h2>
                    <div className="main--texts">
                        <div className="texts--wrapper">
                            <label htmlFor="" className="text--label">Abilities</label>
                            {
                                pokemon.abilities.map((ability, i) => (
                                    <p key={i} className="text--p">{ability.ability.name}</p>
                                ))
                            }
                        </div>
                        <div className="texts--wrapper">
                            <label htmlFor="" className="text--label">Stats</label>
                            {
                                pokemon.stats.map((stat, i) => (
                                    <p key={i} className="text--p">{stat.base_stat} {stat.stat.name}</p>
                                ))
                            }
                        </div>
                        <div className="texts--wrapper">
                            <label htmlFor="" className="text--label">Type</label>
                            {
                                pokemon.types.map((type, i) => (
                                    <p key={i} className="text--p" style={{ background: themeColor }}>{type.type.name}</p>
                                ))
                            }
                        </div>
                        <div className="texts--wrapper">
                            <label htmlFor="" className="text--label">Wieght</label>
                            <p className="text--p">{pokemon.weight}</p>
                        </div>
                        <div className="texts--wrapper">
                            <label htmlFor="" className="text--label">Height</label>
                            <p className="text--p">{pokemon.height}</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="pokeAPI--wrapper">
            <form className='pokeAPI--form' onSubmit={(e) => getPokemon(e, pokeInput)}>
                <div className="input--wrapper">
                    <input type="text" className="pokeAPI--input" placeholder='search a pokemon' onChange={(e) => setPokeInput(e.target.value)} value={pokeInput} />
                    <button type="submit" className="pokeAPI--button">PokeButton</button>
                </div>
            </form>
            { pokemon ? pokeComponent() : null }
            <Toaster />
        </div>
    )
}

export default PokeAPI