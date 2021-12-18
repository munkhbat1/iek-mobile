import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {globalStyle} from '../globalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppSelector} from '../redux/hooks';
import {selectLoadingModalState} from '../redux/slices/loadingModalSlice';

export const LoadingModal = () => {
  const isVisible = useAppSelector(selectLoadingModalState);

  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <MaterialCommunityIcons
            name="reload"
            color={globalStyle.colorSecondary}
            size={130}
          />
        </View>
      </View>
    </Modal>
  );
};

type LoadingModalProps = {
  visible: boolean;
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
    backgroundColor: globalStyle.colorIvory,
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
