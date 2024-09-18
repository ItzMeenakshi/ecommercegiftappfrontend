import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import BrowseProducts from './src/screens/BrowseProducts';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import TabBarScreen from './src/screens/TabBarScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="SignupScreen" component={SignupScreen}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="BrowseProducts" component={BrowseProducts}/>
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen}/>
      <Stack.Screen name="TabBarScreen" component={TabBarScreen}/>
      
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;