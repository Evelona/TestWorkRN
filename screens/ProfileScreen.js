import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { Avatar, Button } from 'react-native-elements'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component, useRef, useState } from "react"

import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'

const ProfileScreen = () => {
	const [name, setName] = useState('Eveline')
	const [editing, setEditing] = useState(false)
	const [status, setStatus] = useState('start')
	const bs = useRef()
	const fall = new Animated.Value(1)
	const [image, setImage] = useState('https://i0.wp.com/stephenafamo.com/blog/wp-content/uploads/2019/10/React-Native-1.png?fit=1200%2C675&ssl=1s')
	const [description, setDescription] = useState('Очень люблю кошек и собак, верстать и прогать')
	const cycle = {
		editing: 'Сохранить',
		nothing: 'Отменить',
		start: 'Редактировать'
	}

	//BottomSheetContent
	const renderInner = () => (
		<View style={styles.panelContent}>
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.uploadTitle}>Upload Photo</Text>
			</View>

			<TouchableOpacity style={styles.buttonBS} onPress={selectPhotoFromCamera}>
				<Text style={styles.panelSubtitle}>Take Photo</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonBS} onPress={selectPhotoFromGallery}>
				<Text style={styles.panelSubtitle}>Choose From Library</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonBS} onPress={() => bs.current.snapTo(1)}>
				<Text style={styles.panelSubtitle}>Cancel</Text>
			</TouchableOpacity>
		</View>
	)

	//BottomSheetHeader
	const renderHeader = () => (
		<View style={styles.headerBS}>
			<View style={styles.panel}>
				<View style={styles.panelHandle} />
			</View>
		</View>
	)

		
	const selectPhotoFromGallery = async () => {
		await Permissions.askAsync(Permissions.CAMERA_ROLL)
		const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: 1,
			quality: 1,
		})
		if (!cancelled) {
			setImage(uri)
			bs.current.snapTo(1)		}
	}

	const selectPhotoFromCamera = async () => {
		await Permissions.askAsync(Permissions.CAMERA)
		const { cancelled, uri } = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: false
		})
		if (!cancelled) {
			setImage(uri)
			bs.current.snapTo(1)
		}
	}
	
	return (
		<View style={styles.container}>
			<BottomSheet
				ref={bs}
				snapPoints={[280, 0]}
				initialSnap={1}
				renderContent={renderInner}
				renderHeader={renderHeader}
				callbackNode={fall}
				enabledGestureInteraction={true}
				/>
			{!editing ?
				<View style={styles.header}>
					<Text style={styles.title}>{name}</Text>
				</View> : null}
			{editing ? 
				<TextInput 
					style={styles.input} 
					placeholder={name}
					onChangeText={(text) => {
						setName(text)
						setStatus('editing')
					}}
				/> : null}
			<TouchableOpacity onPress={() => bs.current.snapTo(0)}>
				<Avatar
				size="xlarge"
				rounded
				title={name[0]}
				source={{uri:image}}
				avatarStyle = {styles.avatar}
				activeOpacity={0.7}
			/>
			</TouchableOpacity>
			
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
	},
	buttonBS: {
		width: 300,
		height: 40,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#384289',
		color: '#384289',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 20,
		paddingTop: 7,
		alignItems: 'center'
	},
	headerBS: {
		backgroundColor: '#fff',
		shadowColor: '#333333',
		shadowOffset: {width: -1, height: -3},
		shadowRadius: 2,
		shadowOpacity: 0.4,
		paddingTop: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20
	},
	panel: {
		alignItems: 'center'
	},
	panelContent: {
		backgroundColor: '#fff'
	},
	panelSubtitle: {
		color: '#000',
		fontSize: 18,
		textAlign: 'center'
	},
	panelHandle: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#00000040',
		marginBottom: 10
	},
	uploadTitle: {
		fontSize: 30,
		color: '#384289',
		marginBottom: 25
	}
})

export default ProfileScreen