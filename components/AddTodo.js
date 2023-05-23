import { StyleSheet, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

export default function AddTodo({addTodo}) {
	const [text, setText] = useState('');

	const changeHandler = (val) => {
		setText(val)
	}

	return (
		<View>
			<TextInput 
				style={styles.input}
				placeholder='add new todo...'
				onChangeText={changeHandler}
			/>
			<Button onPress={() => addTodo(text)} title="Add Todo"/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#aed'
	}
})