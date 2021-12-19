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
        />
        <CategoryListItem
          imgSrc="avtomatTasluur"
          title="Автомат таслуур"
          desc="Таслуур"
        />
        <CategoryListItem
          imgSrc="cable"
          title="Кабель, дагалдах хэрэгсэл"
          desc="Кабель"
        />
        <CategoryListItem
          imgSrc="huchdel"
          title="Хүчдэл тогтворжуулагч"
          desc="Хүчдэл"
        />
        <CategoryListItem
          imgSrc="gereltuuleg"
          title="Гэрэлтүүлэг"
          desc="Гэрэлтүүлэг"
        />
        <CategoryListItem
          imgSrc="untraalga"
          title="Унтраалга, розетка"
          desc="Унтраалга"
        />
        <CategoryListItem
          imgSrc="sambar"
          title="Самбарын тоноглол"
          desc="Самбар"
        />
        <CategoryListItem imgSrc="busad" title="Бусад тоноглол" desc="Бусад" />
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
