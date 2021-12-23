import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../globalStyle';

export const IEKBizItem = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('IEKBizDetail')}>
      <View style={styles.cardContainer}>
        <Image
          source={require('../../assets/images/tdbbank.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>asdadasd</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim enim
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    paddingVertical: 10,
    marginLeft: 10,
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'left',
    color: globalStyle.colorShuttleGrey,
    fontSize: 12,
  },
});
