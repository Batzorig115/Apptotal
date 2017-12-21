import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StatusBar, TouchableHighlight, TextInput, ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../../../style/index';
import images from '../../config/images';
import Unit from '../../config/unit';
import Icon from 'react-native-vector-icons/FontAwesome';

var windowWidth = Dimensions.get('window').width;

class Oil extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Unit),
    };
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
