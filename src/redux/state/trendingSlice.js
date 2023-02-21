import { createSlice } from "@reduxjs/toolkit";
import { getServices } from "../../services/fetchinOfDates";
import { baseUrl, MyKey, trendingUrl } from "../../services/movie.service";

const initialState = []

export const trendingSlice = createSlice({
    name:"trending",
    initialState:initialState,
    reducers:{
        getTrending:(state,action) =>{ return action.payload}
    }
})


export const {getTrending} = trendingSlice.actions;
export default trendingSlice.reducer

export const getAllTrending = () => async (dispatch) => {
    try {
      const data = await getServices(baseUrl+trendingUrl,MyKey);
      dispatch(getTrending(data));
    } catch (error) {
      console.log(error);
    }
  };
  