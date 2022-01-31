import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, Pressable, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import Markdown from 'react-native-markdown-display';
import {BlogListItem} from '../types';
import Config from 'react-native-config';

export const IEKBizDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {item}: {item: BlogListItem} = route.params;

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
      <Text style={styles.title}>{item.title}</Text>
      <ScrollView>
        {item.image ? (
          <Image
            source={{
              uri: `${Config.API_URI}/api/uploads/images/${item.image}`,
            }}
            resizeMode="contain"
            style={styles.image}
          />
        ) : undefined}
        <View style={styles.contentContainer}>
          <Markdown>{item.blog_body}</Markdown>
        </View>
        <View style={styles.whiteSpace} />
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
  contentContainer: {
    marginHorizontal: 10,
    marginVertical: 30,
  },
  whiteSpace: {
    height: 100,
  },
});
