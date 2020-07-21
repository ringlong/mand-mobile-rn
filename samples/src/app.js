/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { LogBox } from 'react-native'
import AppNavigator from './navigation/root-navigator'

LogBox.ignoreAllLogs();

const App =  () => {
  return <AppNavigator />
}

export default App;
