import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PinState {
  value: string;
}

const initialState: PinState = {
  value: '',
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
  }
});

export const pinReducer = pinSlice.reducer;
export const {addNum} = pinSlice.actions;