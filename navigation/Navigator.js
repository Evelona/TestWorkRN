import FeedScreen from '../screens/FeedScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from '../screens/ProfileScreen'
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const Navigator = createMaterialBottomTabNavigator({
	Feed: {
		screen: FeedScreen,
		navigationOptions: {
			tabBarLabel: "Новости",
			tabBarIcon: ({ tintColor }) => (
				<Icon name="home" color={tintColor} size={26} />
			)
		},
	},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			tabBarLabel: "Профиль",
			tabBarIcon: ({ tintColor }) => (
				<Icon name="content-cut" color={tintColor} size={26} />
			)
		}
	}
}, {
			// activeTintColor: 'black',
		inactiveTintColor: '#EFECF4',
		style: {
			backgroundColor: 'white',
		}
})

export default Navigator
