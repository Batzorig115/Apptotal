import React, { Component } from 'react';
import { View, Text, AppState, Button, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { userUpdate} from '../actions/UserActions';
import DatePicker from 'react-native-datepicker'
import CardSection from '../cardSection';
import Input from '../Input';
import * as firebase from 'firebase';

class CarForm extends Component {
	constructor(props){
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      date: '',
      loading: false,
      seconds: 5,
    };
  }

  componentDidMount() {
		AppState.addEventListener('change', this.handleAppStateChange);
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this.handleAppStateChange);
	}

	handleAppStateChange(appState){
		// const now = new Date(new Date(this.props.dateCar).setDate(new Date(this.props.dateCar).getDate() - 1));
		// if (appState === 'background') {
		// 	PushNotification.localNotificationSchedule({
		// 		message: "Таны татвар төлөх хугацаа боллоо",
		// 		date: new Date(Date.now() + (3 * 10000)).toISOString(),
		// 	});
		// }
		if(appState === 'background'){
			console.log('hi', this.props.dateCar)
		}
	}

	render(){
		return(
			<View>
				<CardSection>
					<Input 
						label="МАРК"
						value={this.props.car}
						onChangeText={value =>  this.props.userUpdate({ prop: 'car', value })}
						placeholder="Mаркаа бичнэ үү"
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="ДУГААР"
						value={this.props.number}
						onChangeText={value =>  this.props.userUpdate({ prop: 'number', value })}
						placeholder="8717 уна"
					/>
				</CardSection>
				<Text style={styles.text}>Татвар төлсөн огноогоо оруулна уу.</Text>
				<CardSection>
					<Text style={styles.label}>ТАТВАР</Text>
					  <DatePicker
		          style={styles.datePicker}
		          value={this.props.dateCar}
		          date={this.props.dateCar}
		          mode="date"
		          placeholder="2017-06-15"
		          format="YYYY-MM-DD"
		          confirmBtnText="Зөвшөөрөх"
		          cancelBtnText="Цуцлах"
		          onDateChange={value => this.props.userUpdate({ prop: 'dateCar', value })}
		        />
				</CardSection>
				<Text style={styles.text}>Тосоо солисон огноогоо оруулна уу.</Text>
				<CardSection>
					<Text style={styles.label}>ТОС</Text>
					  <DatePicker
		          style={styles.datePicker}
		          date={this.props.dateOil}
		          value={this.props.dateOil}
		          mode="date"
		          placeholder="2017-06-15"
		          format="YYYY-MM-DD"
		          confirmBtnText="Зөвшөөрөх"
		          cancelBtnText="Цуцлах"
		          onDateChange={value => this.props.userUpdate({ prop: 'dateOil', value })}
		        />
				</CardSection>
			</View>
		);
	}
};

const styles = {
	text: {
		textAlign: 'center',
		marginBottom: 8
	},
	datePicker: {
		borderColor: '#ccc',
		width: 220,
		marginRight: 10
	},
	label: {
		fontSize: 13,
		paddingLeft: 21,
		flex: 1,
		color: '#555',
		paddingTop: 12
	}
};

const mapStateToProps = (state) => {
	const { car, number, dateCar, dateOil } = state.userForm;

	return { car, number, dateCar, dateOil };
};

export default connect(mapStateToProps, {userUpdate})(CarForm);