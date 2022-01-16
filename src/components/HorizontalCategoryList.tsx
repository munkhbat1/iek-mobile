import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HorizontalCategoryItem} from './HorizontalCategoryItem';

export const HorizontalCategoryList = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      <HorizontalCategoryItem name="Бүгд" />
      <HorizontalCategoryItem name="Тоолуур, хэмжих хэрэгсэл" />
      <HorizontalCategoryItem name="Автомат таслуур" />
      <HorizontalCategoryItem name="Кабель, дагалдах хэрэгсэл" />
      <HorizontalCategoryItem name="Хүчдэл тогтворжуулагч" />
      <HorizontalCategoryItem name="Гэрэлтүүлэг" />
      <HorizontalCategoryItem name="Унтраалга, розетка" />
      <HorizontalCategoryItem name="Самбарын тоноглол" />
      <HorizontalCategoryItem name="Бусад" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
    marginBottom: 5,
    paddingBottom: 5,
  },
});
