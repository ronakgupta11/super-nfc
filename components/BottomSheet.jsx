import React, { useRef } from 'react';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { Button, View,Text } from 'react-native';

const BottomSheetE = () => {
  const sheetRef = useRef(null);
  return (
    <View>

    <Button title="Open" onPress={() => sheetRef.current.open()} />
    <BottomSheet ref={sheetRef}>
      <Text>
        The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your app craves 🚀
      </Text>
    </BottomSheet>
    </View>
  );
};
export default BottomSheetE