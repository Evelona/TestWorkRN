import FeedScreen from '../screens/FeedScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const Navigator = createMaterialBottomTabNavigator({
	Feed: {
		screen: FeedScreen,
		navigationOptions: {
			title: 'Новости'
		}
	},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			title: 'Профиль'
		}
	}
})

export default Navigator
