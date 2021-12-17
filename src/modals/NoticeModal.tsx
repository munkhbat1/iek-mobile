import React, {FC} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../globalStyle';

export const NoticeModal: FC<NoticeModalProps> = ({
  visible,
  closeCallback,
  modalMessage,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.message}>{modalMessage}</Text>
          <Pressable onPress={closeCallback} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

type NoticeModalProps = {
  visible: boolean;
  closeCallback: () => void;
  modalMessage: string | null;
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
    backgroundColor: globalStyle.colorSecondary,
    height: 140,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: globalStyle.colorIvory,
    width: '40%',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: globalStyle.colorPrimary,
    borderWidth: 4,
  },
  animation: {
    width: '80%',
    height: '80%',
  },
  message: {
    color: 'black',
    marginVertical: 20,
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
});
