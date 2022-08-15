import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getPokemon(data) {
        return await axios.get(`${url}/${data}`)
    }
}