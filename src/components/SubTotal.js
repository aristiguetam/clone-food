import { View, Text } from 'react-native'
import currencyFormatter from 'currency-formatter';


export const SubTotal = ({ texto, total, style = {} }) => {
    return (
        <View className="flex-row justify-between items-center space-y-4">
            <Text style={style} className="text-gray-400">
                {texto}
            </Text>
            <Text className="text-gray-400">
                {currencyFormatter.format(total, { code: 'USD' })}
            </Text>
        </View>

    )
}
