import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Component } from "react";

import { IosIcons } from '@expo/vector-icons'

const posts = [
	{
		id: '0',
		title: 'Post 0',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	},
	{
		id: '1',
		title: 'Post 1',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	},
	{
		id: '2',
		title: 'Post 2',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	},
	{
		id: '3',
		title: 'Post 3',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	},
	{
		id: '4',
		title: 'Post 4',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	},
	{
		id: '5',
		title: 'Post 5',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	}
]

const renderPost = post => {
	return (
		<View style={styles.feedItem}>
			<Text style={styles.feedTitle}>{post.title}</Text>
			<Text style={styles.feedText}>{post.text}</Text>
		</View>
	)
}

const FeedScreen = () =>  {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Feed</Text>
			</View>

			<FlatList 
			style={styles.feed}
			data={posts}
			renderItem={({ item }) => renderPost(item)}
			keyExtractor={ item => item.id}
			showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EFECF4',
	},
	header: {
		paddingTop: 54,
		paddingBottom: 16,
		backgroundColor: '#fff',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#EBECF4',
		shadowColor: '#454D65',
		shadowOffset: {height: 5},
		shadowRadius: 15,
		shadowOpacity: 0.2,
		zIndex: 10	
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: '500'
	},
	feed: {
		marginHorizontal: 16
	},
	feedItem: {
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 8,
		flexDirection: 'column',
		marginVertical: 8 
	},
	feedTitle: {
		fontSize: 18,
		fontWeight: '500',
		textAlign: 'center',
		marginBottom: 12
	},
	feedText: {
		fontSize: 13,
		marginBottom: 12,
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto'
	}
});

export default FeedScreen