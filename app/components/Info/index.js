import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NewsList from './News';
import NewsDetail from './newsDetail';
import NewsDatas from '../../config/newsData';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../style';

const Height = Dimensions.get("window").height

class Info extends Component {
  constructor() {
    super();

    this.renderRow = this.renderRow.bind(this)

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
        dataSource: ds.cloneWithRows(NewsDatas),
    };
  }
  
  renderRow(news) {
    return <NewsList
        item={news}
        onItemClick={() => Actions.newsdetail(news) }/>
            console.log(news);
  }
  
  renderSeparator(sectionId, rowId){
    return <View key={rowId} style={styles.separator} />
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewStyle}>
          <Text></Text>
          <Text style={styles.titleText}>МЭДЭЭЛЭЛ</Text>
          <Text></Text>
        </View>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSeparator={this.renderSeparator}
            removeClippedSubviews={false}
        />
      </View>
    );
  }

};

export default Info;
