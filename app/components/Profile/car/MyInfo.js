import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import { Spinner } from '../../common/Spinner';
import Card from '../card';
import CardSection from '../cardSection';
import Button from '../button';
import images from '../../../config/images';
import Input from '../Input';
import firebase from 'firebase';
import Carousel from 'react-native-banner-carousel';


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const imagesS = [
	"http://is5.mzstatic.com/image/thumb/Purple128/v4/e9/13/65/e9136599-6efe-1e4e-3119-57507ab20403/source/200x200bb.jpg",
	"http://is5.mzstatic.com/image/thumb/Purple128/v4/e9/13/65/e9136599-6efe-1e4e-3119-57507ab20403/source/200x200bb.jpg",
	"http://is5.mzstatic.com/image/thumb/Purple128/v4/e9/13/65/e9136599-6efe-1e4e-3119-57507ab20403/source/200x200bb.jpg"
];


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MyInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  loading: true,
	      firstname: '',
	      lastname: '',
	      imagePath: '',
	      phone: '',
		}
	}

	componentDidMount() {
		const { currentUser } = firebase.auth();
		infoRef = firebase.database().ref(`/allUsers/${currentUser.uid}/info`);
	    infoRef.on('value', this.handleInfo);
		}

		handleInfo = (snapshot) => {
	    val = snapshot.val() || {};
	    info = val;
	    this.setState({
	      loading: false,
	      firstname  : info.firstname,
	      lastname   : info.lastname,
	      phone      : info.phone,
	      imagePath  : info.imagePath
	    });
	 }

	saveBtn() {
		const { currentUser } = firebase.auth();
	    firebase.database().ref(`/allUsers/${currentUser.uid}/`).child('info')
	    .update({
		    firstname: this.state.firstname,
		    lastname: this.state.lastname,
	    	phone: this.state.phone,
	    	imagePath: this.state.imagePath
	    })
	    .then(() => { Actions.mainuserinfo()
	    });
	 }

	renderButton(){
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		
		return (
			<Button onPress={this.saveBtn.bind(this)}>
	    		Хадгалах
	    </Button>
		)
	}

	openPicker(){
      const options = {
        title: 'Зурагаа сонгоно уу',
        storageOptions: {
          skipBackup: true,
          path: 'profileImg'
        }
			}
			
      ImagePicker.showImagePicker(options, (response) => {
        if(response.didCancel){
          console.log('User canccelled')
        } else if (response.error){
          console.log('Error' + response.error)
        } else if(response.customButton){
          console.log('custom'+ response.customButton)
        } else {
            this.setState({
              imagePath: response.uri,
              imageHeight: response.height,
              imageWidth: response.width
            })
        }
      })
	}
	

	renderPage(image, index) {
		return (
				<View key={index}>
						<Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
				</View>
		);
}


	render(){
		if (this.state.loading)
     return <Spinner/>
		return (
			




			<View style={{backgroundColor: '#fff'}}>
				<View style={styles.viewStyle}>
		          <Icon name="angle-left" size={27} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()} />
		          <Text style={styles.titleText}>ХУВИЙН МЭДЭЭЛЭЛ</Text>
		          <Text></Text>
		    </View>

				<Image
		      source={images.carBack}
		      style={{width: windowWidth,
									height: windowHeight,
									backgroundColor:'transparent',
									justifyContent: 'center',
									alignItems: 'center',}} >

				<View
		      source={images.carBack}
					style= {{
								backgroundColor: '#fff',
								width: windowWidth,
								height: windowHeight,
								opacity: 0.9,
				}}>

				<ScrollView>

				<TouchableOpacity onPress={() => this.openPicker()}>
					{
            this.state.imagePath
            ? <Image style={styles.profileLogo} source={{uri: this.state.imagePath}} 
							value={this.state.imagePath}
							onChangeImage={(imagePath) => this.setState({imagePath})} />
            : <Image source={images.Add} style={styles.profileLogo}/>
          }
				</TouchableOpacity>
					
				  <Card>
			        <CardSection>
			        	<Input
			        		label="ОВОГ"
			        		placeholder="LastName"
			        		onChangeText={lastname => this.setState({ lastname })}
			        		value={this.state.lastname}
						
			        	/>
			        </CardSection>
			        <CardSection>
			        	<Input
			        		label="НЭР"
			        		placeholder="FirstName"
			        		onChangeText={firstname => this.setState({ firstname })}
			        		value={this.state.firstname}
						
			        	/>
			        </CardSection>

			        <CardSection>
			        	<Input
			        		label="УТАС"
			        		placeholder="Phone"
			        		onChangeText={phone => this.setState({ phone })}
			        		value={this.state.phone}
							
			        	/>
			        </CardSection>

			        <CardSection>
			        	{ this.renderButton() }
			        </CardSection>


							<Carousel
								autoplay
								autoplayTimeout={5000}
								loop
								index={0}
								pageSize={BannerWidth}
						>
								{imagesS.map((image, index) => this.renderPage(image, index))}
						</Carousel>
			    </Card>

					


					

			  </ScrollView>
				

				</View>

					



				

				


				</Image>

			

				
			</View>
			
		)
	}
}

export default MyInfo;
