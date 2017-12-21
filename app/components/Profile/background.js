import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ImageBackground extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image source={require('../../images/loginBack.png')}
          style={styles.backgroundImage}>
          
          {this.props.children}
          
      </Image>
    );
  }

  };

const styles = StyleSheet.create({
    backgroundImage: {
      width: windowWidth,
      height: windowHeight,
      backgroundColor:'transparent',
      justifyContent: 'center',
    }
});

export default ImageBackground;