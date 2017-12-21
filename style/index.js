import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  Mapcontainer: {
    ...StyleSheet.absoluteFillObject,
    // justifyContent: 'flex-end',
    flex: 1,
  },
  map:{
  
    height:150,
    width:150
  },
  tabBarImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  tabBarOil: {
    width: 34,
    height: 34,
    resizeMode: 'contain'
  },
  containerCenter: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  errorText: {
    textAlign: 'center',
    color: '#F44336',
    fontSize: 16,
    marginBottom: 10
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    padding: 7,
    marginBottom: 5,
    borderRadius: 25,
    borderColor: '#ccc',
  },
  loading: {
    backgroundColor: '#fff',
    height: windowHeight,
    paddingTop: 250
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 160
  },
  oilName: {
    paddingTop: 3,
    paddingLeft: 5
  },
  infoContainer1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    paddingTop: 15,
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  MainView: {
    backgroundColor: '#fff',
    marginBottom: 135,
    height: windowHeight
  },
  center: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 30,
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
  },
  errorTextStyle: {
    textAlign: 'center',
    marginBottom: 6,
    color: 'red'
  },
  tabBar: {
    paddingBottom: 0,
    marginBottom: 0
  },
  moreInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapTab: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  oilTab: {
    flex:1,
    height: 35,
    resizeMode: 'contain',
  },
  contentText: {
    textAlign: 'justify',
    paddingBottom: 70
  },
  contentText1: {
    textAlign: 'justify'
  },
  tabImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    padding: 7,
    marginBottom: 5, 
    borderRadius: 25,
    borderColor: '#ccc',
  },
  listText: {
    maxWidth: 288
  },
  imageRightDetail: {
    marginRight: 7,
  },
  imageOil: {
    height: 35,
    resizeMode: 'contain'
  },
  imageOil1: {
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
    marginTop: 15
  },
  infoDetail: {
    margin: 13,
    flexDirection: 'column',
    marginBottom: 57
  },
  newsImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 110,
    resizeMode: 'contain'
  },
  oilImage: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    height: 110,
    marginBottom: 10,
    marginTop: 10
  },
  oilText: {
    fontWeight: '800'
  },
  viewStyle: {
    backgroundColor: '#F3F3F4',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    borderBottomWidth: 1,
    borderColor: '#bfbec1',
    elevation: 2,
    position: 'relative',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    marginTop: 20
  },
  logoOne: {
    flex: 1,
    width: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Maptext: {
    color: 'white',
    fontSize: 12
  },
  scrollview: {
    alignItems: 'center',
  },
  // map: {
  //   width: windowWidth,
  //   height: windowHeight
  // },
  customView: {
    width: 140,
    height: 100,
  },
  newsLogo: {
    height: 200,
    width: windowWidth,
  },
  profileLogo: {
    height: 200,
    width: 200,
    borderRadius: 200/2,
    margin: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2C8AED',
    resizeMode: 'contain',
  },
  newsDetail: {
    height: 200,
    width: windowWidth,
  },
  homeText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21,
    fontSize: 15
  },
  homeFirst: {
    width: 70
  },
  headIcon: {
    paddingTop: 15,
    paddingLeft: 20
  },
  headRightIcon: {
    paddingTop: 15,
    paddingRight: 20
  },
  cancelIcon: {
    alignItems: 'flex-end',
    resizeMode: 'contain',
    height: 20,
    marginTop: 20
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    marginTop: 18
  },
  logoMain: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: windowWidth,
    marginTop: -5
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
   },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  textInput: {
    height: 35,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#cecece',
    marginBottom: 20,
    marginLeft: 36,
    marginRight: 36,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff'
   },
   list: {
    marginBottom: 50,
    backgroundColor: '#fff',
    marginTop: 5
   },
   Loglist:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
   },
   logIn:{
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 15,
    paddingTop: 13,
    paddingBottom: 15,
    paddingRight: 124,
    paddingLeft: 124
   },
    content: {
      fontSize: 14,
      padding: 15,
      textAlign: 'justify',
      paddingBottom: 340
    },
   logText:{
    fontSize: 17,
    color: '#555'
   },
   facebook:{
    backgroundColor: '#2d4485',
    paddingLeft: 140,
    paddingRight: 140,
    borderRadius: 30,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 15
   },
   twitter:{
    backgroundColor: '#5dd7fc',
    paddingLeft: 146,
    paddingRight: 146,
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 15
   },
   gmail:{
    backgroundColor: '#e04a39',
    paddingLeft: 146,
    paddingRight: 146,
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 15
   },
   socialFacebook:{
    height: 40,
    width: 40
   },
   socialTwitter:{
    height: 28,
    width: 28
   },
   socialGmail:{
    height: 27,
    width: 27
   },
   searchIcon: {
    flex: 0,
    width: 17,
    marginLeft: 52,
    marginTop: -45,
    marginBottom: 20,
   },
   separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
   },
   Detail: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 16,
    marginRight: 2,
    marginLeft: 2
   },
   tabMap: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#007aff',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    justifyContent: 'center'
   },
   activeMapTab: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    justifyContent: 'center'
   },
   tabOil: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#007aff',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    justifyContent: 'center'
   },
   tabNumber: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#007aff',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderLeftWidth: 0,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    justifyContent: 'center'
   },
   activeOilTab: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#333',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderRightWidth: 0,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    justifyContent: 'center'
   },
   activeNumTab: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#333',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderLeftWidth: 0,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    justifyContent: 'center'
   },
   Tabtext: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 12
   },
   highLight: {
    borderRadius: 25,
    marginRight: 4,
    marginLeft: 4,
   },
  myCar: {
    alignItems: 'center',
    width: windowWidth,
    height:250,
    resizeMode: 'contain',
    borderWidth: 1,
    paddingBottom: 10,
    borderColor: '#333'
  },
  camera: {
    position: 'absolute',
    transform: [{'translate': [0,0, 1]}],
    width: 40,
    resizeMode: 'contain',
    left: 15,
    top: -10
  },
  text: {
    textAlign: 'center',
    marginBottom: 8
  },
  datePicker: {
    borderColor: '#ccc',
    width: 220,
    marginRight: 10
  },
  textPicker: {
    color: '#0645AD', 
  },
  label: {
    fontSize: 13,
    paddingLeft: 21,
    flex: 1,
    color: '#555',
    paddingTop: 12
  },
  textColor: {
    color: '#b3b3b3'
  },
  imageAdd: {
    resizeMode: 'contain',
    width: 120,
    height: 100
  },
  selected: {
    backgroundColor: 'red',
    width: 20,
    height: 1,
    alignSelf: 'center'
  },
  unselected: {
    width: 0,
    height: 0,
    alignSelf: 'center'
  }
 
});
