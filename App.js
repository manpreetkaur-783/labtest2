import {createStackNavigator, createAppContainer} from 'react-navigation';
import Screen1 from './Screen1'
import Screen2 from './Screen2'

const app=createStackNavigator({
  Screen1:{screen:Screen1},
  Screen2:{screen:Screen2}
})

export default createAppContainer(App);