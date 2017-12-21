import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, ScrollView } from 'react-native';
import { emailChanged, passwordChanged, registerUser } from './actions';
import Card from './card';
import CardSection from './cardSection';
import Button from './button'; 
import Input from './Input';
import Spinner from './Spinner';
import styles from '../../../style/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pass: '',
			loading: false,
	      firstname: '',
	      lastname: '',
	      email: '',
	      password: '',
	      repeatPassword: '',
	      phone: '',
		}

		this.setRepeatPassword = this.setRepeatPassword.bind(this);
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		if (this.state.firstname.length === 0) {
      this.setState({ error: 'Нэрээ бичнэ үү' });
      return;
    }
    if (this.state.lastname.length === 0) {
      this.setState({ error: 'Овогоо бичнэ үү' });
      return;
    }
    if (this.state.email.length === 0) {
      this.setState({ error: 'И-МЭЙЛ бичнэ үү' });
      return;
    }
    if (this.state.password.length === 0) {
      this.setState({ error: 'НУУЦ ҮГ бичнэ үү' });
      return;
    }
    if (this.state.password !== this.state.repeatPassword) {
      this.setState({ error: "НУУЦ ҮГ таарахгүй байна" });
      return;
    }
    if (this.state.phone.length === 0) {
      this.setState({ error: 'Утасаа бичнэ үү' });
      return;
    }
    this.setState({ error: '' });

   console.log(this.state.email, this.state.password);
   //const { uid } = this.props.user;
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        firebase.database().ref('allUsers/' + user.uid + '/info')
          .set({
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            phone : this.state.phone
          });
        this.setState({ error: 'Success' });
        Actions.mainuserinfo();
      })
      .catch((err) => {
        console.log(err);
      });
	}

  setRepeatPassword(repeatPassword) {
    this.setState({ repeatPassword });
    if (this.state.password !== repeatPassword)
      this.setState({ error: "Нууц үг тохирохгүй байна" });
    else 
      this.setState({ error: '' });
  }

	renderButton(){
		if (this.state.loading) {
			return <Spinner size="large" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
	    		Хадгалах
	    	</Button>      	
		)
	}

  render() {
  	if (this.state.loading) {
      return (
      	<View style={{marginTop: 300}}>
      		<Spinner size="large" />;
      	</View>
    )}
		return (
			<View>
				<View style={styles.viewStyle}>
				  <Icon name="angle-left" size={27} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()}/>
		          <Text style={styles.titleText}>БҮРТГҮҮЛЭХ</Text>
		          <Text></Text>
		        </View>
				<ScrollView>
				  <Card>
				  		<CardSection> 
			        	<Input
			        		label="ОВОГ"
			        		placeholder="Lastname"
			        		onChangeText={lastname => this.setState({ lastname })}
			        		value={this.state.lastname}
			        	/>         
			        </CardSection>
			        <CardSection> 
			        	<Input
			        		label="НЭР"
			        		placeholder="firstname"
			        		onChangeText={firstname => this.setState({ firstname })}
			        		value={this.state.firstname}
			        	/>         
			        </CardSection>
			        <CardSection> 
			        	<Input
			        		label="И-МЭЙЛ"
			        		placeholder="E-mail"
			        		onChangeText={email => this.setState({ email })}
			        		value={this.state.email}
			        	/>         
			        </CardSection>
			        <CardSection> 
			        	<Input
			        		label="УТАС"
			        		placeholder="phone"
			        		onChangeText={phone => this.setState({ phone })}
			        		value={this.state.phone}
			        	/>         
			        </CardSection>
			        <CardSection>
			        	<Input
			        		secureTextEntry
			        		label="НУУЦ ҮГ"
			        		placeholder="Password"
			        		onChangeText={password => this.setState({ password })}
			        		value={this.state.password}
			        	/>          
			        </CardSection>
			        <CardSection>
			        	<Input
			        		secureTextEntry
			        		label="НУУЦ ҮГ"
			        		placeholder="Password again"
			        		onChangeText={repeatPassword => this.setRepeatPassword(repeatPassword)}
			        		value={this.state.repeatPassword}
			        	/>          
			        </CardSection>
			        <Text style={styles.errorText}>{this.state.error}</Text>
			        <CardSection>
			        	{ this.renderButton() }          
			        </CardSection>
			      </Card>
			     </ScrollView>
			</View>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, registerUser
})(RegisterForm);