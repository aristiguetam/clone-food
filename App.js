import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/navigator/MyStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>
  )
}

export default App