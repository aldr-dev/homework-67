import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PinState {
  value: string;
  color: string;
  text: string;
}

const initialState: PinState = {
  value: '',
  color: '',
  text: '',
};

export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    addNum: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    deleteNum: (state: PinState) => {
      state.value = state.value.slice(0, -1);
    },
    borderColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    messageInfo: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    resetValue: (state : PinState) => {
      state.value = '';
    },
  },
});

export const pinReducer = pinSlice.reducer;
export const {
  addNum,
  deleteNum,
  borderColor,
  messageInfo,
  resetValue,
} = pinSlice.actions;