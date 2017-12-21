import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, TouchableHighlight, Image } from 'react-native';
import MapView from 'react-native-maps';
import images from '../../config/images';
import CustomCallout from './CustomCallOut';
import Icon from 'react-native-vector-icons/Ionicons';
import AutoService from './json/autoService';
import GasStation from './json/gasStation';
import CarNumber from './json/carNumber';
import styles from '../../../style/index';



const { width, height } = Dimensions.get('window');
const Height = height;
const ASPECT_RATIO = width / height;
const LATITUDE = 47.9174166;
const LONGITUDE = 106.8759096;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      btn : 1,
      markers: AutoService,
      gas: GasStation,
      num: CarNumber,
    };
    // this.renderMap = this.renderMap.bind(this);
  }

  click( number ){
    this.setState({
      dataSource: this.state.dataSource,
      btn: number
    });
  }

  renderMap(){
      if(this.state.btn === 1){
        console.log(this.state.btn);
        return (
        
        <MapView
          provider={this.props.provider}
          style={styles.map}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          initialRegion={this.state.region}
        >
        
        {this.state.markers.map((marker,i) => (
          <MapView.Marker
            key={i}
            image={marker.image}
            title={marker.title}
            //description={marker.description}
            coordinate={marker.latlng}
          >
            <MapView.Callout tooltip style={styles.customView}>
              <CustomCallout>
                <Text style={styles.Maptext}>
                  <Icon style={styles.icon} name="ios-home-outline" size={13} color='#fff'/>  {marker.title}{"\n"}{"\n"}
                  <Icon style={styles.icon} name="ios-navigate-outline" size={13} color='#fff'/>  {marker.description}{"\n"}{"\n"}
                  <Icon style={styles.icon} name="ios-call-outline" size={12} color='#fff'/>  {marker.phone}
                </Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>
        ))}

       </MapView> 
    )}

      // else if (this.state.btn === 2){ 
      //   return (
      //   <MapView
      //     provider={this.props.provider}
      //     style={styles.map}
      //     scrollEnabled={true}
      //     zoomEnabled={true}
      //     pitchEnabled={true}
      //     rotateEnabled={true}
      //     initialRegion={this.state.region}
      //   >
      //   {this.state.gas.map((marker,i) => (
      //     <MapView.Marker
      //       key={i}
      //       image={marker.image}
      //       title={marker.title}
      //       //description={marker.description}
      //       coordinate={marker.latlng}
      //     >
      //       <MapView.Callout tooltip style={styles.customView}>
      //         <CustomCallout>
      //           <Text style={styles.Maptext}>
      //             <Icon style={styles.icon} name="ios-home-outline" size={13} color='#fff'/>  {marker.title}{"\n"}{"\n"}
      //             <Icon style={styles.icon} name="ios-navigate-outline" size={13} color='#fff'/>  {marker.description}{"\n"}{"\n"}
      //             <Icon style={styles.icon} name="ios-call-outline" size={12} color='#fff'/>  {marker.phone}
      //           </Text>
      //         </CustomCallout>
      //       </MapView.Callout>
      //     </MapView.Marker>
      //   ))}
      //   </MapView>
      // )}

      // else if (this.state.btn === 3){
      //   return (
      //   <MapView
      //     provider={this.props.provider}
      //     style={styles.map}
      //     scrollEnabled={true}
      //     zoomEnabled={true}
      //     pitchEnabled={true}
      //     rotateEnabled={true}
      //     initialRegion={this.state.region}
      //   >
      //   {this.state.num.map((marker,i) => (
      //     <MapView.Marker
      //       key={i}
      //       image={marker.image}
      //       title={marker.title}
      //       //description={marker.description}
      //       coordinate={marker.latlng}
      //     >
      //       <MapView.Callout tooltip style={styles.customView}>
      //         <CustomCallout>
      //           <Text style={styles.Maptext}>
      //             <Icon style={styles.icon} name="ios-home-outline" size={13} color='#fff'/>  {marker.title}{"\n"}{"\n"}
      //             <Icon style={styles.icon} name="ios-navigate-outline" size={13} color='#fff'/>  {marker.description}{"\n"}{"\n"}
      //             <Icon style={styles.icon} name="ios-time-outline" size={12} color='#fff'/>  {marker.phone}
      //           </Text>
      //         </CustomCallout>
      //       </MapView.Callout>
      //     </MapView.Marker>
      //   ))}
      //   </MapView>
      // )}
  }

  render() {
    return (
      <View style={{height: Height}}>
        <View style={styles.Mapcontainer}>
          <ScrollView>
            <View style={styles.viewStyle}>
              <Text></Text>
              <Text style={styles.titleText}>ХАЯГ БАЙРШИЛ</Text>
              <Text></Text>
            </View>
            <View style={styles.mapTab}>  
              <TouchableHighlight onPress={() => this.click(1)} style={styles.tabOil} underlayColor="#007aff" >
                <Text style={styles.Tabtext} >Toтал тосны гэрээт авто сервисүүд</Text>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.click(3)} style={styles.tabNumber} underlayColor="#007aff" >
                <Text style={styles.Tabtext} >Улсын дугаар авах газарууд</Text>
              </TouchableHighlight>
            </View>
            {/* {this.renderMap()} */}
            </ScrollView>
        </View>
      </View>
    );
  }
}