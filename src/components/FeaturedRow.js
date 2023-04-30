import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { ArrowRightIcon } from 'react-native-heroicons/outline'

import RestaurantCard from './RestaurantCard'
import { useFetchFeaturedById } from '../hooks/useFetchFeaturedById'

const FeaturedRow = ({ title, description, id }) => {

    const { restaurants, fecthFeturedId } = useFetchFeaturedById()
   
    useEffect(() => {
        fecthFeturedId(id)
    }, [])

    return (
        <View >

            <View className="mt-4 flex-row items-center justify-between px-4 " >
                <Text className="font-bold text-lg">
                    {title}
                </Text>
                <ArrowRightIcon size={25} color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4" >
                {description}
            </Text>

            {/* <View className="bg-white h-4 w-full" /> */}

            <ScrollView
                className="pt-4 "
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollToEnd={{ animated: true }}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}

            >
                {
                    restaurants?.map(restaurant => (
                        <RestaurantCard
                            key={restaurant._id}
                            id={restaurant._id}
                            imgUrl={restaurant.image}
                            address={restaurant.address}
                            title={restaurant.name}
                            rating={restaurant.rating}
                            dishes={restaurant.dishes}
                            short_description={restaurant.short_description}
                            long={restaurant.long}
                            lat={restaurant.lat}

                        />
                    ))
                }

            </ScrollView>

        </View>
    )
}

export default FeaturedRow