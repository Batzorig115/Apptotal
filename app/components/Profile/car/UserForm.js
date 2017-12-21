import React, { Component } from 'react';
import { View, Text, AppState  } from 'react-native';
import { connect } from 'react-redux';
import { userUpdate} from '../actions/UserActions';
import CardSection from '../cardSection';
import Input from '../Input';
// import PushController from './PushController';
// import PushNotification from 'react-native-push-notification';

class UserForm extends Component {
	// constructor(props){
	//   super(props);

	// 	this.handleAppStateChange = this.handleAppStateChange.bind(this);
	// 	console.log(new Date(new Date(this.props.dateCar).setDate(new Date(this.props.dateCar).getDate() - 1)));
 //  }

	// componentDidMount() {
	// 	AppState.addEventListener('change', this.handleAppStateChange);
	// }

	// componentWillUnmount() {
	// 	AppState.removeEventListener('change', this.handleAppStateChange);
	// }

	// handleAppStateChange(appState){
	// 	const now = new Date(new Date(this.props.dateCar).setDate(new Date(this.props.dateCar).getDate() - 1));
	// 	if (appState === 'background') {
	// 		PushNotification.localNotificationSchedule({
	// 			message: "Таны татвар төлөх хугацаа боллоо",
	// 			date: new Date(Date.now() + (3 * 10000)).toISOString(),
	// 		});
	// 	}
	// }

	renderDays() {
			switch (parseInt(this.props.number.charAt(3))%5) {
				case 1:
					return 'Даваа гараг';
					break;
				case 2:
					return 'Мягмар гараг';
					break;
				case 3:
					return 'Лхагва гараг';
					break;
				case 4:
					return 'Пүрэв гараг';
					break;
				default:
					return 'Баасан гараг';
					break;
			}
		}

	render(){
		return(
			<View>
				<CardSection>
					<View style={styles.container}>
						<Text style={styles.label}>МАРК</Text>
						<Text style={styles.text}>{this.props.car}</Text>
					</View>
				</CardSection>

				<CardSection>
					<View style={styles.container}>
						<Text style={styles.label}>ДУГААР</Text>
						<Text style={styles.text}>{this.props.number}</Text>
					</View>
				</CardSection>

				<CardSection>
					<View style={styles.container}>
						<Text style={styles.label}>ХЯЗГААРЛАЛТ</Text>
						<Text style={styles.text}>{this.renderDays()}</Text>
					</View>
				</CardSection>

				<CardSection>
					<View style={styles.container}>
						<Text style={styles.label}>ТАТВАР ТӨЛСӨН ӨДӨР</Text>
						<Text style={styles.text}>{this.props.dateCar}</Text>
					</View>
				</CardSection>

				<CardSection>
					<View style={styles.container}>
						<Text style={styles.label}>ТАТВАР ТӨЛӨХ ӨДӨР</Text>
						<Text style={styles.text}>{new Date(new Date(this.props.dateCar).setMonth(new Date(this.props.dateCar).getMonth() + 12)).toISOString().substring(0, 10)}</Text>
					</View>
				</CardSection>

				<CardSection>
					<View style={styles.container}>
						<Text style={styles.label}>ТОС СОЛИСОН ӨДӨР</Text>
						<Text style={styles.text}>{this.props.dateOil}</Text>
					</View>
				</CardSection>

				<CardSection>
					<View style={styles.container}>
						<Text style={styles.label}>ТОС СОЛИХ ӨДӨР</Text>
						<Text style={styles.text}>{new Date(new Date(this.props.dateOil).setMonth(new Date(this.props.dateOil).getMonth() + 6)).toISOString().substring(0, 10)}</Text>
					</View>
				</CardSection>
				
			</View>
		);
	}
};

const styles = {
	container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10
  },
	label: {
		fontSize: 13,
		paddingLeft: 21,
		flex: 1,
		color: '#555',
		maxWidth: 150
	},
	text: {
		flex: 1,
		justifyContent: 'flex-start',
		fontSize: 15 
	}
};

const mapStateToProps = (state) => {
	const { car, number, dateCar, dateOil, imagePath } = state.userForm;

	return { car, number, dateCar, dateOil, imagePath};
};

export default connect(mapStateToProps, {userUpdate})(UserForm);