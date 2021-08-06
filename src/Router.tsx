import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamsList} from './data/params';
import SplashScreen from './screens/SplashScreen';

interface StackRouterProps {}

const StackRouter: React.FC<StackRouterProps> = () => {
  const Stack = createStackNavigator<RootStackParamsList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SPLASH">
        <Stack.Screen name="SPLASH" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
