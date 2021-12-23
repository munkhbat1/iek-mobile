import React, {FC} from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {globalStyle} from '../globalStyle';

export const IEKBizCategoryList: FC<IEKBizCategoryListProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.radioButtonContainer} horizontal>
      <Pressable
        style={[
          styles.radioButton,
          activeCategory === 'all' && styles.activeRadioButton,
        ]}
        onPress={() => setActiveCategory('all')}>
        <Text style={styles.radioButtonText}>Бүгд</Text>
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          activeCategory === 'edu' && styles.activeRadioButton,
        ]}
        onPress={() => setActiveCategory('edu')}>
        <Text style={styles.radioButtonText}>IEK-EDU</Text>
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          activeCategory === 'saler' && styles.activeRadioButton,
        ]}
        onPress={() => setActiveCategory('saler')}>
        <Text style={styles.radioButtonText}>Борлуулагч нар</Text>
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          activeCategory === 'strategy' && styles.activeRadioButton,
        ]}
        onPress={() => setActiveCategory('strategy')}>
        <Text style={styles.radioButtonText}>Бизнес стратеги</Text>
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          activeCategory === 'covid' && styles.activeRadioButton,
        ]}
        onPress={() => setActiveCategory('covid')}>
        <Text style={styles.radioButtonText}>Ковид19</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  radioButton: {
    borderWidth: 2,
    borderColor: globalStyle.colorPrimary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginRight: 20,
  },
  radioButtonText: {
    color: globalStyle.colorPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
  activeRadioButton: {
    backgroundColor: globalStyle.colorSecondary,
  },
});

type IEKBizCategoryListProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};
