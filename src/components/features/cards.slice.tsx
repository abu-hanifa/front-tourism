import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  cards: [],
  loading: false,
  error: null,
};
export const fetchCards = createAsyncThunk(
  "fetch/cards",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/publications");
      const cards = await res.json();
      return cards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCards = createAsyncThunk<any,any,any>(
  "add/cards",
  async ({ header, geoTag, image, desc }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("header", header);
      formData.append("geoTag", geoTag);
      formData.append("image", image);
      formData.append("desc", desc);
      const res = await fetch("http://localhost:4000/addPublications", {
        method: "POST",
        body: formData,
      });
      const cards = await res.json();

      if(cards.error) {
        return thunkAPI.rejectWithValue(cards.error)
      }
      
      return thunkAPI.fulfillWithValue(cards);
      return cards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(addCards.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCards.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cards = action.payload;
      });
  },
});

export default cardsSlice.reducer
