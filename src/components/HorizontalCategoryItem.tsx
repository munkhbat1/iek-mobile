import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {globalStyle} from '../globalStyle';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  filter,
  selectHorizontalCategoryState,
} from '../redux/slices/horizontalCategorySlice';

export const HorizontalCategoryItem: FC<HorizontalCategoryItemProps> = ({
  name,
  value,
  setCategory,
}) => {
  const activeCategory = useAppSelector(selectHorizontalCategoryState);
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(filter(name));
    setCategory(value);
  };

  return (
    <Pressable
      style={[styles.container, activeCategory === name && styles.activeButton]}
      onPress={handlePress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

type HorizontalCategoryItemProps = {
  name: string;
  value: string;
  setCategory: (category: string) => void;
};

const styles = StyleSheet.create({
  container: {
    borderColor: globalStyle.colorPrimary,
    borderWidth: 2,
    borderRadius: 7,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingTop: 5,
    color: 'black',
    height: 48,
  },
  activeButton: {
    backgroundColor: globalStyle.colorSecondary,
  },
});
