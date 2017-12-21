import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const MaizeScreen =() => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}
        onPress={() => Actions.gold()}
        >
          Maize Screen
        
        </Text>
      </View>
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white',
  },
});

export default MaizeScreen;