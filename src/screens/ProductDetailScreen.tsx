import React, {useEffect, useState} from 'react';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch} from '../redux/hooks';
import {addItem} from '../redux/slices/cartSlice';
import {AddedToCartModal} from '../modals/AddedToCartModal';
import {PickerModal} from '../modals/PickerModal';
import {useGetProductQuery} from '../redux/services/product';
import Config from 'react-native-config';
import {MessageModal} from '../modals/MessageModal';

export const ProductDetailScreen = () => {
  const route = useRoute();
  const {productId} = route.params as {productId: string};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [
    isNotEnoughRemainingModalVisible,
    setIsNotEnoughRemainingModalVisible,
  ] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [activeSlideNum, setActiveSlideNum] = useState(0);

  const {data, isSuccess} = useGetProductQuery(productId);

  const [currentOption, setCurrentOption] = useState<string>('');
  const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setCurrentOption(data?.requirements[0]);
    }
  }, [isSuccess, data?.requirements]);

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
    if (data && quantity > data?.remaining) {
      setIsNotEnoughRemainingModalVisible(true);
      return;
    }
    dispatch(
      addItem({
        productId: data?.id?.toString() || '',
        productName: data?.name || '',
        unitPrice: data?.price || 0,
        image: `${Config.API_URI}/api/uploads/images/${
          data && data?.images[0]
        }`,
        quantity,
        option: currentOption,
      }),
    );
    setIsModalVisible(true);
  };

  const handleQuantityDec = () => {
    setQuantity(quantityState => {
      if (quantityState > 1) {
        return quantityState - 1;
      }

      return 1;
    });
  };

  const handleQuantityInc = () => {
    setQuantity(quantityState => {
      return quantityState + 1;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={globalStyle.headerIconSize}
          color={globalStyle.colorPrimary}
        />
        <Text style={styles.backButtonText}>??????????</Text>
      </Pressable>

      <Text style={styles.appName}>??????????????????????????</Text>
      <View style={styles.imageContainer}>
        <ScrollView
          scrollEventThrottle={100}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={slideScrollHandler}>
          {data?.images.map(image => (
            <Image
              source={{
                uri: `${Config.API_URI}/api/uploads/images/${image}`,
              }}
              style={[styles.image, {width}]}
              key={image}
            />
          ))}
        </ScrollView>
        <View style={styles.slideIndicator}>
          {data?.images.map((_, idx) => {
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

      <Text style={styles.title}>{data?.name}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{data?.price.toLocaleString()}???</Text>
        <Text style={styles.remainNum}>????????????????: {data?.remaining}</Text>
      </View>

      <View style={styles.optionsWrapper}>
        <View style={styles.optionsTextWrapper}>
          <Text style={styles.optionsText}>{currentOption}</Text>
        </View>
        <Pressable
          style={styles.optionsButton}
          onPress={() => setIsPickerModalVisible(true)}>
          <Text style={styles.optionsButtonText}>?????????????????? ????????????</Text>
        </Pressable>
      </View>

      <View style={styles.quantityWrapper}>
        <Text style={styles.title}>???????????????? ???????? ????????????</Text>
        <View style={styles.quantityController}>
          <Pressable onPress={handleQuantityDec}>
            <MaterialCommunityIcons
              name="minus-box-outline"
              size={40}
              style={styles.quantityControlButton}
            />
          </Pressable>
          <Text style={styles.quanityText}>{quantity}</Text>
          <Pressable onPress={handleQuantityInc}>
            <MaterialCommunityIcons
              name="plus-box-outline"
              size={40}
              style={styles.quantityControlButton}
            />
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartButtonText}>?????????????? ????????</Text>
      </Pressable>

      <AddedToCartModal
        visible={isModalVisible}
        closeCallback={() => setIsModalVisible(false)}
      />

      <PickerModal
        visible={isPickerModalVisible}
        closeCallBack={option => {
          setCurrentOption(option);
          setIsPickerModalVisible(false);
        }}
        options={data?.requirements}
      />

      <MessageModal
        message="?????????????? ???????????????? ???????????????????? ??????????."
        isShowed={isNotEnoughRemainingModalVisible}
        setIsShowed={setIsNotEnoughRemainingModalVisible}
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
    marginTop: 10,
    marginBottom: 40,
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
  quantityController: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  quanityText: {
    fontSize: 55,
    marginHorizontal: 10,
    color: globalStyle.colorSecondary,
  },
  quantityControlButton: {
    color: globalStyle.colorPrimary,
  },
  optionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  optionsButton: {
    backgroundColor: globalStyle.colorPrimary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  optionsButtonText: {
    color: globalStyle.colorIvory,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  optionsText: {
    color: 'black',
    fontSize: 15,
  },
  optionsTextWrapper: {
    flex: 0.7,
  },
});
