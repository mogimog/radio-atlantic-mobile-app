import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Live from './components/Live';
import Reagir from './components/Reagir';
import BreakingNews from './components/BreakingNews';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('./assets/bg.png')}
        resizeMode="cover">
        <View style={{zIndex: 3, elevation: 2}}>
          <Header />
        </View>

        <ScrollView style={{zIndex: 0}}>
          <View style={{marginTop: 90}}>
            <Live />
            <View style={{margin: 5}}></View>
            <Reagir />
            <View style={{margin: 5}}></View>
            <BreakingNews />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
