import { createSlice } from "@reduxjs/toolkit";
import { getServices } from "../../services/fetchinOfDates";
import { baseUrl, discoverUrl, MyKey } from "../../services/movie.service";

const initialState = []

export const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        setMovies:(state,action) =>{ return action.payload}
    }
})


export const {setMovies} = movieSlice.actions;
export default movieSlice.reducer

export const getAllFetching = () => async (dispatch) => {
    try {
      const data = await getServices(baseUrl+discoverUrl,MyKey);
      dispatch(setMovies(data));
    } catch (error) {
      console.log(error);
    }
  };
  