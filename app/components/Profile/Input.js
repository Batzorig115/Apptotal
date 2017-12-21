import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={styles.inputStyle}
				value={value}
				onChangeText={onChangeText}
				underlineColorAndroid='transparent'		

			/>
		</View>
	);
}

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize:15,
		lineHeight: 23,
		flex:3,
		height: 42,
		width: 100
	},
	labelStyle: {
		fontSize: 13,
		paddingLeft: 15,
		flex: 1,
		color: '#555'
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
};

export default Input;