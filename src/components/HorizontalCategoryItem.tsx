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
}) => {
  const activeCategory = useAppSelector(selectHorizontalCategoryState);
  const dispatch = useAppDispatch();

  return (
    <Pressable
      style={[styles.container, activeCategory === name && styles.activeButton]}
      onPress={() => dispatch(filter(name))}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

type HorizontalCategoryItemProps = {
  name: string;
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
