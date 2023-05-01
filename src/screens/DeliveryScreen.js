import { View, Text, TouchableOpacity, Image } from 'react-native'

import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


import { selectRestaurant } from '../redux/reducer/restaurantSlice'

export const DeliveryScreen = () => {

  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50" >
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View >
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>

            <Image
              source={require("../assets/scooter-de-entrega.gif")}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 -mt-10 z-0"
        mapType='mutedStandard'
        
      >
       
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origin'
          pinColor='#000CCBB'
        />

      </MapView>

    </View >
  )
}
