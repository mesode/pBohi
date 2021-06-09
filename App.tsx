import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import GlobalStyles from './src/components/Styles/GlobalStyles';
// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>{ 
      <View style={{ flex:1 }}>
        <View style={GlobalStyles.topPadding} />
        <Navigator />
      </View>
    }  
    </NavigationContainer>
    
  );
}


