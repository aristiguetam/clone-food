import { View, Text, ScrollView } from "react-native"
import CategoryCard from "./CategoryCard"
import { useEffect, useState } from "react"
import client from "../sanity/sanity"

export const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        client.fetch(`
          *[_type == "category"]

        `
        ).then(data => setCategories(data))
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* CategoryCard */}
            {
                categories && categories.map(category => (
                    <CategoryCard
                        key={category._id}
                        imgUrl={category.image}
                        title={category.name}
                    />

                ))
            }
        </ScrollView>
    )
}

