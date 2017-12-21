import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

const Spinner = ({ size }) => {
	return (
			<View style={styles.spinnerStyle}>
				<ActivityIndicator size={size || 'large'} />
				<Text style={styles.spinnerText}>Түр хүлээнэ үү</Text>
			</View>
	);
};

const styles = {
	spinnerStyle: {
		flex: 1,
	},
	spinnerText: {
        textAlign: 'center',
        color: 'rgb(170, 170, 170)',
        marginTop: 20,
        fontSize: 11
	}
}

export default Spinner;