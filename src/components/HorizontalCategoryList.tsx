import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HorizontalCategoryItem} from './HorizontalCategoryItem';

export const HorizontalCategoryList: FC<HorizontalCategoryListProps> = ({
  setCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      <HorizontalCategoryItem name="Бүгд" value="" setCategory={setCategory} />
      <HorizontalCategoryItem
        name="Тоолуур, хэмжих хэрэгсэл"
        value="TOOLUUR_HEMJIH_HEREGSEL"
        setCategory={setCategory}
      />
      <HorizontalCategoryItem
        name="Автомат таслуур"
        value="AUTOMAT_TASLUUR"
        setCategory={setCategory}
      />
      <HorizontalCategoryItem
        name="Кабель, дагалдах хэрэгсэл"
        value="CABEL_DAGALDAH_HEREGSEL"
        setCategory={setCategory}
      />
      <HorizontalCategoryItem
        name="Хүчдэл тогтворжуулагч"
        value="HUCHDEL_TOGTVORJUULAGCH"
        setCategory={setCategory}
      />
      <HorizontalCategoryItem
        name="Гэрэлтүүлэг"
        value="GERELTUULEG"
        setCategory={setCategory}
      />
      <HorizontalCategoryItem
        name="Унтраалга, розетка"
        value="UNTRAALGA"
        setCategory={setCategory}
      />
      <HorizontalCategoryItem
        name="Самбарын тоноглол"
        value="SAMBARIIN_TONOGLOL"
        setCategory={setCategory}
      />
      <HorizontalCategoryItem
        name="Бусад"
        value="BUSAD"
        setCategory={setCategory}
      />
    </ScrollView>
  );
};

type HorizontalCategoryListProps = {
  setCategory: (category: string) => void;
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
    marginBottom: 5,
    paddingBottom: 5,
    maxHeight: 50,
  },
});
