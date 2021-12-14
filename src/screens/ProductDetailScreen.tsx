import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyle} from '../globalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export const ProductDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={globalStyle.headerIconSize}
          color={globalStyle.colorPrimary}
        />
      </Pressable>
      <Text style={styles.title}>Holley DTSD545S ухаалаг тоолуур</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: globalStyle.colorPrimary,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: globalStyle.colorIvory,
  },
  backIcon: {
    paddingLeft: 10,
    marginBottom: 10,
  },
});
