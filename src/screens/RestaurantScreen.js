import { useEffect } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
    ArrowLeftIcon,
    ChevronRightIcon,
    MapPinIcon,
    QuestionMarkCircleIcon,
    StarIcon
} from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from "react-redux"
import { SafeAreaView } from "react-native-safe-area-context";

import { DishRow } from '../components/DishRow';
import { urlFor } from '../sanity/sanity';
import { CanastaIcon } from '../components/CanastaIcon';
import { setRestaurant} from "../redux/reducer/restaurantSlice";
import { selectCanastaItems } from "../redux/reducer/canastaSlice";

export const RestaurantScreen = () => {

    const items = useSelector(selectCanastaItems);
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        address,
        short_description,
        dishes,
        long,
        lat,
    } } = useRoute();

    useEffect(() => {
        dispatch(
            setRestaurant({
                id,
                imgUrl,
                title,
                rating,
                address,
                short_description,
                dishes,
                long,
                lat,
            })
        )
      
    }, [])

    return (
        <SafeAreaView>
            <CanastaIcon />
            <ScrollView>

                <View className="relative">
                    <Image
                        source={{ uri: urlFor(imgUrl).url() }}
                        className="w-full h-56 bg-gray-300 p-4"
                    />

                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="absolute top-12 left-5 p-2 bg-[#00CCBB] rounded-full "
                    >
                        <ArrowLeftIcon size={20} color="white" />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color='green' opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500"> {rating} </Text> ·
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon color='gray' opacity={0.4} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-gray-500"> Nearby </Text> · {address.substring(0, 26)}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
                        <Text className="pl-2 flex-1 text-md font-bold">
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon size={22} color="#00ccbb" />
                    </TouchableOpacity>
                </View>

                <View className={`${items.length ? "pb-36" : "pb-2"}`}>
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                        Menu
                    </Text>
                    {
                        dishes.map(dish => (
                            <DishRow
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.short_description}
                                price={dish.price}
                                image={dish.image}
                            />
                        ))
                    }

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
