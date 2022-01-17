import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import Config from 'react-native-config';
import {globalStyle} from '../../globalStyle';
import {ProductListItem} from '../../types';

export const ProductCard: FC<ProductCardProps> = ({item}) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('ProductDetail', {productId: item.id});
  };

  return (
    <Pressable style={styles.cardContainer} onPress={onPressHandler}>
      <Image
        source={{
          uri: `${Config.API_URI}/api/uploads/images/${item.images[0]}`,
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
        <Text style={styles.price}>{item.price.toLocaleString()}₮</Text>
      </View>
    </Pressable>
  );
};

type ProductCardProps = {
  item: ProductListItem;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginLeft: 20,
    flex: 0.5,
    aspectRatio: 1 / 1.3,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: globalStyle.colorSecondary,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
    shadowOpacity: 30,
  },
  image: {
    flex: 0.6,
    width: 130,
    alignSelf: 'center',
    marginTop: 10,
  },
  price: {
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
    flex: 0.3,
  },
  textContainer: {
    paddingHorizontal: 10,
    flex: 0.4,
  },
  name: {
    flex: 0.7,
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
  },
});
