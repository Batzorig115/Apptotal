import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    ListView,
    Dimensions,
    Image,
    TextInput,
    AlertIOS,
    ScrollView
} from 'react-native';
import Head from '../head';
import carType from '../config/manufacturer';
import carDetail from '../footer/carDetail';
import styles from '../../style/icon';
import images from './../config/images';
import Manufacturer from '../config/manufacturer';

class Suudliin extends Component {
	constructor() {
  	super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Manufacturer),
    };
  }

updateSearch(text) {
  const newData = Manufacturer.filter(function(item) {
    const title = item.title.toLowerCase();
    const search = text.toLowerCase();
    return title.indexOf(search) > -1;
  });
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(newData),
  });
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
          <ScrollView style={{marginBottom: 40 }}>
          	<TouchableHighlight onPress={this.moreInfo.bind(this)} underlayColor="#cecece" style={{backgroundColor: 'black'}}>
              <Image
                style={styles.newsLogo}
                source={images.news}
              />
            </TouchableHighlight>
            <TextInput 
              type="text"
              style={styles.textInput}
              value={this.state.search}
              onChangeText={(text) => this.updateSearch(text)}
              placeholder='Хайлт'
              key = {this.state.search}
              autoCorrect = {false}
              autoCapitalize = 'none'
            />
            <Image
              style={styles.searchIcon}
              source={images.search}
            />
            <ListView
            	style={styles.list}
            	enableEmptySections={true}
    	        dataSource={this.state.dataSource}
    	        renderRow={(rowData) =>
                <TouchableHighlight onPress={() => this.pressCell(rowData)} underlayColor="#cecece" style={styles.highLight}>
                  <View style={styles.containerList}>
                    <Text style={styles.text}>{rowData.title}</Text>
                    <Image source={images.right} style={styles.imageRight} />
                  </View>
                </TouchableHighlight>
              }
    	      />
    		  </ScrollView>
      </View>
      );
  }

  moreInfo(){
    this.props.navigator.push({
      id: 'Oilview'
    });
  }

  pressCell(rowData){
  	this.props.navigator.push({
      id: 'CarInfo',
      passProps:{title: rowData.title, index: rowData.index}
    })
  }

   onButtonPress(){
    this.props.navigator.pop();
  }

}

export default Suudliin;