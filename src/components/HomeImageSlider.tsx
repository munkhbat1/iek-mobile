import React, {useState} from 'react';
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';

export const HomeImageSlider = () => {
  const [activeSlideNum, setActiveSlideNum] = useState(0);
  const {width} = useWindowDimensions();

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
    <View>
      <ScrollView
        scrollEventThrottle={100}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={slideScrollHandler}>
        <Image
          source={require('../../assets/images/iek_slide_1.jpg')}
          style={[styles.image, {width}]}
        />
        <Image
          source={require('../../assets/images/iek_slide_2.jpg')}
          style={[styles.image, {width}]}
        />
        <Image
          source={require('../../assets/images/iek_slide_3.jpg')}
          style={[styles.image, {width}]}
        />
      </ScrollView>
      <View style={styles.slideIndicator}>
        {[1, 2, 3].map((_, idx) => {
          return (
            <MaterialCommunityIcons
              key={idx}
              name="circle"
              style={
                idx === activeSlideNum
                  ? [styles.slideIndicatorIcon, styles.slideActiveIndicatorIcon]
                  : styles.slideIndicatorIcon
              }
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 149,
    resizeMode: 'cover',
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
