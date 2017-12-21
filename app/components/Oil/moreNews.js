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
} from 'react-native'
import styles from '../../../style/index';
import images from '../../config/images';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class MoreNews extends Component {

	render(){
    return ( 
    	<View>
	      	<View style={styles.viewStyle}>
				<Icon name="angle-left" size={32} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()}/>
				<Text style={styles.titleText}>JEEP WRANGLER</Text>
				<Text></Text>
		    </View>
		    <Image
	          style={styles.newsDetail}
	          source={images.news}
	        />
		    <ScrollView>
		        <View style={styles.container}>
			        <Text style={styles.content}>
			        	Тосыг дараах тохиолдлуудад заавал солих шаардлагатай.{'\n'}Үүнд: Хуучин машин авсан бол, улирлын шилжилтийн үед, үйлдвэрлэгчээс заасан хугацаанд,
						{'\n'}Тосыг сонгохдоо үйлдвэрээс заасан ангилал, хөдөлгүүрийн хүчин чадал онцлогт тохирсон тосыг сонгоно.{'\n'}{'\n'}
						Хөдөлгүүрийн тос 3 төрөлтэй.{'\n'}{'\n'}

						А. Синтетик тос: Дулааны өндөр чадвартай, ямар ч нөхцөлд шинж чанараа алдахгүй, өнгөр тогтооно.{'\n'}

						Б. Минерал тос: Температураас шууд хамааралтай. Өндөр температурт тослох чанарыг нэмэгдүүлэхийн тулд өтгөрүүлэгч бодис нэмсэн байдаг.{'\n'}

						В. Хагас синтетик: Энэ тосыг минерал болон синтетик тосны алтан дундаж гэж үздэг.{'\n'}

						Тосыг сонгохдоо хөдөлгүүрийн элэгдсэн байдлаас хамаарах хэрэгтэй. Жишээ нь: Хуучин муу хөдөлгүүрт синтетик тос хийвэл шингэн байдаг учраас жийргэвч резинээр тос алдах тохиолдол байдаг.
					</Text>
		        </View>
			</ScrollView>
		</View>
      );
  }
}

export default MoreNews;