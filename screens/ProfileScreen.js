import { Avatar, Button } from 'react-native-elements';
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Component, useState } from "react";

import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const { width } = Dimensions.get('window')
const ProfileScreen = () => {
	const [name, setName] = useState('Eveline')
	const [description, setDescription] = useState('Очень люблю кошек и собак, верстать и прогать')
	

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{name}</Text>
			</View>
			<Avatar
				size="xlarge"
				rounded
				title={name[0]}
				onPress={() => setName('Eveline')}
				// source={{ uri: 'https://i0.wp.com/stephenafamo.com/blog/wp-content/uploads/2019/10/React-Native-1.png?fit=1200%2C675&ssl=1' }}
				avatarStyle = {styles.avatar}
				activeOpacity={0.7}
			/>
			<Text style={styles.description}>{description}</Text>
			<Button
				title='Редактировать'
				buttonStyle={styles.button}
				onPress={() => console.log('work')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EFECF4',
		alignItems: 'center'
		
		// justifyContent: 'center',s
	},
	// header: {
	// 	marginTop: 50,
	// 	height: 150,
	// 	backgroundColor: '#fff',
	// 	alignItems: 'center',
	// 	borderBottomWidth: 1,
	// 	borderBottomColor: '#EBECF4',
	// },
	title: {
		width: 375,
		paddingVertical: 10,
		textAlign: 'center',
		fontSize: 30,
		marginTop: 50,
		marginBottom: 50,
		color: '#384289',
		backgroundColor: '#fff',
		shadowColor: '#454D65',
		shadowOffset: { height: 5 },
		shadowRadius: 15,
		shadowOpacity: 0.2,
		zIndex: 10
		
	},
	description: {
		fontSize: 16,
		marginTop: 50,
		maxWidth: 250,
		maxHeight: 100,
		textAlign: 'center'
	},
	avatar: {
		borderWidth: 4,
		borderColor: "#384289"
	},
	button: {
		marginTop: 40,
		width: 300,
	}
});

export default ProfileScreen