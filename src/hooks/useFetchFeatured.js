import { useState } from "react"
import client from "../sanity/sanity"


export const useFetchFeatured = () => {
    const [featuredCategories, setFeaturedCategories] = useState([])

    const fetchFeatured = async () => {
        try {
            const resp = await client.fetch(
                `*[_type == 'featured']{ 
                     ..., 
                    restaurant[]->{
                        ...,
                        dishes[]->
                    }
                }
            
             `
            )
            const data = await resp

            setFeaturedCategories(data)

        } catch (error) {

            console.error({ error })
        }
    }

    return {
        featuredCategories,
        fetchFeatured,
    }
}
