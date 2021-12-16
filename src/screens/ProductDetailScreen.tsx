import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
  useWindowDimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyle} from '../globalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks';
import {addItem} from '../redux/slices/cartSlice';
import {AddedToCartModal} from '../components/AddedToCartModal';

export const ProductDetailScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [activeSlideNum, setActiveSlideNum] = useState(0);

  const slideScrollHandler = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const slideNum = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );

    if (slideNum !== activeSlideNum) {
      setActiveSlideNum(slideNum);
    }
  };

  const addToCart = () => {
    dispatch(
      addItem({
        productId: '1',
        productName: 'Holley DTSD545S ухаалаг тоолуур',
        unitPrice: 600_000,
        discountPercent: 0,
        quantity: 2,
      }),
    );
    setIsModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={globalStyle.headerIconSize}
          color={globalStyle.colorPrimary}
        />
        <Text style={styles.backButtonText}>Буцах</Text>
      </Pressable>

      <Text style={styles.appName}>ЭЛЕКТРОМОНТАЖ</Text>
      <View style={styles.imageContainer}>
        <ScrollView
          scrollEventThrottle={100}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={slideScrollHandler}>
          <Image
            source={require('../../assets/images/product-image.png')}
            style={[styles.image, {width}]}
          />
          <Image
            source={require('../../assets/images/product-image-2.png')}
            style={[styles.image, {width}]}
          />
        </ScrollView>
        <View style={styles.slideIndicator}>
          {[1, 2].map((_, idx) => {
            return (
              <MaterialCommunityIcons
                key={idx}
                name="circle"
                style={
                  idx === activeSlideNum
                    ? [
                        styles.slideIndicatorIcon,
                        styles.slideActiveIndicatorIcon,
                      ]
                    : styles.slideIndicatorIcon
                }
              />
            );
          })}
        </View>
      </View>

      <Text style={styles.title}>Holley DTSD545S ухаалаг тоолуур</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{(630000).toLocaleString()}₮</Text>
        <Text style={styles.remainNum}>Үлдэгдэл: 968</Text>
      </View>

      <Pressable style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartButtonText}>Сагсанд хийх</Text>
      </Pressable>

      <AddedToCartModal
        visible={isModalVisible}
        closeCallback={() => setIsModalVisible(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: globalStyle.colorPrimary,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  container: {
    backgroundColor: globalStyle.colorIvory,
  },
  backButton: {
    paddingLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: globalStyle.colorPrimary,
    fontWeight: '500',
    marginLeft: 7,
  },
  image: {
    height: 250,
    resizeMode: 'contain',
  },
  imageContainer: {
    marginTop: 20,
  },
  slideIndicator: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  slideIndicatorIcon: {
    color: globalStyle.colorPrimary,
    marginRight: 5,
    fontSize: 16,
  },
  slideActiveIndicatorIcon: {
    color: globalStyle.colorSecondary,
  },
  priceContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: globalStyle.colorPrimary,
    fontSize: 25,
    marginLeft: 10,
  },
  remainNum: {
    color: 'red',
    marginRight: 10,
  },
  addToCartButton: {
    backgroundColor: globalStyle.colorSecondary,
    marginHorizontal: 30,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  addToCartButtonText: {
    color: globalStyle.colorIvory,
    fontSize: 20,
    fontWeight: 'bold',
  },
  appName: {
    textAlign: 'center',
    color: globalStyle.colorSecondary,
    fontWeight: '500',
    fontSize: 28,
  },
});
