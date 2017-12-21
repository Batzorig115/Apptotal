import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import CardSection from '../cardSection';
import Button from '../button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {

		return(
			<Modal
				visible={visible}
				transparent
				animationType="slide"
				onRequestClose={() => {}}
			>
				<View style={styles.containerStyle}>
					<View style={styles.cardStyle}>
						<Text style={styles.textStyle}>{children}</Text>
					</View>

					<CardSection style={styles.confirm}>
						<Button onPress={onAccept}>Тийм</Button>
					</CardSection>
					
					<CardSection style={styles.confirm}>
						<Button onPress={onDecline}>Үгүй</Button>
					</CardSection>
				</View>
			</Modal>
		);
	}

const styles = {
	cardStyle: {
		padding: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		marginLeft: 15,
		marginRight: 15
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40,
		color: '#fff'
	},
	containerStyle: {
		backgroundColor: 'rgba(0,0,0,0.85)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	},
	confirm: {
		borderWidth: 0,
		important: 'true' 
	}
};

export default Confirm;