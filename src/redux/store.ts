import {
  createSlice,
  type PayloadAction,
  configureStore,
} from '@reduxjs/toolkit';

// Define the state interface
interface AppState {
  isVisible: boolean;
  position: string;
  spotcheckURL: string;
  spotcheckID: number;
  spotcheckContactID: number;
  afterDelay: number;
  maxHeight: number;
  currentQuestionHeight: number;
  isFullScreenMode: boolean;
  isBannerImageOn: boolean;
  triggerToken: string;
  closeButtonStyle: Record<string, string>;
  isCloseButtonEnabled: boolean;
  isSpotPassed: boolean;
  isChecksPassed: boolean;
  customEventsSpotChecks: Array<Record<string, any>>;
  targetToken: string;
  domainName: string;
  userDetails: Record<string, any>;
  variables: Record<string, any>;
  customProperties: Record<string, any>;
  traceId: string;
}

// Initial State
const initialState: AppState = {
  isVisible: false,
  position: 'bottom',
  spotcheckURL: '',
  spotcheckID: 0,
  spotcheckContactID: 0,
  afterDelay: 0,
  maxHeight: 0.5,
  currentQuestionHeight: 0,
  isFullScreenMode: true,
  isBannerImageOn: false,
  triggerToken: '',
  closeButtonStyle: {},
  isCloseButtonEnabled: false,
  isSpotPassed: false,
  isChecksPassed: false,
  customEventsSpotChecks: [],
  targetToken: '',
  domainName: '',
  userDetails: {},
  variables: {},
  customProperties: {},
  traceId: '',
};

// Create a slice
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateProperty: <K extends keyof AppState>(
      state: AppState,
      action: PayloadAction<{ key: K; value: AppState[K] }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

// Export the action
export const { updateProperty } = appSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;

// Define the type for the state
export type RootState = ReturnType<typeof store.getState>;
