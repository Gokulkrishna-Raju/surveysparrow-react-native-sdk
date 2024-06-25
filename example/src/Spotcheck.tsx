import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { SpotCheck, TrackScreen } from 'surveysparrow-react-native-sdk';

export default function SpotCheckScreen() {
  TrackScreen();

  return (
    <SafeAreaView>
      <View style={{ height: 700, justifyContent: 'flex-end' }}>
        <View>
          <SpotCheck />
        </View>
      </View>
    </SafeAreaView>
  );
}
