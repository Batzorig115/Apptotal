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
import styles from '../../style/icon';
import images from './../config/images';

class Motorcycle extends Component {
	constructor() {
	super();
    this.state = {
      dataSource: 
[
  {  
     'index':1,
     'title':'BMW'
  },
  {
     'index':2,
     'title':'HONDA'
  },
  {  
     'index':3,
     'title':'HYUNDAI'
  },
  {  
     'index':4,
     'title':'ISUZU'
  },
  {  
     'index':5,
     'title':'KIA'
  },
  {  
     'index':7,
     'title':'MITSUBISHI'
  },
  {  
     'index':8,
     'title':'NISSAN (Includes DATSUN)'
  },
  {  
     'index':10,
     'title':'SUBARU'
  },
  {  
     'index':12,
     'title':'SUZUKI'
  },
  {  
     'index':13,
     'title':'TOYOTA'
  },
  {  
     'index':14,
     'title':'VOLKSWAGEN'
  },
  {  
     'index':15,
     'title':'MAZDA'
  },
  {  
     'index':16,
     'title':'DAIHATSU'
  },
  {  
     'index':17,
     'title':'MB'
  }
]
    };
  }

	render(){
			const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ( 
      <ScrollView>
        <View style={styles.viewStyle}>
        <TouchableHighlight underlayColor="#f8f8f8" onPress={this.onButtonPress.bind(this)}>
          <Image
            style={styles.homeIcon}
            source={images.left}
          />
        </TouchableHighlight>
          <Text style={styles.titleText}>МОТОЦИКЛ</Text>
          <Image
            style={styles.menuIcon}
            source={images.menu}
          />
      </View>
      	<Image
          style={styles.logoMain}
          source={images.back}
        />
        <TextInput 
          style={styles.textInput}
          //onChangeText={(text) => this.setState({text})}
          placeholder='Хайлт'
        />
        <Image
          style={styles.searchIcon}
          source={images.search}
        />
        <ListView
        	style={styles.list}
        	enableEmptySections={true}
	        dataSource={ds.cloneWithRows(this.state.dataSource)}
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
      );
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

  renderRow(dataRow){
  	console.log(dataRow);
		return (
			<TouchableHighlight>
				<View>
					<Text>
						{dataRow.title}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

export default Motorcycle;