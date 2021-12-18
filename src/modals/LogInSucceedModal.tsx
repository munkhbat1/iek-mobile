import React, {FC} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../globalStyle';
import {useAppSelector} from '../redux/hooks';
import {selectLogInSucceedModalState} from '../redux/slices/logInSucceedModalSlice';

export const LogInSucceedModal: FC<LogInSucceedModalProps> = ({
  closeCallBack,
}) => {
  const {isShowed, message} = useAppSelector(selectLogInSucceedModalState);

  return (
    <Modal visible={isShowed} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.message}>{message}</Text>
          <Pressable onPress={closeCallBack} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

type LogInSucceedModalProps = {
  closeCallBack: () => void;
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
    height: 140,
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
  message: {
    color: 'black',
    marginVertical: 20,
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
