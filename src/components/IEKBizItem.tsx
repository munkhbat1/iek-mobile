import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import {globalStyle} from '../globalStyle';
import {BlogListItem} from '../types';

export const IEKBizItem: FC<IEKBizItemProps> = ({item}) => {
  const [thumbnail, setThumbnail] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (item.video_link) {
      const queryString = item.video_link.split('?')[1];
      const queryStringParams = queryString.match(/v=([^&]+)/);
      setThumbnail((queryStringParams && queryStringParams[1]) || '');
    }
  }, [item.video_link]);

  return (
    <Pressable
      onPress={() => navigation.navigate('IEKBizDetail', {id: item.id})}>
      <View style={styles.cardContainer}>
        {item.image ? (
          <Image
            source={{
              uri: `${Config.API_URI}/api/uploads/images/${item.image}`,
            }}
            resizeMode="contain"
            style={styles.image}
          />
        ) : item.video_link ? (
          <Image
            source={{
              uri: `https://img.youtube.com/vi/${thumbnail}/0.jpg`,
            }}
            resizeMode="contain"
            style={styles.image}
          />
        ) : (
          <View style={styles.image}>
            <Text>No image</Text>
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.blog_body}</Text>
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
