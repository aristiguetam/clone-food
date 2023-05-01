import {useEffect} from 'react'

import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';


export const PreparingScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("DeliveryScreen")
        }, 4000)
    }, []);

    return (
        <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
            <Animatable.Text
                animation="slideInUp"
                interationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    )
}
