// import * as / from 'expo'

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Avatar, Button } from 'react-native-elements';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component, useState } from "react"

const option = {
	title: 'Выберите:',
	takePhotoButtonTitle: 'Camera',
	chooseFromLibraryButtonTitle: 'Photo Library',

}



const ProfileScreen = () => {
	const [name, setName] = useState('Eveline')
	const [editing, setEditing] = useState(false)
	const [status, setStatus] = useState('start')
	const [image, setImage] = useState(null)
	const [description, setDescription] = useState('Очень люблю кошек и собак, верстать и прогать')
	console.log(image)
	const cycle = {
		editing: 'Сохранить',
		nothing: 'Отменить',
		start: 'Редактировать'
	}
	const selectPhotoFromGallery = async () => {
		await Permissions.askAsync(Permissions.CAMERA_ROLL)
		const { cancelled, uri}  = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: 1,
			quality: 1,
		});
		if (!cancelled) {
			setImage(uri);
		}
	}
	// const choosePhoto = () => {
	// 	alert('click')
	// }

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
					placeholder={name}
					onChangeText={(text) => {
						setName(text)
						setStatus('editing')
					}}
				/> : null}
			<Avatar
				size="xlarge"
				rounded
				title={name[0]}
				onPress={() => selectPhotoFromGallery()}
				source={{uri:image}}
				// source={{ uri: 'https://i0.wp.com/stephenafamo.com/blog/wp-content/uploads/2019/10/React-Native-1.png?fit=1200%2C675&ssl=1' }}
				avatarStyle = {styles.avatar}
				activeOpacity={0.7}
			/>
			{!editing ? <Text style={styles.description}>{description}</Text> : null}
			{editing ? 
				<TextInput 
					style={styles.input}
					placeholder={description}
					onChangeText={(text) => {
						setDescription(text)
						setStatus('editing')
					}}
				/> : null}
			
			<Button
				title={cycle[status]}
				type="clear"
				buttonStyle={styles.button}
				onPress={() => {
					editing ? setStatus('start') : setStatus('nothing')
					setEditing(!editing)
				}}
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
		width: 250,
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