import { createSlice } from "@reduxjs/toolkit";
import { getServices } from "../../services/fetchinOfDates";
import { baseUrl, MyKey, trendingTvUrl } from "../../services/movie.service";

const initialState = []

export const tvSeasonSlice = createSlice({
    name:"tvSeason",
    initialState:initialState,
    reducers:{
        getTvSeason:(state,action) =>{ return action.payload}
    }
})


export const {getTvSeason} = tvSeasonSlice.actions;
export default tvSeasonSlice.reducer

export const getAllTvSeason = () => async (dispatch) => {
    try {
      const data = await getServices(baseUrl+trendingTvUrl,MyKey);
      dispatch(getTvSeason(data));
    } catch (error) {
      console.log(error);
    }
  };
  