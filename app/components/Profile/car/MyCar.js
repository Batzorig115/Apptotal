import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, Image, ScrollView, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { usersFetch } from '../actions/UserActions';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from './ListItem';
import images from '../../../config/images';
import Spinner from '../Spinner';
import Carousel from 'react-native-banner-carousel';


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const imagesS = [
	"http://is5.mzstatic.com/image/thumb/Purple128/v4/e9/13/65/e9136599-6efe-1e4e-3119-57507ab20403/source/200x200bb.jpg",
	"http://is5.mzstatic.com/image/thumb/Purple128/v4/e9/13/65/e9136599-6efe-1e4e-3119-57507ab20403/source/200x200bb.jpg",
	"http://is5.mzstatic.com/image/thumb/Purple128/v4/e9/13/65/e9136599-6efe-1e4e-3119-57507ab20403/source/200x200bb.jpg"
];

class MyCar extends Component {

	constructor() {
	    super();
	    this.state = {
	    	loading: true,
	    }
	}

	componentWillMount() {
		this.props.usersFetch();
	}

	componentWillReceiveProps(nextProps) {
		// nextProps are the set of props that this component will be rendered
		// this.props is still the old set of props
		this.createDataSource(nextProps);
	}

	createDataSource({ users }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.setState({
			dataSource: ds.cloneWithRows(users),
			loading: false
		});
	}

	renderRow(user) {
		return <ListItem user={user} />
	}

	renderPage(image, index) {
		return (
				<View key={index}>
						<Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
				</View>
		);
}

	renderContent() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <Spinner />
        </View>
      );
    }
    return (
    <View style={{marginBottom: 160}}>
    	<ScrollView>
		    <ListView
				enableEmptySections
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				style={{minHeight: 700, backgroundColor: '#fff'}}
				removeClippedSubviews={false}
				/>
				<Carousel
								autoplay
								autoplayTimeout={5000}
								loop
								index={0}
								pageSize={BannerWidth}
							>

								{imagesS.map((image, index) => this.renderPage(image, index))}
						</Carousel>
			</ScrollView>
			
		</View>
    );
  }

	render() {
		return (
			<View>
				<View style={styles.viewStyle}>
		          <Icon name="angle-left" size={27} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()} />
		          <Text style={styles.titleText}>МИНИЙ МАШИНУУД</Text>
		          <Icon name="plus" size={27} color="#2f2f2f" style={styles.headRightIcon} onPress={() => Actions.userCreate()} />
							
							
		        </View>
			    {this.renderContent()}
					
			</View>
		);
	};
}

const mapStateToProps = state => {
	const users = _.map(state.users, (val, uid) => {
		return { ...val, uid }; //buh object iig array bolgoj baigaa
	});
	return { users };
};

export default connect(mapStateToProps, {usersFetch})(MyCar);