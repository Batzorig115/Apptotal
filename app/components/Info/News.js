'use strict'

import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';

class NewsList extends Component {

    render() {
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }

        var item = this.props.item;

        return (
            <TouchableElement onPress={this.props.onItemClick}  underlayColor="#e6e6e6">
                <View style={styles.container}>

                  <Image style={styles.newsImage}
                      resizeMode='cover'
                      source={{ uri: item.imageUrl }}/>

                  <View style={styles.containerPanel}>

                      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                      <Text style={styles.subtitle} numberOfLines={2}>{item.content}</Text>
                      
                      <Text style={styles.date}>{item.date}</Text>

                  </View>
                  
                </View>
            </TouchableElement>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1, 
        //flexDirection: 'row', 
        padding: 10,
    },
    newsImage: {
        height: 200,
        resizeMode: 'contain',
        backgroundColor: 'gray'
    },
    containerPanel: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 8,
        paddingTop: 6
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 4
    },
    date: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#ea1c3c'
    }
});

export default NewsList;