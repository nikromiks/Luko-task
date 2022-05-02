import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInventoryItem } from "../network/types";
import { mockInventory, lastMockId } from "./mock";

// TODO: Use uuid instead
let lastId = lastMockId;

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    data: mockInventory,
  },
  reducers: {
    save: (state, action: PayloadAction<IInventoryItem>) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = action.payload;
    },
    add: (
      state,
      action: PayloadAction<{
        name: string;
        purchasePrice: number;
        photo: string;
        description?: string;
      }>
    ) => {
      state.data.push({
        id: ++lastId,
        ...action.payload,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, save } = inventorySlice.actions;

export default inventorySlice.reducer;
