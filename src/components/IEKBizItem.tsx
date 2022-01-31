import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import Markdown from 'react-native-markdown-display';
import {globalStyle} from '../globalStyle';
import {BlogListItem} from '../types';

export const IEKBizItem: FC<IEKBizItemProps> = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('IEKBizDetail', {item: item})}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: `${Config.API_URI}/api/uploads/images/${item.image}`,
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>
            {item.blog_body.split('\n')[0]}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

type IEKBizItemProps = {
  item: BlogListItem;
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    paddingVertical: 10,
    marginLeft: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'left',
    color: globalStyle.colorShuttleGrey,
    fontSize: 12,
  },
});
