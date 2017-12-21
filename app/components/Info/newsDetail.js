import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, Alert, Platform, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class NewsDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var item = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.viewStyle}>
                  <Icon name="angle-left" size={32} color="#2f2f2f" style={styles.headIcon} onPress={() => Actions.pop()} />
                  <Text style={styles.titleText}>МЭДЭЭЛЭЛ</Text>
                  <Text></Text>
                </View>
                <Image style={styles.newsImage}
                    source={{ uri: item.imageUrl }}/>
                    
                <ScrollView automaticallyAdjustContentInsets={false} >
                    <View style={styles.containerPanel}>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>

                    </View>
                </ScrollView>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    newsImage: {
        backgroundColor: 'gray',
        flex: 1,
    },
    headIcon: {
        paddingTop: 15,
        paddingLeft: 20
    },
      headRightIcon: {
        paddingTop: 15,
        paddingRight: 20
      },
    containerPanel: {
        flex: 1,
        flexDirection: 'column',
        padding: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    content: {
        fontSize: 14,
        paddingTop: 10,
        textAlign: 'justify',
        paddingBottom: 40
    },
    date: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'orange',
        paddingTop: 10
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
    homeIcon: {
        alignItems:'flex-start',
        resizeMode: 'contain',
        height: 24,
        marginTop: 20
    },
    titleText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        marginTop: 18
    },
    menuIcon: {
        alignItems:'flex-end',
        resizeMode: 'contain',
        height: 13,
        marginTop: 20
    },
});

export default NewsDetail;