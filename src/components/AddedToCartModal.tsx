import React, {FC} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../globalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const AddedToCartModal: FC<AddedToCartModalProps> = ({
  visible,
  closeCallback,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <MaterialCommunityIcons
            name="cart-arrow-down"
            size={150}
            style={styles.cartIcon}
          />
          <Text style={styles.addedToCartText}>
            Сагсанд амжилттай нэмэгдлээ
          </Text>
          <Pressable onPress={closeCallback} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

type AddedToCartModalProps = {
  visible: boolean;
  closeCallback: () => void;
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
    height: '40%',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: globalStyle.colorSecondary,
    width: '40%',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '80%',
    height: '80%',
  },
  addedToCartText: {
    color: 'black',
    marginVertical: 20,
    fontSize: 18,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  cartIcon: {
    color: globalStyle.colorPrimary,
    marginTop: 50,
  },
});
