import React, { Component } from 'react';
import {
    ScrollView,
    View,
    TouchableHighlight,
    Text,
    Image,
} from 'react-native';
import styles from '../../../style/index';
import images from '../../config/images';
import DataMore from '../../config/dataMore';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class CarDetailOil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: DataMore,
      btn : 1,
    };

  this.renderOil = this.renderOil.bind(this);
  }

  click( number ){
    this.setState({
      dataSource: this.state.dataSource,
      newFilm: this.state.newFilm,
      btn: number
    });
  }

  renderOil(){
    const data = this.state.dataSource;
    let list = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if(this.state.btn === 1){
          list.push(
            <View key={ item} style={{marginBottom: 126}}>
                  <View key={i.view1} style={styles.infoContainer1}>
                    <Text style={styles.oilText}  key={ item.key }> {item.title1} </Text>
                    <Image source={{ uri: item.imageUrl1 }} key={ item.imageUrl1 } style={styles.imageOil1}  />
                    <Text key={ item.content } style={styles.contentText1}>{item.content1}</Text>
                  </View>
                  <View key={i.view1a} style={styles.infoContainer1}>
                    <Text style={styles.oilText}  key={ item.keya }> {item.title1a} </Text>
                    <Image source={{ uri: item.imageUrl1a }} key={ item.imageUrla } style={styles.imageOil1}  />
                    <Text key={ item.contenta } style={styles.contentText1}>{item.content1a}</Text>
                  </View>
                  <View key={i.view1b} style={styles.infoContainer1}>
                    <Text style={styles.oilText}  key={ item.keyb }> {item.title1b} </Text>
                    <Image source={{ uri: item.imageUrl1b }} key={ item.imageUrl1b } style={styles.imageOil1}  />
                    <Text key={ item.contentb } style={styles.contentText1}>{item.content1b}</Text>
                  </View>
            </View>
          )} 

        else if (this.state.btn === 2){
          list.push(
            <View key={ item} style={{marginBottom: 126}}>
              <View key={i.view2} style={styles.infoContainer1}>
                <Text style={styles.oilText}  key={ item.key }> {item.title2} </Text>
                <Image source={{ uri: item.imageUrl2 }} key={ item.imageUrl2 } style={styles.imageOil1}  />
                <Text key={ item.content } style={styles.contentText1}>{item.content2}</Text>
              </View>
              <View key={i.view2a} style={styles.infoContainer1}>
                <Text style={styles.oilText}  key={ item.keya }> {item.title2a} </Text>
                <Image source={{ uri: item.imageUrl2a }} key={ item.imageUrl2a } style={styles.imageOil1}  />
                <Text key={ item.contenta } style={styles.contentText1}>{item.content2a}</Text>
              </View>
            </View>
        )} 

        else if (this.state.btn == 3){
          list.push(
            <View key={ item } style={{marginBottom: 126}}>
              <View key={i.view3} style={styles.infoContainer1}>
                <Text style={styles.oilText}  key={ item.key }> {item.title3} </Text>
                <Image source={{ uri: item.imageUrl3 }} key={ item.imageUrl3 } style={styles.imageOil1}  />
                <Text key={ item.content } style={styles.contentText1}>{item.content3}</Text>
              </View>
            </View>
          );
        }
        }

    return list;
  }

  render(){
    return ( 
      <View style={styles.MainView}>
        <View style={styles.viewStyle}>
          <Icon name="angle-left" size={32} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()}/>
          <Text style={styles.titleText}>{this.props.title}</Text>
          <Text></Text>
        </View>
        <ScrollView>
          <View style={styles.moreInfo}>  
            <TouchableHighlight onPress={() => this.click(1)} style={styles.Detail} underlayColor="#eee" >
              <Image source={images.oil3} style={styles.imageOil} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.click(2)} style={styles.Detail} underlayColor="#eee" >
              <Image source={images.oil1} style={styles.imageOil} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.click(3)} style={styles.Detail} underlayColor="#eee" >
              <Image source={images.oil2} style={styles.imageOil} />
            </TouchableHighlight>
          </View>
          {this.renderOil()}
        </ScrollView> 
      </View>
    );
  }

}

export default CarDetailOil;