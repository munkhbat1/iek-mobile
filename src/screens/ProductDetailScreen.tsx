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
import {AddedToCartModal} from '../modals/AddedToCartModal';
import {PickerModal} from '../modals/PickerModal';

export const ProductDetailScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [activeSlideNum, setActiveSlideNum] = useState(0);

  const options = [
    'ТТИ-125 2000А / 5А 15ВА нарийвчлал 0,5',
    'ТТИ-125 2500А / 5А 15ВА нарийвчлал 0,5',
    'ТТИ-125 3000А / 5А 15ВА нарийвчлал 0,5',
    'ТТИ-125 4000А / 5А 15ВА нарийвчлал 0,5',
    'ТТИ-125 5000А / 5А 15ВА нарийвчлал 0,5',
  ];

  const [currentOption, setCurrentOption] = useState(options[0]);
  const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

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

      <View style={styles.optionsWrapper}>
        <View style={styles.optionsTextWrapper}>
          <Text style={styles.optionsText}>{currentOption}</Text>
        </View>
        <Pressable
          style={styles.optionsButton}
          onPress={() => setIsPickerModalVisible(true)}>
          <Text style={styles.optionsButtonText}>Шаардлага сонгох</Text>
        </Pressable>
      </View>

      <View style={styles.quantityWrapper}>
        <Text style={styles.title}>Худалдан авах хэмжээ</Text>
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
        <Text style={styles.addToCartButtonText}>Сагсанд хийх</Text>
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
        options={options}
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
