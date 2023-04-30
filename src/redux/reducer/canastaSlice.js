import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const canastaSlice = createSlice({
  name: 'canasta',
  initialState,
  reducers: {
    addToCanasta: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCanasta: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newCanasta = [...state.items];

      if (index >= 0) {
        newCanasta.splice(index, 1);
      } else {
        console.warn(
          `Can remove product (id: ${action.payload.id}) as its not Canasta`
        )
      }

      state.items = newCanasta;
    },

  },
});


export const { addToCanasta, removeFromCanasta } = canastaSlice.actions;

export const selectCanastaItems = state => state.canasta.items;

export const selectCanastaItemsWithId = (state, id) => state.canasta.items.filter(item => item.id === id);

export const totalCanastaItems = (state) => state.canasta.items.reduce((total, item) => (total += item.price), 0);

export default canastaSlice.reducer;