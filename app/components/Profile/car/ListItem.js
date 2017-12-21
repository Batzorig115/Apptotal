import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, TouchableWithoutFeedback, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import CardSection from '../cardSection';
import ImagePicker from 'react-native-image-picker';
import images from '../../../config/images';
import Spinner from '../Spinner';
import firebase from 'firebase';

const windowWidth = Dimensions.get('window').width;

class ListItem extends Component {
	constructor() {
	    super();
	    this.state = {
	    	loading: true,
	    	imagePath: '',
	    }
	}

	componentDidMount() {
		const { currentUser } = firebase.auth();
		const { uid } = this.props.user;
		infoRef = firebase.database().ref(`/allUsers/${currentUser.uid}/users/${uid}`);
	    infoRef.on('value', this.handleInfo);
		}

		handleInfo = (snapshot) => {
	    val = snapshot.val() || {};
	    info = val;
	    this.setState({
	      loading: false,
	      imagePath  : info.imagePath
	    });
	 }

	onRowPress(){
		Actions.userEdit({ user: this.props.user });
	}

	openPicker(){
			const { currentUser } = firebase.auth();
			const { uid } = this.props.user;
      const options = {
        title: 'Зурагаа сонгоно уу',
        storageOptions: {
          skipBackup: true,
          path: 'profileImg'
        }
      }
      ImagePicker.showImagePicker(options, (response) => {
            firebase.database().ref(`/allUsers/${currentUser.uid}/users/${uid}`)
				    .update({ 
				      imagePath: response.uri,
				     })
				    .done();
      })
  }

  renderDays() {
			switch (parseInt(this.props.user.number.charAt(3))%5) {
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

	render() {
		const { car, number, dateCar, dateOil } = this.props.user;

		return (
				<View style={{marginTop: 10}}>
					<TouchableOpacity onPress={() => this.openPicker()}>
					 {
			            this.state.imagePath 
			            ? <Image style={styles.myCar} source={{uri: this.state.imagePath}} value={this.state.imagePath} onChangeImage={(imagePath) => this.setState({imagePath})} /> 
			            : <Image source={images.mycar} style={styles.myCar}/>
				     }
					</TouchableOpacity>
					<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
						<View style={styles.container}>
							<View style={styles.main}>
								<Text style={styles.label}>МАРК</Text>
								<Text style={styles.content}>{car}</Text>
							</View>
							<View style={styles.main}> 
								<Text style={styles.label}>УЛСЫН ДУГААР</Text>
								<Text style={styles.content}>{number}</Text>
							</View>
							<View style={styles.main}> 
								<Text style={styles.label}>ХЯЗГААРЛАЛТ</Text>
								<Text style={styles.content}>{this.renderDays()}</Text>
							</View>
							<View style={styles.date}>
								<View style={styles.main}>
									<View> 
										<Text style={styles.text}>ТАТВАР ТӨЛӨХ ОГНОО</Text>
										<Icon name="angle-down" size={23} color="#333" style={{textAlign: 'center'}}/>
									</View>
									<View> 
										<Text style={styles.text}>ТОСОО СОЛИХ ОГНОО</Text>
										<Icon name="angle-down" size={23} color="#333" style={{textAlign: 'center'}}/>
									</View>
								</View>
								<View style={styles.mainDate}>
									<Text style={styles.dateDay}>{new Date(new Date(dateCar).setMonth(new Date(dateCar).getMonth() + 12)).toISOString().substring(0, 10)}</Text>
									<Text style={styles.dateDay}>{new Date(new Date(dateOil).setMonth(new Date(dateOil).getMonth() + 6)).toISOString().substring(0, 10)}</Text>
								</View>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</View>
		);
	}
}

const styles = {
	container: {
		backgroundColor: '#fff',
		marginTop: 15
	},
	label: {
		color: '#555'
	},
	text: {
		color: '#555',
		maxWidth: 150,
		textAlign: 'center'
	},
	content: {
		fontSize: 15
	},
	date: {
		flexDirection: 'column',
		marginTop: 10
	},
	dateDay: {
		borderWidth: 0.5,
		borderColor: '#555',
		fontSize: 15,
		paddingRight: 20,
		paddingLeft: 20,
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 15
	},
	mainDate: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 15,
		paddingLeft: 15,
		marginBottom: 5
	},
	main: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 15,
		paddingLeft: 15,
		marginBottom: 5
	},
	ListTitleStyle: {
		fontSize: 15,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 5,
		paddingBottom: 5,
	},
	imageUrl: {
		height: 150,
		backgroundColor: '#ddd'
	},
	  myCar: {
    alignItems: 'center',
    width: windowWidth,
    height:250,
    resizeMode: 'contain',
    borderWidth: 1,
    paddingBottom: 10,
    borderColor: '#333'
  },
};

export default ListItem;