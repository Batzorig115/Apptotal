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
				<Text style={styles.titleText}>TOTAL OIL</Text>
				<Text></Text>
		    </View>
		    <Image
	          style={styles.newsDetail}
	          source={images.back}
	        />
		    <ScrollView>
		        <View style={styles.container}>
			        <Text style={styles.content}>
			        	Дэлхийн шилдэг автомашин үйлдвэрлэгчдийн /TOYOTA, NISSAN, HONDA, HYUNDAI, KIA…/ үйлдвэрийн тосыг нийлүүлдэг ТОТАЛ тосны ХАРИУЦЛАГАТАЙ ЖОЛООЧ УРАМШУУЛАЛТ АЯН ЭХЭЛЛЭЭ.{'\n'}{'\n'}
								Жолооч бүрт:{'\n'}
								• Онцгой бэлэгтэй{'\n'}
								• ТОТАЛ тос 30% - 50% хямдралтай авах боломжийг олгож байна.{'\n'}{'\n'}
								АЖЛЫН ХӨЛС ҮНЭ ТӨЛБӨРГҮЙ.{'\n'}{'\n'}
								ТОТАЛ ТОСНЫ ДАВУУ ТАЛ: {'\n'}
								• Түлшний хэрэглээг 20% бууруулна. /Fuel Economy/{'\n'}
								• Автомашинаас гарах хорт утааны хэмжээг 20% бууруулна. /ЭКО Улаанбаатар/{'\n'}
								• Эрс тэс уур амьсгалтай 150 оронд амжилттай туршигдаж баталгаажсан. {'\n'}
								• TOYOTA T-WS стандартын дагуу бүтээгдсэн хамгийн сайн чанарын Автомат кропны тос үйлдвэрлэдэг /Fluidmatic MV LV/{'\n'}
								• Дэлхийн шилдэг автомашин үйлдвэрлэгчдээс үйлдвэрийн баталгаа авсан /TOYOTA, NISSAN, HYUNDAI, HONDA, KIA, MERCEDES, BMW…/{'\n'}{'\n'}
								Дэлхийн авто спортын шилдгүүдтэй мөр зэрэгцэн алхахыг хүсвэл та дараах баталгаат авто сервисүүдээс ФРАНЦЫН ТОТАЛ брэндийн тосоо хямдралтай аваарай:{'\n'}
								1. Панда Автоклиник – Баянбүрдийн тойргийн зүүн талд /8019-0434/{'\n'}
								2. Дельта Авто Сервис – 19, Хуучин Цагаан Хаалга /9917-0000/{'\n'}
								3. Нисдэг Машин Плаза Павильон №1-4 /9909-1487/{'\n'}
								4. Автомалл Павильон №1-07 /9989-5133/{'\n'}
								5. Автоплаза 2 Павильон №1-22 /9494-1177/	
							</Text>
		        </View>
			</ScrollView>
		</View>
      );
  }
}

export default MoreNews;