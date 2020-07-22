/** @format */
import { AppRegistry, LogBox } from 'react-native'
import './custom-ui' // Must be before "import App from './src/app'"
import App from './src/app'
// import StorybookUIRoot from './storybook/index.rn';

// TODO: 改造为不依赖 __DEV__ 区分storybook 和 APP
// const app = __DEV__ ? StorybookUIRoot : App
LogBox.ignoreAllLogs()

AppRegistry.registerComponent('samples', () => App)
