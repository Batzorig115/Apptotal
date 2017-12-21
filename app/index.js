import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import images from './config/images';
import styles from './../style';
import Profile from './components/Profile/index';
import Oil from './components/Oil/index';
import Unit from './components/Unit/index';
import Contact from './components/Contact/index';
import Info from './components/Info/index';
import Maps from './components/Map/index';
import NewsDetail from './components/Info/newsDetail';
import CarDetail from './components/Oil/carDetail';
import CarDetailOil from './components/Oil/carDetailOil';
import MoreNews from './components/Oil/moreNews';
import MoreNews1 from './components/Oil/moreNews1';
import reducers from './components/Profile/reducers';
import RegisterForm from './components/Profile/RegisterForm';
import MainUserInfo from './components/Profile/car/MainUserInfo';
import UserList from './components/Profile/car/UserList';
import UserCreate from './components/Profile/car/UserCreate';
import UserEdit from './components/Profile/car/UserEdit';
import ProfileInfo from './components/Profile/car/ProfileInfo';
import MyCar from './components/Profile/car/MyCar';
import MyInfo from './components/Profile/car/MyInfo';
import LoginForm from './components/Profile/LoginForm';
import Icon from 'react-native-vector-icons/FontAwesome';

var width = Dimensions.get('window').width;
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// const ProfileIcon = ({ selected, title }) => {
//   return (
//     <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, padding: 10 }}>
//       <Image source={require('./images/profile.png')} style={styles.tabBarImage} />
//     </View>
//   );
// } 
// const OilIcon = ({ selected }) => {
//   return (
//     <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//       <Image source={require('./images/oil.png')} style={styles.tabBarOil} />
//     </View>
//   );
// }
// const InfoIcon = ({ selected }) => {
//   return (
//     <View style={{ borderBottomWidth: selected ? 0 : 1, borderColor: 'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//       <Image source={require('./images/info.png')} style={styles.tabBarImage} />
//     </View>
//   );
// }
// const MapIcon = ({ selected }) => {
//   return (
//     <View style={{  flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//       <Image source={require('./images/map.png')} style={styles.tabBarImage} />
//     </View>
//   );
// }

const TabIcon = ({ selected, title, Iconname }) => {
  
  const tabStyle = selected ? styles.selected : styles.unselectedicon 
  
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <Image source={Iconname} style={styles.tabBarImage} />
      <View style={styles.tabStyle}></View>
    </View>
  );
}

export default class AppTotal extends Component {

  render(){
    return (
      <Provider store={store}>
      	<Router initial={true}>

						<Scene
              key="tabbar"
              tabs={true}
              //tabBarStyle={{ backgroundColor: '#e6e6e6' }}
              gestureEnabled={false}
              showLabel={false}
              tabBarPosition={'bottom'}
            >
              <Scene 
                key="Profile"  
                Iconname={require('./images/profile.png')} 
                icon={TabIcon}
                hideNavBar={true}
                {...this.props}>
                
                <Scene
                  key="profile"
                  component={Profile}
                  tintColor='#6fa8dc'
                />
                <Scene
                  key="register"
                  component={RegisterForm}
                  tintColor='#6fa8dc'
                  direction='vertical'
                />
                <Scene
                  key="mainuserinfo"
                  component={MainUserInfo}
                  tintColor='#6fa8dc'
                />
                <Scene
                  key="loginform"
                  component={LoginForm}
                  tintColor='#6fa8dc'
                />
                <Scene
                  key="myCar"
                  component={MyCar}
                  titleStyle={{ fontSize: 15 }}
                />
                <Scene
                  key="myInfo"
                  component={MyInfo}
                  titleStyle={{ fontSize: 15 }}
                />
                <Scene
                  key="userCreate"
                  component={UserCreate}
                  titleStyle={{ fontSize: 15 }}
                />
                <Scene
                  key="userEdit"
                  component={UserEdit}
                  titleStyle={{ fontSize: 15 }}
                />
                <Scene
                  key="userInfo"
                  component={UserEdit}
                  titleStyle={{ fontSize: 15 }}
                />
              </Scene>

              <Scene key="Oil" title="" Iconname={require('./images/oil.png')} icon={TabIcon} hideNavBar={true} {...this.props}>
                <Scene
                  key="oil"
                  component={Oil}
                />
                <Scene
                  key="cardetail"
                  component={CarDetail}
                />
                <Scene
                  key="carmoredetail"
                  component={CarDetailOil}
                />
                <Scene
                  key="moreNews"
                  component={MoreNews}
                />
                <Scene
                  key="moreNews1"
                  component={MoreNews1}
                />
              </Scene>

              <Scene key="Info" title="a" Iconname={require('./images/info.png')} icon={TabIcon} hideNavBar={true} {...this.props} >
                <Scene
                  key="info"
                  component={Info}
                />
                <Scene
                  key="newsdetail"
                  component={NewsDetail}
                />
                {/* <Scene
                  key="contact"
                  component={Contact}
                /> */}

                {/* <Scene
                  key="unit"
                  component={Unit}
                /> */}

              </Scene>
              <Scene key="Maps"  Iconname={require('./images/map.png')}  icon={TabIcon} hideNavBar={true} {...this.props} initial>
                    <Scene
                      key="map"
                      component={Maps}
                    />
              </Scene>
            
                
              {/* <Scene key="Contact"  Iconname={require('./images/map.png')}  icon={TabIcon} hideNavBar={true} {...this.props} initial>
                <Scene
                  key="contact"
                  component={Contact}
                />
              </Scene> */}
              
              {/* <Scene key="Unit" Iconname={require('./images/profile.png')}  icon={TabIcon} hideNavBar={true} {...this.props}>
                <Scene
                  key="unit"
                  component={Unit}
                />
                
              </Scene> */}
              
            </Scene>
        </Router>
      </Provider>
    )
  }

}
