import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Reagir = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.cmt}>
          <Text style={styles.cmtext}>
            <Text style={styles.namecmt}>Amine Aouad :</Text> Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam scelerisque …
          </Text>
        </View>
        <View style={styles.botton}>
          <View style={styles.reactionbtn}>
            <Text style={styles.textbtn}>Réagir</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Height * 0.08,
    width: Width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: '100%',
    width: '94%',
    backgroundColor: '#344F83',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginLeft: Width * 0.06,
  },
  botton: {
    marginRight: Width * 0.06,
  },
  reactionbtn: {
    width: Width * 0.22,
    height: Height * 0.04,
    backgroundColor: '#E3E0D8',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtn: {
    fontSize: Height * 0.015,
    fontWeight: '600',
    color: '#0A5076',
  },
  cmt: {
    marginLeft: Width * 0.06,
    width: Width * 0.57,
  },
  cmtext: {
    fontSize: Height * 0.013,
    fontWeight: '600',
    color: 'white',
  },
  namecmt: {
    fontSize: Height * 0.013,
    fontWeight: '800',
    color: '#EAE3D2',
  },
});

export default Reagir;
