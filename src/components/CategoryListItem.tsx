import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import VectorImage from 'react-native-vector-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks';
import {changeCategory} from '../redux/slices/homeSlice';

export const CategoryListItem: FC<CategoryListItemProps> = ({
  imgSrc,
  title,
  desc,
  value,
}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(changeCategory(value));
    navigation.navigate('Home');
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.listItem}>
        {imgSrc === 'busad' ? (
          <View style={[styles.icon, styles.otherIconContainer]}>
            <MaterialCommunityIcons
              name="dots-horizontal-circle-outline"
              style={styles.otherIcon}
            />
          </View>
        ) : (
          <VectorImage source={(images as any)[imgSrc]} style={styles.icon} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      <View style={styles.bottomLine} />
    </Pressable>
  );
};

type CategoryListItemProps = {
  title: string;
  desc: string;
  imgSrc: string;
  value: string;
};

const styles = StyleSheet.create({
  bottomLine: {
    backgroundColor: globalStyle.colorGainsboro,
    height: 3,
    width: '96%',
    marginBottom: 3,
  },
  container: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  icon: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  listItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 5,
    color: globalStyle.colorPrimary,
    fontSize: 15,
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

const images = {
  meter: require('../../assets/images/meter.svg'),
  avtomatTasluur: require('../../assets/images/avtomat-tasluur.svg'),
  cable: require('../../assets/images/cable.svg'),
  huchdel: require('../../assets/images/sambar.svg'),
  gereltuuleg: require('../../assets/images/gereltuuleg.svg'),
  untraalga: require('../../assets/images/untraalga.svg'),
  sambar: require('../../assets/images/sambar.svg'),
};
