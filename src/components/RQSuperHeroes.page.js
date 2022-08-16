import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
const RQSuperHeroesPage = () => {

    const fetchSuperHeroes = () =>{
        return axios.get('http://localhost:4000/superheroes')
    }

    const { isLoading, data, isError, error } = useQuery('super-heros', fetchSuperHeroes)

    if (isLoading) {
        return <h2>is Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <h2>RQSuperHeroesPage</h2>
            {
                data?.data.map((hero) => {
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </>
    )
}

export default RQSuperHeroesPage