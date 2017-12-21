import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StatusBar, TouchableHighlight, TextInput, ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../../../style/index';
import images from '../../config/images';
import Manufacturer from '../../config/manufacturer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icona from 'react-native-vector-icons/MaterialIcons';

var windowWidth = Dimensions.get('window').width;

class Oil extends Component {
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
              {/* <Icona name="more vert" size={25}
              /> */}
              <Icona name="search" size={17} color="#cecece" />
              
          </View>
          <ScrollView style={{marginBottom: 40, backgroundColor: '#fff' }}>
            <TouchableHighlight onPress={() => Actions.moreNews()} underlayColor="#cecece" style={{backgroundColor: 'black'}}>
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
              underlineColorAndroid='transparent'
            />
            <Icon name="search" size={17} color="#cecece" style={styles.searchIcon}/>
            <ListView
              style={styles.list}
              dataSource={this.state.dataSource}
              renderRow={(rowData) => this.renderRow(rowData)}
              removeClippedSubviews={false}
            />
          </ScrollView>
      </View>
    );
  }

  renderRow(rowData) {
    return (
       <TouchableHighlight onPress={() => Actions.cardetail({ rowData: rowData })} underlayColor="#cecece" style={styles.highLight}>
          <View style={styles.containerList}>
            <Text style={styles.oilName}>{rowData.title}</Text>
            <Icon name="angle-right" size={21} color="#333" style={styles.imageRightDetail} />
          </View>
        </TouchableHighlight>

    )
  }
}


export default Oil;
