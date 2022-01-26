import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CategoryListItem} from '../components/CategoryListItem';
import {SearchBar} from '../components/SearchBar';
import {globalStyle} from '../globalStyle';

export const CategorySearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView>
        <CategoryListItem
          imgSrc="meter"
          title="Тоолуур хэмжих хэрэгсэл"
          desc="Хэмжих хэрэгсэл"
          value="TOOLUUR_HEMJIH_HEREGSEL"
        />
        <CategoryListItem
          imgSrc="avtomatTasluur"
          title="Автомат таслуур"
          desc="Таслуур"
          value="AUTOMAT_TASLUUR"
        />
        <CategoryListItem
          imgSrc="cable"
          title="Кабель, дагалдах хэрэгсэл"
          desc="Кабель"
          value="CABEL_DAGALDAH_HEREGSEL"
        />
        <CategoryListItem
          imgSrc="huchdel"
          title="Хүчдэл тогтворжуулагч"
          desc="Хүчдэл"
          value="HUCHDEL_TOGTVORJUULAGCH"
        />
        <CategoryListItem
          imgSrc="gereltuuleg"
          title="Гэрэлтүүлэг"
          desc="Гэрэлтүүлэг"
          value="GERELTUULEG"
        />
        <CategoryListItem
          imgSrc="untraalga"
          title="Унтраалга, розетка"
          desc="Унтраалга"
          value="UNTRAALGA"
        />
        <CategoryListItem
          imgSrc="sambar"
          title="Самбарын тоноглол"
          desc="Самбар"
          value="SAMBARIIN_TONOGLOL"
        />
        <CategoryListItem
          imgSrc="busad"
          title="Бусад тоноглол"
          desc="Бусад"
          value="BUSAD"
        />
        <View style={styles.whiteSpace} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
    paddingTop: 15,
  },
  whiteSpace: {
    height: 100,
  },
});
