import React, { Component } from 'react';
import { View } from 'react-native';
import Spinner from './Spinner';
import firebase from 'firebase';
import SceneComponent from './router/scene';
import { Actions } from 'react-native-router-flux';
import PersonalInfo from './router/personalInfo';

class LoginComponent extends Component {
	state = { loggedIn: null };

	componentWillMount(){
		firebase.initializeApp({
		  apiKey: "AIzaSyCaH8Vp-UlGykQ2HOBSK2wH2Fg8F1hV5NQ",
		  authDomain: "totalapp-9cc78.firebaseapp.com",
		  databaseURL: "https://totalapp-9cc78.firebaseio.com",
		  projectId: "totalapp-9cc78",
		  storageBucket: "totalapp-9cc78.appspot.com",
		  messagingSenderId: "837785926172"
		});

		firebase.auth().onAuthStateChanged((user) => {
		  if (user) {
		    this.setState({ loggedIn: true });
		  } else {
		    this.setState({ loggedIn: false });
		  }
		});
	}

	renderContent() {
		console.log(this.state.loggedIn);
		switch (this.state.loggedIn) {
			case true:
				return <PersonalInfo />
			case false:
				return Actions.auth();
			default:
				return (
					<View style={{marginTop: 350}}>
						<Spinner />
					</View>
				)
		}
	}

	render() {
		return (
			<View>
				{this.renderContent()}
			</View>
			);
	}
};

export default LoginComponent;