import React from 'react';
import {StyleSheet,View} from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	);
};

const styles = {
	container: {
		padding: 5,
		borderColor: '#ddd',
		borderRadius: 25,
		borderWidth: 1,
		borderColor: '#ccc',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		marginLeft: 15,
		marginRight: 15,
		opacity:0.9
	}
}

export default CardSection;