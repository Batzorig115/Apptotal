import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../card';
import CardSection from '../cardSection';
import images from '../../../config/images';
import Spinner from '../Spinner';
import firebase from 'firebase';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MainUserInfo extends Component {

	onRowPress(){
		Actions.userEdit({ user: this.props.user });
	}

	render() {
		return (
			<View>
				<View style={styles.viewStyle}>
				  <Text></Text>
		          <Text style={styles.titleText}>ХАРИУЦЛАГАТАЙ ЖОЛООЧ</Text>
		          <Text></Text>
		        </View>
			  <Image
		      source={images.carBack}
		      style={styles.container} >
				<View style={styles.MainView}>
					<Card>
						<TouchableOpacity onPress={() => Actions.myInfo()} >
					    <View style={styles.cardSection}>
						    	<Text style={styles.Text} >
						    		Хувийн мэдээлэл
						    	</Text>
					    </View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => Actions.myCar()} >
					    <View style={styles.cardSection}>
						    	<Text style={styles.Text} >
						    		Миний машин
						    	</Text>
					    </View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => Actions.myCar()} >
					    <View style={styles.cardSection}>
						    	<Text style={styles.Text} >
						    		Бүтээгдэхүүн
						    	</Text>
					    </View>
						</TouchableOpacity>

					    <TouchableOpacity onPress={() => firebase.auth().signOut()}>
						    <View style={styles.cardSection}>
						    		<Text style={styles.Text}>Гарах</Text>
						    </View>
					    </TouchableOpacity>
			  	</Card>
			  </View>
			 </Image>
			 </View>
		);
	}

}

const styles = {
	errorTextStyle: {
		fontSize: 16,
		alignSelf: 'center',
		color: 'red'
	},
	MainView: {
		backgroundColor: '#fff',
		width: windowWidth,
		height: windowHeight,
		opacity: 0.9,
    	paddingTop: 180
	},
	container: {
	    width: windowWidth,
	    height: windowHeight,
	    backgroundColor:'transparent',
	    justifyContent: 'center',
	    alignItems: 'center',
  	},
	Text: {
		paddingTop: 9,
		paddingBottom: 9,
		marginLeft: 10,
		fontSize: 17,
    	color: '#fff',
	    minWidth: 300,
	    textAlign: 'center',
	},
	cardSection: {
		padding: 5,
		borderColor: '#007aff',
		borderRadius: 25,
		borderWidth: 1,
		backgroundColor: '#007aff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		marginLeft: 15,
		marginRight: 15
		
	},
	viewStyle: {
	    backgroundColor: '#F3F3F4',
	    flexDirection: 'row',
	    alignItems: 'center',
	    justifyContent: 'space-between',
	    height: 80,
	    borderBottomWidth: 1,
	    borderColor: '#bfbec1',
	    elevation: 2,
	    position: 'relative',
	},
	titleText: {
	    justifyContent: 'center',
	    alignItems: 'center',
	    fontSize: 16,
	    marginTop: 18
	},

};

export default MainUserInfo;
