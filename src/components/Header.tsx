import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Pressable, Alert, Linking, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import {DrawerActions} from '@react-navigation/native';
import VectorImage from 'react-native-vector-image';

export const Header = () => {
  const phoneOnPressHandler = () => {
    Alert.alert(
      'Холбоо барих:',
      'Байгууллагын утас руу залгах уу? Утас: 70152828',
      [
        {
          text: 'Үгүй',
          onPress: () => console.log('Dial to phone: Cancel Pressed'),
        },
        {
          text: 'Тийм',
          onPress: () => Linking.openURL(`tel:${70152828}`),
        },
      ],
    );
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView} edges={['top']}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <MaterialCommunityIcons
              name="menu"
              size={globalStyle.headerIconSize * 1.4}
              color={globalStyle.colorPrimary}
            />
          </Pressable>
        </View>
        <View style={styles.headerRight}>
          <Image
            source={require('../../assets/images/iek-biz.png')}
            style={styles.image}
          />
          <Pressable onPress={phoneOnPressHandler}>
            <VectorImage
              source={require('../../assets/images/phone-icon.svg')}
              style={styles.headerIcon}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, .3)',
    borderBottomWidth: 4,
    paddingVertical: 8,
  },
  headerIcon: {
    width: 42,
    height: 42,
  },
  headerRight: {
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeft: {
    paddingLeft: 10,
  },
  image: {
    height: 42,
    width: 110,
    resizeMode: 'contain',
  },
  safeAreaView: {
    backgroundColor: globalStyle.colorIvory,
  },
});
