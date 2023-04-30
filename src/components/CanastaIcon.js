import { View, Text, TouchableOpacity } from 'react-native'

import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import currencyFormatter from 'currency-formatter';


import { selectCanastaItems, totalCanastaItems } from '../redux/reducer/canastaSlice'


export const CanastaIcon = () => {

    const items = useSelector(selectCanastaItems);

    const navigate = useNavigation();

    const totalPrice = useSelector(totalCanastaItems);

    if (!items.length) return null;
    
    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity
                onPress={() => navigate.navigate("CanastaScreen", {})}
                className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
            >
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
                    {items.length}
                </Text>

                <Text className="text-white font-extrabold text-lg text-center flex-1">
                    View Canasta
                </Text>

                <Text className="text-white text-lg font-extrabold">
                    {currencyFormatter.format(totalPrice, { code: 'USD' })}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
