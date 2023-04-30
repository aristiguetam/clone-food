import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import currencyFormatter from 'currency-formatter';

import {
    addToCanasta,
    removeFromCanasta,
    selectCanastaItems,
    selectCanastaItemsWithId
} from '../redux/reducer/canastaSlice';
import { urlFor } from '../sanity/sanity';

export const DishRow = ({ id, name, description, price, image }) => {

    const [isPressed, setIsPressed] = useState(false);

    const items = useSelector(state => selectCanastaItemsWithId(state, id))

    const dispatch = useDispatch()

    const addItemToCanasta = () => {
        dispatch(addToCanasta({ id, name, description, price, image }))
    }

    const removeItemToCanasta = () => {
        if (!items.length > 0) return;
        dispatch(removeFromCanasta({ id }))
    }
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-gray-200 flex-row ${isPressed && "border-b-0"}`}>
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400 ">{description}</Text>
                    <Text className="text-black text-base mt-2 text-bold">
                        {currencyFormatter.format(price, { code: 'USD' })}
                    </Text>
                </View>
                <View>
                    <Image
                        style={{
                            borderWidth: 1,
                            borderColor: "#F3F3F4"
                        }}
                        source={{ uri: urlFor(image).url() }}
                        className="h-24 w-24 p-4 bg-gray-300 rounded-sm"
                    />
                </View>
            </TouchableOpacity>
            {
                isPressed && (
                    <View className="bg-white px-4">
                        <View className="flex-row items-center space-x-2 pb-3">
                            <TouchableOpacity
                                disabled={!items.length}
                                onPress={removeItemToCanasta}
                                activeOpacity={0.8}
                            >
                                <MinusCircleIcon
                                    size={40}
                                    color="white"
                                    fill={items.length > 0 ? "#00CCBB" : "gray"}
                                />
                            </TouchableOpacity>

                            <Text>{items.length}</Text>

                            <TouchableOpacity
                                onPress={addItemToCanasta}
                                activeOpacity={0.8}
                            >
                                <PlusCircleIcon
                                    size={40}
                                    color="white"
                                    fill="#00CCBB"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        </>
    )
}

