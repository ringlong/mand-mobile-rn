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

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}
