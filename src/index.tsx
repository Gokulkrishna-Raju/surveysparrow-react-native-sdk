import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'surveysparrow-react-native-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type SurveysparrowReactNativeSdkProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'SurveysparrowReactNativeSdkView';

export const SurveysparrowReactNativeSdkView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<SurveysparrowReactNativeSdkProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
