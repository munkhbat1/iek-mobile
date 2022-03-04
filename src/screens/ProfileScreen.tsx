import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import {useAppSelector} from '../redux/hooks';
import {selectUser} from '../redux/slices/userSlice';
import jwt_decode from 'jwt-decode';
import {useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const user = useAppSelector(selectUser);
  const payload: any = jwt_decode(user.jwt);
  const navigation = useNavigation();

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
        <Pressable
          style={styles.buttonItem}
          onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.buttonItemText}>Миний захиалгууд</Text>
        </Pressable>
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
  buttonItem: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    height: 50,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: globalStyle.colorSecondary,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
    shadowOpacity: 30,
  },
  buttonItemText: {
    color: globalStyle.colorShuttleGrey,
    textAlign: 'justify',
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
