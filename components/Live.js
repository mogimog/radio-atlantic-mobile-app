import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Live = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Height * 0.15,
    width: Width,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: '100%',
    width: '94%',
    backgroundColor: 'white',
    opacity: 0.5,
    borderRadius: 10,
  },
});
export default Live;
