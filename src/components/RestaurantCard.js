import { View, Text, TouchableOpacity, Image } from 'react-native'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity/sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    const navigate = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigate.navigate("RestaurantScreen",
                    {
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
            }}
            className="bg-white mr-3 shadow"
        >
            <Image
                source={{ uri: urlFor(imgUrl).url() }}
                className="h-36 w-64 rounded-sm"
            />

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">
                    {title}
                </Text>

                <View className=" flex-row items-center space-x-1" >
                    <StarIcon color="green" size={22} opacity={0.5} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500"> {rating} </Text>
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" size={22} opacity={0.4} />
                    <Text className="text-xs text-gray-500 truncate">
                        Neraby · {address.substring(0, 11)}...
                    </Text>
                </View>

            </View>

        </TouchableOpacity>
    )
}

export default RestaurantCard