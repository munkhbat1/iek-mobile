import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {globalStyle} from '../globalStyle';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {changeBlogType, selectType} from '../redux/slices/blog';

export const IEKBizCategoryList = () => {
  const type = useAppSelector(selectType);
  const dispatch = useAppDispatch();

  return (
    <ScrollView contentContainerStyle={styles.radioButtonContainer} horizontal>
      <Pressable
        style={[styles.radioButton, type === '' && styles.activeRadioButton]}
        onPress={() => dispatch(changeBlogType(''))}>
        <Text style={styles.radioButtonText}>Бүгд</Text>
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          type === 'IEK_EDU' && styles.activeRadioButton,
        ]}
        onPress={() => dispatch(changeBlogType('IEK_EDU'))}>
        <Text style={styles.radioButtonText}>IEK-EDU</Text>
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          type === 'SALERS' && styles.activeRadioButton,
        ]}
        onPress={() => dispatch(changeBlogType('SALERS'))}>
        <Text style={styles.radioButtonText}>Борлуулагч нар</Text>
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          type === 'BUSINESS_STRATEGY' && styles.activeRadioButton,
        ]}
        onPress={() => dispatch(changeBlogType('BUSINESS_STRATEGY'))}>
        <Text style={styles.radioButtonText}>Бизнес стратеги</Text>
      </Pressable>
      <Pressable
        style={[
          styles.radioButton,
          type === 'COVID19' && styles.activeRadioButton,
        ]}
        onPress={() => dispatch(changeBlogType('COVID19'))}>
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
    height: 30,
    marginBottom: 8,
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
