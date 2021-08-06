import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamsList} from '../data/params';

interface SplashScreenProps {
  navigation: StackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList, 'SPLASH'>;
}

const SplashScreen: React.FC<SplashScreenProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // The above style centres the item inside the view both horizantally and vertically
  },
});
export default SplashScreen;
