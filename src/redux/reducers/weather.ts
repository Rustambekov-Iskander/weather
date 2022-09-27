// import { IWeather } from '../../@types/weather'
// import { createSlice } from '@reduxjs/toolkit'
// import { createAsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk'
// import { $api } from '../../services/axios'
//
// export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (_, { rejectWithValue }) => {
//   try {
//     // const { data } = await $api('', {
//     //   params: {
//     //     lang: 'ru',
//     //   }
//     // })
//     // return { data }
//   } catch (e: any) {
//     // return rejectWithValue(e.message)
//   }
// })
//
// interface initialStateType {
//   weather: IWeather[]
//   isLoading: boolean
//   isError: string
// }
//
// const initialState: initialStateType = {
//   weather: [],
//   isError: '',
//   isLoading: false
// }
//
// export const WeatherSlice = createSlice({
//   name: 'weather',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(fetchWeather.pending, state => {
//       state.isError = ''
//       state.isLoading = true
//     })
//     builder.addCase(fetchWeather.fulfilled, (state, { payload: { data } }: any) => {
//       state.weather = data
//       state.isError = ''
//       state.isLoading = false
//     })
//     builder.addCase(fetchWeather.rejected, (state, { payload }: any) => {
//       state.isLoading = false
//       state.isError = payload
//     })
//   }
// })
//
// export default WeatherSlice.reducer