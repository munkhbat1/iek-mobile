import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header} from '../components/Header';
import {globalStyle} from '../globalStyle';

export const ContactScreen = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/logo-black.jpg')}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.title}>Электромонтаж</Text>
          </View>
          <View style={styles.listItem}>
            <MaterialCommunityIcons name="home" style={styles.listItemIcon} />
            <Text style={styles.listItemText}>
              Интернэйшнэл Электрикал Инжинеринг Компани (ИЭК) нь ОХУ-ын
              цахилгааны инженирингийн үйлчилгээний хамгийн том, брэнд болсон
              үйлдвэрлэгч бөгөөд тус компанийн бүтээгдэхүүн ба үйлчилгээг
              барилга байгууламж, үйлдвэрийн газрууд болон нийтийн ахуйн
              үйлчилгээнд өргөн хэрэглэж байна. Одоогоор ИЭК нь ОХУ-аас гадна
              хилийн чанадад үйлдвэрлэл үйлчилгээний цогцолбортой хөрөнгө
              оруулагч компани болоод байна. ИЭК-ийн салбарууд ОХУ, Молдав,
              Монгол улсуудад үйл ажиллагаа явуулж байна.
            </Text>
          </View>
          <View style={styles.listItem}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              style={styles.listItemIcon}
            />
            <View>
              <Text style={[styles.listItemText, styles.subTitle]}>
                Электромонтаж-1/Саппоро салбар
              </Text>
              <Text style={styles.listItemText}>
                Саппоро автобусны буудлын урд
              </Text>
              <Text style={styles.listItemText}>
                Endless center 1-р давхарт
              </Text>
              <Text style={styles.listItemText}>Утас: 7000-2828</Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              style={styles.listItemIcon}
            />
            <View>
              <Text style={[styles.listItemText, styles.subTitle]}>
                Электромонтаж-2/Дүнжингарав салбар
              </Text>
              <Text style={styles.listItemText}>
                Дүнжингарав худалдааны төвийн урд
              </Text>
              <Text style={styles.listItemText}>
                Чухаг2 хотхоны 1-р давхарт
              </Text>
              <Text style={styles.listItemText}>Утас: 7702-2828</Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              style={styles.listItemIcon}
            />
            <View>
              <Text style={[styles.listItemText, styles.subTitle]}>
                Электромонтаж-3/BIG салбар
              </Text>
              <Text style={styles.listItemText}>
                BIG худалдааны төвийн 1-р давхарт
              </Text>
              <Text style={styles.listItemText}>№33 павьлион</Text>
              <Text style={styles.listItemText}>Утас: 9405-0038</Text>
            </View>
          </View>
          <View style={styles.whiteSpace} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 1000,
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 15,
  },
  listItemText: {
    color: globalStyle.colorShuttleGrey,
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  listItemIcon: {
    color: globalStyle.colorPrimary,
    fontSize: 20,
  },
  container: {
    paddingHorizontal: 30,
    backgroundColor: globalStyle.colorIvory,
  },
  title: {
    color: globalStyle.colorShuttleGrey,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTitle: {
    color: globalStyle.colorShuttleGrey,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  whiteSpace: {
    height: 100,
  },
});
