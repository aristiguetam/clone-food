import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { RestaurantScreen } from '../screens/RestaurantScreen';
import { CanastaScreen } from '../screens/CanastaScreen';
import { PreparingScreen } from '../screens/PreparingScreen';
import { DeliveryScreen } from '../screens/DeliveryScreen';


const Stack = createStackNavigator();

export const MyStack = () => {
    return (
        <Stack.Navigator
            // screenOptions={{
            //     cardStyle: {
            //         backgroundColor: 'white'
            //     }
            // }}
            >
            <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="RestaurantScreen" options={{ headerShown: false }} component={RestaurantScreen} />
            <Stack.Screen name="CanastaScreen" options={{ headerShown: false , presentation: 'modal'}} component={CanastaScreen} />
            <Stack.Screen name="PreparingScreen" options={{ headerShown: false , presentation: 'fullScreenModal'}} component={PreparingScreen} />
            <Stack.Screen name="DeliveryScreen" options={{ headerShown: false , presentation: 'fullScreenModal'}} component={DeliveryScreen} />
        </Stack.Navigator>
    )
}