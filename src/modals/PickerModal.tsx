import React, {FC} from 'react';
import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../globalStyle';

export const PickerModal: FC<PickerModalProps> = ({
  visible,
  options,
  closeCallBack,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.title}>Шаардлагаа сонгоно уу</Text>
          <FlatList
            data={options}
            renderItem={({item}) => (
              <Pressable
                onPress={() => closeCallBack(item)}
                style={styles.listItem}>
                <Text style={styles.listItemText}>{item}</Text>
              </Pressable>
            )}
            keyExtractor={(_, idx) => `${idx}`}
          />
          <View style={styles.whiteSpace} />
        </View>
      </View>
    </Modal>
  );
};

type PickerModalProps = {
  visible: boolean;
  options: string[];
  closeCallBack: (option: string) => void;
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: '80%',
    backgroundColor: 'white',
    height: 300,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  message: {
    color: 'black',
    marginVertical: 20,
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  listItem: {
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 5,
  },
  listItemText: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 16,
    textAlign: 'left',
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  whiteSpace: {
    height: 30,
  },
});
