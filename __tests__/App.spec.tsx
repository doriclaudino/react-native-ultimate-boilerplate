/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../src/App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform')
  Platform.OS = 'android'
  return Platform
})

it('renders correctly', () => {
  renderer.create(<App />)
})
