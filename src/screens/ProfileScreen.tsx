import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import {useAppSelector} from '../redux/hooks';
import {selectUser} from '../redux/slices/userSlice';
import jwt_decode from 'jwt-decode';

export const ProfileScreen = () => {
  const user = useAppSelector(selectUser);
  const payload: any = jwt_decode(user.jwt);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo-black.jpg')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.title}>@{user.userInfo.name}</Text>
        </View>
        <View style={styles.listItem}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            style={styles.listItemIcon}
          />
          <View>
            <Text style={styles.listItemText}>{payload.email}</Text>
          </View>
        </View>
        <View style={styles.listItem}>
          <MaterialCommunityIcons name="phone" style={styles.listItemIcon} />
          <View>
            <Text style={styles.listItemText}>{user.userInfo.phone}</Text>
          </View>
        </View>
        <View style={styles.whiteSpace} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 1000,
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 15,
  },
  listItemText: {
    color: globalStyle.colorShuttleGrey,
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  listItemIcon: {
    color: globalStyle.colorPrimary,
    fontSize: 20,
  },
  container: {
    paddingHorizontal: 30,
    backgroundColor: globalStyle.colorIvory,
  },
  title: {
    color: globalStyle.colorShuttleGrey,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
  },
  subTitle: {
    color: globalStyle.colorShuttleGrey,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  whiteSpace: {
    height: 320,
  },
});
