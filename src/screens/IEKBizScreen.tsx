import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IEKBizCategoryList} from '../components/IEKBizCategoryList';
import {IEKBizItem} from '../components/IEKBizItem';
import {globalStyle} from '../globalStyle';

export const IEKBizScreen = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={globalStyle.headerIconSize}
          color={globalStyle.colorPrimary}
        />
        <Text style={styles.backButtonText}>Буцах</Text>
      </Pressable>
      <IEKBizCategoryList
        activeCategory={activeCategory}
        setActiveCategory={category => setActiveCategory(category)}
      />

      <ScrollView style={styles.listContainer}>
        <IEKBizItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  listContainer: {
    marginHorizontal: 10,
  },
});
