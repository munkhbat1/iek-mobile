import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {globalStyle} from '../globalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';

export const SearchBar: FC<SearchBarProps> = ({
  searchProduct,
  keyword,
  setKeyword,
}) => {
  const handleSearch = () => {
    searchProduct(keyword);
  };

  return (
    <View style={styles.searchBarContainer}>
      <MaterialIcons name="search" size={30} style={styles.searchIcon} />
      <TextInput
        placeholder="Хайх"
        style={styles.searchText}
        onSubmitEditing={handleSearch}
        onChangeText={setKeyword}
      />
    </View>
  );
};

type SearchBarProps = {
  searchProduct: MutationTrigger<any>;
  keyword: string;
  setKeyword: (keyword: string) => void;
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
    height: 50,
    flex: 1,
    marginRight: 20,
  },
});
