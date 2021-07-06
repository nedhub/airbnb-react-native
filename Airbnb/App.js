/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from './src/screens/Home';











import {
  SafeAreaView,
  
  StatusBar,
  

  
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {


  

  return (

    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView >



      <Home/>




      
    </SafeAreaView>

    </>
  );
};



export default App;
