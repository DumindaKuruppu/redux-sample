import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterSliceState {
  value: number;
}

const initialState: CounterSliceState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, () => {
      console.log("pending...")
    });
    builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    });
  }
});

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return amount;
  }
);

export const {
  increment,
  decrement,
  incrementByAmount
} = counterSlice.actions;
export default counterSlice.reducer;