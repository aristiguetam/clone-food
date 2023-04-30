import { View, Text, Image, } from 'react-native'
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

export const HeaderComponent = ({ text, location }) => {
    return (
        <View className="flex-row items-center mx-4 space-x-2 mb-2" >
            <Image
                source={require("../assets/delivery.png")}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                    {text}
                </Text>
                <Text className="font-bold text-xl">
                    {location}
                    <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB" />
        </View>
    )
}
