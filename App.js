import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './components/Router'
import Quiz_Soccer from './components/quiz_soccer'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Router/>
  );
}

export default App;