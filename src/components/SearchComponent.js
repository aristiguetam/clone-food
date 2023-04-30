import { View, TextInput } from 'react-native'
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

export const SearchComponent = () => {
    return (
        <View className="flex-row items-center space-x-2 pb-2 mx-4 " >
            <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1 rounded-md">
                <MagnifyingGlassIcon size={20} color="gray" />
                <TextInput
                    placeholder="Restaurants"
                    keyboardType='default'
                />
            </View>
            <AdjustmentsVerticalIcon size={25} color="#00CCBB" />
        </View>
    )
}
