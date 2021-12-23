import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, Pressable, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';

export const IEKBizDetailScreen = () => {
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
      <Text style={styles.title}>Titleasdas asda</Text>
      <ScrollView>
        <Image
          source={require('../../assets/images/statebank.png')}
          style={styles.image}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
  },
  title: {
    fontSize: 18,
    color: globalStyle.colorPrimary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
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
  image: {
    alignSelf: 'center',
    height: 200,
    width: '65%',
  },
});
