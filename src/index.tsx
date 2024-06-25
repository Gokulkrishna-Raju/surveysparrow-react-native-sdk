import { View, Modal, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProperty } from './redux/store';
import type { RootState } from './redux/store';

export const TrackScreen = () => {
  const dispatch = useDispatch();
  dispatch(updateProperty({ key: 'isVisible', value: true }));
  dispatch(updateProperty({ key: 'isCloseButtonEnabled', value: true }));
};

export const SpotCheck: React.FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.app.isVisible);
  const isCloseButtonEnabled = useSelector(
    (state: RootState) => state.app.isCloseButtonEnabled
  );

  const closeModal = () => {
    dispatch(updateProperty({ key: 'isVisible', value: false }));
  };

  return (
    <View
      style={{
        marginTop: 200,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
      }}
    >
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            height: '100%',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
              elevation: 5,
              height: '100%',
            }}
          >
            {isCloseButtonEnabled && (
              <Button title="Close" onPress={closeModal} />
            )}
            <WebView
              source={{ uri: 'https://reactnative.dev/' }}
              style={{ width: 200 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
