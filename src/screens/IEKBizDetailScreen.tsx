import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, Pressable, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import Markdown from 'react-native-markdown-renderer';

export const IEKBizDetailScreen = () => {
  const navigation = useNavigation();

  const content = `# h1 Heading 8-)
  ## h2 Heading
  ### h3 Heading
  #### h4 Heading
  ##### h5 Heading
  ###### h6 Heading
  
  
  ## Horizontal Rules
  
  ___
  
  ---
  
  ***
  
  
  ## Typographic replacements
  
  Enable typographer option to see result.
  
  (c) (C) (r) (R) (tm) (TM) (p) (P) +-
  
  test.. test... test..... test?..... test!....
  
  !!!!!! ???? ,,  -- ---
  
  "Smartypants, double quotes" and 'single quotes'
  
  
  ## Emphasis
  
  **This is bold text**
  
  __This is bold text__
  
  *This is italic text*
  
  _This is italic text_
  
  ~~Strikethrough~~
  
  
  ## Blockquotes
  
  
  > Blockquotes can also be nested...
  >> ...by using additional greater-than signs right next to each other...
  > > > ...or with spaces between arrows.
  `;

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
        <View style={styles.contentContainer}>
          <Markdown>{content}</Markdown>
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
