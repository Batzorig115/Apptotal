import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userUpdate, userCreate } from '../actions/UserActions';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainUserInfo from './MainUserInfo';
import Card from '../card';
import CardSection from '../cardSection';
import Button from '../button'; 
import CarForm from './carForm';
import firebase from 'firebase';

class UserCreate extends Component {

	OnButtonPress(){
		const  { car, number, dateCar, dateOil } = this.props;
		const { currentUser } = firebase.auth();
		firebase.database().ref(`/allUsers/${currentUser.uid}/users`)
			.push({ car, number, dateCar, dateOil })
			.then(() => {
				Actions.pop();
			});
	}

	renderButton(){
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<Button onPress={this.OnButtonPress.bind(this)}>
				Нэмэх
			</Button>      	
		)
	}
 
	render(){
		return(
			<View style={{backgroundColor: '#fff'}}>
				<View style={styles.viewStyle}>
		          <Icon name="angle-left" size={27} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()} />
		          <Text style={styles.titleText}>МАШИН НЭМЭХ</Text>
		          <Text></Text>
		        </View>
				<Card>
					<CarForm {...this.props} />
					<CardSection>
						{ this.renderButton() }    
					</CardSection>
				</Card>
			</View>
		);
	};
}


const mapStateToProps = (state) => {
	const { car, number, dateCar, dateOil} = state.userForm;

	return { car, number, dateCar, dateOil};
};

export default connect(mapStateToProps, { userUpdate, userCreate })(UserCreate);