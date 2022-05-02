import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { goBack } from "../navigation/root";
import { IInventoryItem } from "../network/types";
import { showTotalLimitAlert, validateTotalSum } from "../services/inventory";
import { mockInventory, lastMockId } from "./mock";
import { RootState } from "./store";
import { TCreateInventoryItem } from "./types";

// TODO: Use uuid instead
let lastId = lastMockId;

export const save = createAsyncThunk(
  "inventory/save",
  async (payload: IInventoryItem, { getState }) => {
    const { inventory } = getState() as RootState;

    const index = inventory.data.findIndex((item) => item.id === payload.id);

    const items = [...inventory.data];
    items[index] = payload;

    const limit = validateTotalSum(items);
    if (limit < 0) {
      await showTotalLimitAlert(limit);
      return Promise.reject();
    }

    goBack();
    return payload;
  }
);

export const add = createAsyncThunk(
  "inventory/add",
  async (payload: TCreateInventoryItem, { getState }) => {
    const { inventory }: RootState = getState() as RootState;

    const limit = validateTotalSum([...inventory.data, payload]);
    if (limit < 0) {
      await showTotalLimitAlert(limit);
      return Promise.reject();
    }

    goBack();
    return payload;
  }
);

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    data: mockInventory,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(save.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (item) => item.id === action.payload.id
        );

        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(add.fulfilled, (state, action) => {
        state.data.push({
          id: ++lastId,
          ...action.payload,
        });
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = inventorySlice.actions;

export default inventorySlice.reducer;
