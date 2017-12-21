import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '../card';
import CardSection from '../cardSection';
import Button from '../button';
import Confirm from './Confirm';
import UserForm from './UserForm';
import { userUpdate, userDelete } from '../actions/UserActions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import firebase from 'firebase';

class UserEdit extends Component {
	state = { showModal: false };

	componentWillMount() {
		_.each(this.props.user, (value, prop) => {
			this.props.userUpdate({ prop, value });
		});
	}

	onAccept(){
		const { uid } = this.props.user;
		const { currentUser } = firebase.auth();
		firebase.database().ref(`/allUsers/${currentUser.uid}/users/${uid}`)
		.remove()
		.then(() => {
			this.setState({ showModal: false });
			Actions.pop();
		});
	}
	
	onDecline(){
		this.setState({ showModal: false });
	}

	render() {
		return(
			<View style={{backgroundColor: '#fff'}}>
				<View style={styles.viewStyle}>
		          <Icon name="angle-left" size={27} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()} />
		          <Text style={styles.titleText}>{this.props.car}</Text>
		          <Text></Text>
		        </View>
				<ScrollView>
					<Card>
						<UserForm />

						<CardSection>
							<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
								Машин устгах
							</Button>
						</CardSection>

						<Confirm
							visible={this.state.showModal}
							onAccept={this.onAccept.bind(this)}
							onDecline={this.onDecline.bind(this)}
						>
							Устгах уу?
						</Confirm>

					</Card>
				</ScrollView>
			</View>
		);
	};
}

const mapStateToProps = (state) => {
	const { car, number, dateCar, dateOil, imageUrl } = state.userForm;

	return { car, number, dateCar, dateOil, imageUrl };
};

export default connect(mapStateToProps, { userUpdate, userDelete })(UserEdit);