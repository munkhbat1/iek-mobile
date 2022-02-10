import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, Pressable, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import Markdown from 'react-native-markdown-display';
import Config from 'react-native-config';
import YouTube from 'react-native-youtube';
import {useGetBlogQuery} from '../redux/services/blog';

export const IEKBizDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id}: {id: number} = route.params;

  const {data} = useGetBlogQuery(id);
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
      <Text style={styles.title}>{data?.title}</Text>
      <ScrollView>
        {data?.image ? (
          <Image
            source={{
              uri: `${Config.API_URI}/api/uploads/images/${data.image}`,
            }}
            resizeMode="contain"
            style={styles.image}
          />
        ) : data?.video_link ? (
          <YouTube
            videoId="g-0B_Vfc9qM"
            apiKey={`${Config.YOUTUBE_API_KEY}`}
            style={styles.video}
          />
        ) : undefined}
        <View style={styles.contentContainer}>
          <Markdown>{data?.blog_body}</Markdown>
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
  video: {
    height: 300,
    width: '95%',
    alignSelf: 'center',
  },
});
