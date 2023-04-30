import { useState } from "react"

import client from '../sanity/sanity'

export const useFetchFeaturedById = () => {

    const [restaurants, setRestaurants] = useState([])

    const fecthFeturedId = async ( id ) => {

        try {
            const resp = await client.fetch(`
            *[_type == 'featured' && _id == $id]{ 
              ..., 
              restaurant[]->{
                ...,
                dishes[]->,
                type->{
                  name
                }
              }
            }[0]
       `, { id })

            const data = await resp.restaurant
            setRestaurants(data)

        } catch (error) {
            console.error({ error })
        }
    }
    return {
        restaurants,
        fecthFeturedId,
    }
}
