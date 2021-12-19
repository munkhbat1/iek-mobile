import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {logOut, selectUser} from '../redux/slices/userSlice';

export const LeftDrawerContent = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
    navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.drawerItems}>
        <View style={styles.drawerHeader}>
          <View>
            <Image
              source={require('../../assets/images/logo-black.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.drawerHeaderTexts}>
            <Text style={styles.title}>Электромонтаж</Text>
            <Text style={styles.accountId}>Тавтай морил</Text>
          </View>
        </View>
        <DrawerItem
          label={() => {
            return <Text style={styles.drawerItemText}>Нүүр</Text>;
          }}
          icon={() => {
            return (
              <MaterialCommunityIcons
                name="home"
                color={globalStyle.colorSecondary}
                size={globalStyle.leftDrawerIconSize}
              />
            );
          }}
          onPress={() => navigation.navigate('Main')}
        />
        <DrawerItem
          label={() => {
            return <Text style={styles.drawerItemText}>Холбоо барих</Text>;
          }}
          icon={() => {
            return (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={globalStyle.colorSecondary}
                size={globalStyle.leftDrawerIconSize}
              />
            );
          }}
          onPress={() => navigation.navigate('Contact')}
        />
        <DrawerItem
          label={() => {
            return (
              <Text style={styles.drawerItemText}>Үйлчилгээний нөхцөл</Text>
            );
          }}
          icon={() => {
            return (
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                color={globalStyle.colorSecondary}
                size={globalStyle.leftDrawerIconSize}
              />
            );
          }}
          onPress={() => navigation.navigate('TermsOfService')}
        />
        <DrawerItem
          label={() => {
            return (
              <Text style={styles.drawerItemText}>Түгээмэл асуулт хариулт</Text>
            );
          }}
          icon={() => {
            return (
              <MaterialCommunityIcons
                name="account-question-outline"
                color={globalStyle.colorSecondary}
                size={globalStyle.leftDrawerIconSize}
              />
            );
          }}
          onPress={() => navigation.navigate('FAQ')}
        />
        {user.status !== 'loggedIn' && (
          <>
            <DrawerItem
              label={() => {
                return <Text style={styles.drawerItemText}>Нэвтрэх</Text>;
              }}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="login"
                    color={globalStyle.colorSecondary}
                    size={globalStyle.leftDrawerIconSize}
                  />
                );
              }}
              onPress={() => navigation.navigate('Login')}
            />
            <DrawerItem
              label={() => {
                return <Text style={styles.drawerItemText}>Бүртгүүлэх</Text>;
              }}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="account-plus"
                    color={globalStyle.colorSecondary}
                    size={globalStyle.leftDrawerIconSize}
                  />
                );
              }}
              onPress={() => navigation.navigate('SignUp')}
            />
          </>
        )}
        {user.status === 'loggedIn' && (
          <>
            <DrawerItem
              label={() => {
                return <Text style={styles.drawerItemText}>Гарах</Text>;
              }}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="logout"
                    color={globalStyle.colorSecondary}
                    size={globalStyle.leftDrawerIconSize}
                  />
                );
              }}
              onPress={handleLogOut}
            />
          </>
        )}
      </View>

      <View style={styles.drawerFooter}>
        <Pressable onPress={() => Linking.openURL('tel:70152828')}>
          <Text style={styles.drawerFooterPhone}>7015 2828</Text>
        </Pressable>
        <Text style={styles.drawerFooterText}>
          УБ, Баянгол дүүрэг-1808, 20-р хороо Үйлдвэрийн баруун бүс, Москвагийн
          гудамж-9, Эндлесс төв
        </Text>

        <Pressable
          style={styles.drawerFooterEmail}
          onPress={() => Linking.openURL('mailto:info@Iek.mn')}>
          <Text style={styles.drawerFooterText}>info@Iek.mn</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerItems: {
    flex: 1,
  },
  drawerItemText: {
    color: 'black',
  },
  drawerFooter: {
    alignItems: 'center',
    marginTop: 20,
  },
  drawerFooterText: {
    textAlign: 'center',
    color: globalStyle.colorShuttleGrey,
  },
  drawerFooterEmail: {
    marginTop: 15,
  },
  drawerFooterPhone: {
    color: globalStyle.colorSecondary,
    marginVertical: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 1000,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
    paddingTop: 10,
  },
  accountId: {
    color: globalStyle.colorShuttleGrey,
  },
  drawerHeaderTexts: {
    paddingLeft: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 3,
  },
});
