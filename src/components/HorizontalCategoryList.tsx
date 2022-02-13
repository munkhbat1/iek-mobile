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
      <HorizontalCategoryItem name="Бүгд" value="" />
      <HorizontalCategoryItem
        name="Тоолуур, хэмжих хэрэгсэл"
        value="TOOLUUR_HEMJIH_HEREGSEL"
      />
      <HorizontalCategoryItem name="Автомат таслуур" value="AUTOMAT_TASLUUR" />
      <HorizontalCategoryItem
        name="Кабель, дагалдах хэрэгсэл"
        value="CABEL_DAGALDAH_HEREGSEL"
      />
      <HorizontalCategoryItem
        name="Хүчдэл тогтворжуулагч"
        value="HUCHDEL_TOGTVORJUULAGCH"
      />
      <HorizontalCategoryItem name="Гэрэлтүүлэг" value="GERELTUULEG" />
      <HorizontalCategoryItem name="Унтраалга, розетка" value="UNTRAALGA" />
      <HorizontalCategoryItem
        name="Самбарын тоноглол"
        value="SAMBARIIN_TONOGLOL"
      />
      <HorizontalCategoryItem name="Бусад" value="BUSAD" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 13,
    height: 60,
    maxHeight: 55,
  },
});
