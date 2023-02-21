import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../state/movieSlice";
import { trendingSlice } from "../state/trendingSlice";
import { tvSeasonSlice } from "../state/tvSeasonSlice";
import { userSlice } from "../state/user";

export const  store =  configureStore({
    reducer:{
        user:userSlice.reducer,
        movies:movieSlice.reducer,
        trending:trendingSlice.reducer,
        tvSeason:tvSeasonSlice.reducer
    }
})