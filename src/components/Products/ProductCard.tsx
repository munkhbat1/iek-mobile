import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
  ListRenderItemInfo,
} from 'react-native';
import {globalStyle} from '../../globalStyle';

export const ProductCard: FC<ProductCardProps> = ({item}) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("ProductDetail");
  };

  return (
    <Pressable style={styles.cardContainer} onPress={onPressHandler}>
      <Image
        source={require('../../../assets/images/product-image.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Holley DDSSY 283SR Ухаалаг тоолуур</Text>
        <Text style={styles.price}>{(630000).toLocaleString()}₮</Text>
      </View>
    </Pressable>
  );
};

type ProductCardProps = {
  item: ListRenderItemInfo<number>;
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
    height: '60%',
    width: 130,
    alignSelf: 'center',
    marginTop: 10,
  },
  price: {
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
  },
  textContainer: {
    paddingHorizontal: 10,
    alignContent: 'space-around',
    height: '40%',
  },
  name: {
    color: 'black',
    marginVertical: 10,
  },
});
