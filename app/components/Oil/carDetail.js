import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput, TouchableHighlight, Image, ListView} from 'react-native';
import styles from '../../../style/index';
import images from '../../config/images';
import Card from '../common/Card';
import Spinner from '../common/Spinner';
import CardSection from '../common/CardSection';
import Data from '../../config/data';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
 
class CarInfo extends Component {
  constructor(props) {
  super(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    this.state = {
      dataSource: Data,
    };  

  this.renderCars = this.renderCars.bind(this);                                                                                                                                                                                                                                                                                               
  }

  updateSearch(text) {
    console.log(text);
    const newData = Data.filter(function(item) {
      const title = item.title.toLowerCase();
      const search = text.toLowerCase();
      return title.indexOf(search) > -1;
    });
    console.log(newData);
    this.setState({
      dataSource: newData,
    });
  }

  renderCars(Prop){
    const data = this.state.dataSource;
    let list = [];
    for (let i = 0; i < data.length; i++) {
      if(Prop.index == data[i].index){
        list.push(
        <Card key = {i}>
          <TouchableHighlight underlayColor="#bfbfbf" style={styles.highLight} onPress={() => this.pressCell(data[i])}>
            <View>
              <CardSection>
                <Text style={styles.oilName} key={ i }>{data[i].title}</Text>
                <Icon name="angle-right" size={21} color="#333" style={styles.imageRightDetail} />
              </CardSection>
            </View>
          </TouchableHighlight>
        </Card>
        );
      }
    }
    return list;
  }
  
  render(){
  const Prop = this.props.rowData;
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return (
    <View>
        <View style={styles.viewStyle}>
          <Icon name="angle-left" size={32} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()}/>
          <Text style={styles.titleText}>{Prop.title}</Text>
          <Text></Text>
        </View>
        <ScrollView style={styles.MainView}>
          <TouchableHighlight underlayColor="#cecece" style={{backgroundColor: 'black'}} onPress={() => Actions.moreNews1()}>
            <Image
              style={styles.newsLogo}
              source={images.back}
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
          <View style={{marginBottom: 140}}> 
            {this.renderCars(Prop)}
          </View>
        </ScrollView>
    </View>
   );
  }

  pressCell(data){
      Actions.carmoredetail(data)
  }
};

export default CarInfo;