import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {VerticalCategoryItem} from './VerticalCategoryItem';

export const VerticalCategoryList = () => {
  return (
    <ScrollView>
      <VerticalCategoryItem
        imgSrc="meter"
        title="Тоолуур хэмжих хэрэгсэл"
        desc="Хэмжих хэрэгсэл"
        value="TOOLUUR_HEMJIH_HEREGSEL"
      />
      <VerticalCategoryItem
        imgSrc="avtomatTasluur"
        title="Автомат таслуур"
        desc="Таслуур"
        value="AUTOMAT_TASLUUR"
      />
      <VerticalCategoryItem
        imgSrc="cable"
        title="Кабель, дагалдах хэрэгсэл"
        desc="Кабель"
        value="CABEL_DAGALDAH_HEREGSEL"
      />
      <VerticalCategoryItem
        imgSrc="huchdel"
        title="Хүчдэл тогтворжуулагч"
        desc="Хүчдэл"
        value="HUCHDEL_TOGTVORJUULAGCH"
      />
      <VerticalCategoryItem
        imgSrc="gereltuuleg"
        title="Гэрэлтүүлэг"
        desc="Гэрэлтүүлэг"
        value="GERELTUULEG"
      />
      <VerticalCategoryItem
        imgSrc="untraalga"
        title="Унтраалга, розетка"
        desc="Унтраалга"
        value="UNTRAALGA"
      />
      <VerticalCategoryItem
        imgSrc="sambar"
        title="Самбарын тоноглол"
        desc="Самбар"
        value="SAMBARIIN_TONOGLOL"
      />
      <VerticalCategoryItem
        imgSrc="busad"
        title="Бусад тоноглол"
        desc="Бусад"
        value="BUSAD"
      />
      <View style={styles.whiteSpace} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  whiteSpace: {
    height: 100,
  },
});
