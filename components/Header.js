import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Todo App</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		marginTop: 30,
		paddingTop: 26,
		backgroundColor: 'coral',
	},
	title: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
	}
})