import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Pressable, Alert, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import {DrawerActions} from '@react-navigation/native';

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
            source={require('../../assets/images/hub.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Pressable onPress={phoneOnPressHandler}>
            <MaterialCommunityIcons
              name="phone"
              size={globalStyle.headerIconSize}
              color={globalStyle.colorPrimary}
              style={styles.circleBorder}
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
  circleBorder: {
    borderColor: globalStyle.colorPrimary,
    borderWidth: 3,
    borderRadius: globalStyle.headerIconSize * 0.66,
    padding: 3,
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
    width: 130,
  },
  safeAreaView: {
    backgroundColor: globalStyle.colorIvory,
  },
});
