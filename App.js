import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Hotels from './src/components/Hotels'

const navigationOptions = {
  headerMode: 'none'
}

const MainNavigator = createStackNavigator(
  { Home: { screen: Hotels } },
  navigationOptions
)

const App = createAppContainer(MainNavigator)

export default App
