import { Avatar, Button } from 'react-native-elements';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component, useState } from "react"

import ImagePicker from 'react-native-image-picker'

const option = {
	title: 'Выберите:',
	takePhotoButtonTitle: 'Camera',
	chooseFromLibraryButtonTitle: 'Photo Library',

}
const { width } = Dimensions.get('window')
const ProfileScreen = () => {
	const [name, setName] = useState('Eveline')
	const [editing, setEditing] = useState(false)
	const [description, setDescription] = useState('Очень люблю кошек и собак, верстать и прогать')

	const cycle = {
		true: 'Сохранить',
		false: 'Редактировать'
	}
	
	const choosePhoto = () => {
		alert('click')
	}

	return (
		<View style={styles.container}>
			{!editing ?
				<View style={styles.header}>
					<Text style={styles.title}>{name}</Text>
				</View> 
				: null}
			{editing ? 
				<TextInput 
					style={styles.input} 
					placeholder='Name'
					onChangeText={(text) => setName(text)}
				/> : null}
			<Avatar
				size="xlarge"
				rounded
				title={name[0]}
				onPress={() => choosePhoto()}
				// source={{ uri: 'https://i0.wp.com/stephenafamo.com/blog/wp-content/uploads/2019/10/React-Native-1.png?fit=1200%2C675&ssl=1' }}
				avatarStyle = {styles.avatar}
				activeOpacity={0.7}
			/>
			{!editing ? <Text style={styles.description}>{description}</Text> : null}
			{editing ? 
				<TextInput 
					style={styles.input}
					placeholder='Description'
					onChangeText={(text) => setDescription(text)}
				/> : null}
			
			<Button
				title={cycle[editing]}
				type="clear"
				buttonStyle={styles.button}
				onPress={() => setEditing(!editing)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EFECF4',
		alignItems: 'center',
		
		// justifyContent: 'center',
	},
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
	},
	input: {
		marginTop: 50,
		height: 40,
		width: 200,
		borderColor: 'gray',
		marginBottom: 50,
		borderWidth: 1,
		borderRadius: 20,
		borderColor: "#384289",
		color: "#384289",
		paddingLeft: 15
	}
});

export default ProfileScreen