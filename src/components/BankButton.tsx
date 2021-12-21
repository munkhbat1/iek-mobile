import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../globalStyle';

export const BankButton: FC<BankButtonProps> = ({url, name, img}) => {
  return (
    <View style={styles.container}>
      <Image source={(images as any)[img]} style={styles.icon} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

type BankButtonProps = {
  url: string;
  name: string;
  img: string;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: globalStyle.colorPrimary,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    color: globalStyle.colorPrimary,
    marginLeft: 10,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 1,
  },
});

const images = {
  khanbank: require('../../assets/images/khanbank.png'),
  statebank: require('../../assets/images/statebank.png'),
  tdbbank: require('../../assets/images/tdbbank.png'),
  xacbank: require('../../assets/images/xacbank.png'),
};
