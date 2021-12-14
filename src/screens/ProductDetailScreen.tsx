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

export const ProductDetailScreen = () => {
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

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={globalStyle.headerIconSize}
          color={globalStyle.colorPrimary}
        />
      </Pressable>
      <Text style={styles.title}>Holley DTSD545S ухаалаг тоолуур</Text>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: globalStyle.colorPrimary,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: globalStyle.colorIvory,
  },
  backIcon: {
    paddingLeft: 10,
    marginBottom: 10,
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
});
