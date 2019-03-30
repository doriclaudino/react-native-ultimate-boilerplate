/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import StorybookUI from './storybook';
import {name as appName} from './app.json';

const enable_storybook = true
const registerApp = enable_storybook ? StorybookUI : App
AppRegistry.registerComponent(appName, () => registerApp);
