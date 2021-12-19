import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {globalStyle} from '../globalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <MaterialIcons name="search" size={30} style={styles.searchIcon} />
      <TextInput placeholder="Хайх" style={styles.searchText} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '95%',
    backgroundColor: globalStyle.colorGainsboro,
    borderWidth: 2,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
    borderColor: globalStyle.colorPrimary,
    flexDirection: 'row',
  },
  searchIcon: {
    color: globalStyle.colorPrimary,
    marginHorizontal: 10,
  },
  searchText: {
    fontSize: 18,
    flex: 1,
    marginRight: 20,
  },
});
