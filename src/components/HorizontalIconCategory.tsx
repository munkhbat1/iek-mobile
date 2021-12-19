import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import VectorImage from 'react-native-vector-image';

export const HorizontalIconCategory = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      <VectorImage
        source={require('../../assets/images/meter.svg')}
        style={styles.icon}
      />
      <VectorImage
        source={require('../../assets/images/avtomat-tasluur.svg')}
        style={styles.icon}
      />
      <VectorImage
        source={require('../../assets/images/cable.svg')}
        style={styles.icon}
      />
      <VectorImage
        source={require('../../assets/images/sambar.svg')}
        style={styles.icon}
      />
      <VectorImage
        source={require('../../assets/images/gereltuuleg.svg')}
        style={styles.icon}
      />
      <VectorImage
        source={require('../../assets/images/untraalga.svg')}
        style={styles.icon}
      />
      <VectorImage
        source={require('../../assets/images/sambar.svg')}
        style={styles.icon}
      />
      <View style={[styles.icon, styles.otherIconContainer]}>
        <MaterialCommunityIcons
          name="dots-horizontal"
          style={styles.otherIcon}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 10,
    paddingBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 1000,
    borderWidth: 2,
    resizeMode: 'contain',
  },
  otherIcon: {
    fontSize: 30,
    color: 'black',
  },
  otherIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
