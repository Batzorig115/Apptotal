import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StatusBar, TouchableHighlight, TextInput, ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../../../style/index';
import images from '../../config/images';
import Unit from '../../config/unit';
import Icon from 'react-native-vector-icons/FontAwesome';

var windowWidth = Dimensions.get('window').width;

class Contact extends Component {
  constructor() {
    super();
     
  }

render(){
    return ( 
      <View>
          <View style={styles.viewStyle}>
              <Image
                style={styles.logo}
                source={images.logo}
              />
          </View>

          <ScrollView style={{backgroundColor: '#fff' }}>
         
             <Text>
                    Бидэнтэй холбоо барих
             </Text>
      
          </ScrollView>
      </View>
    );
  }

 
}

export default Contact;
