import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {globalStyle} from '../globalStyle';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {changeCategory, selectCategory} from '../redux/slices/homeSlice';

export const HorizontalCategoryItem: FC<HorizontalCategoryItemProps> = ({
  name,
  value,
}) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);

  const handlePress = () => {
    dispatch(changeCategory(value));
  };

  return (
    <Pressable
      style={[styles.container, category === value && styles.activeButton]}
      onPress={handlePress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

type HorizontalCategoryItemProps = {
  name: string;
  value: string;
};

const styles = StyleSheet.create({
  container: {
    borderColor: globalStyle.colorPrimary,
    borderWidth: 2,
    borderRadius: 7,
    alignItems: 'center',
    marginHorizontal: 10,
    height: 35,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingTop: 5,
    color: 'black',
  },
  activeButton: {
    backgroundColor: globalStyle.colorSecondary,
  },
});
