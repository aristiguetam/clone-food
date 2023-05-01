import { useMemo, useState } from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import { useSelector, useDispatch } from "react-redux"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from "react-native-heroicons/outline"
import currencyFormatter from 'currency-formatter';

import { selectRestaurant } from '../redux/reducer/restaurantSlice'
import { selectCanastaItems } from '../redux/reducer/canastaSlice'
import { urlFor } from "../sanity/sanity"
import { removeFromCanasta, totalCanastaItems } from "../redux/reducer/canastaSlice"
import { SubTotal } from "../components/SubTotal"

export const CanastaScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectCanastaItems);
    const totalCanasta = useSelector(totalCanastaItems);
    const [groupedItemsInCanasta, setGroupedItemsInCanasta] = useState([]);
    const dispatch = useDispatch();

    useMemo(() => {
        const groupedItems = items.reduce((grouped, item) => {
            (grouped[item.id] = grouped[item.id] || []).push(item);
            return grouped
        }, {})

        setGroupedItemsInCanasta(groupedItems)
    }, [items])
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00ccbb] bg-white shadow-sm" >
                    <View>
                        <Text className="text-lg font-bold text-center">Canasta</Text>
                        <Text className="text-center text-gray-400" >{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                    >
                        <XCircleIcon fill="#00ccbb" size={60} color="white" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5 ">
                    <Image
                        source={require("../assets/delivery.png")}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1">
                        Deliver in 50-70 min
                    </Text>
                    <TouchableOpacity>
                        <Text className="text-[#00ccbb]">
                            Change
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {
                        Object.entries(groupedItemsInCanasta).map(([key, items]) => (
                            <View
                                className="flex-row items-center space-x-3 bg-white px-5 py-2 "
                                key={key}>
                                <Text className="text-[#00ccbb]">{items.length} x </Text>
                                <Image
                                    source={{ uri: urlFor(items[0]?.image).url() }}
                                    className="h-12 w-12 rounded-full"
                                />
                                <Text className="flex-1">
                                    {items[0]?.name}
                                </Text>
                                <Text className="text-gray-600">
                                    {currencyFormatter.format(items[0]?.price, { code: "USD" })}
                                </Text>

                                <TouchableOpacity>
                                    <Text
                                        className="text-[#00ccbb]"
                                        onPress={() => dispatch(removeFromCanasta({ id: key }))}
                                    >
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">

                    <SubTotal texto="Subtotal" total={totalCanasta} />

                    <SubTotal texto="Delivery Feed" total="7.99" />

                    <SubTotal texto="Order Total" style={{ color: "black" }} total={totalCanasta + 7.99} />

                    <TouchableOpacity
                        onPress={() => navigation.navigate("PreparingScreen")}
                        className="rounded bg-[#00ccbb] p-4">
                        <Text className="text-center text-white text-lg font-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        </SafeAreaView>
    )
}
