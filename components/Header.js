import {View, Text, ImageBackground, Dimensions, Image} from 'react-native';
import React from 'react';
import {BlurView, VibrancyView} from '@react-native-community/blur';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Header = () => {
  return (
    <View style={{flex: 1, zIndex: 50}}>
      <View style={{}}>
        <View
          style={{
            overflow: 'hidden',
            width: '100%',
            height: 80,
          }}>
          <BlurView
            blurType="dark"
            blurAmount={50}
            style={{width: '100%', height: 80}}>
            <View
              style={{
                height: Height * 0.6,
                width: Width * 0.3,
              }}>
              <Image
                source={require('../assets/logo.png')}
                resizeMode="contain"
                style={{height: Height * 0.6, width: Width * 0.3}}
              />
            </View>
            <View>
              <Image />
            </View>
          </BlurView>
        </View>
      </View>
    </View>
  );
};

export default Header;
