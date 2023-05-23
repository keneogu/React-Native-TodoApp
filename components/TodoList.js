import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TodoList({item, pressHandler}) {
	return (
		<View>
			<TouchableOpacity onPress={() => pressHandler(item.key)}>
				<Text style={styles.items}>{item.text}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	items: {
		padding: 16,
		marginTop: 16,
		borderColor: "#bbb",
		borderWidth: 2,
		borderStyle: 'dotted',
		borderRadius: 10,
	}
})
