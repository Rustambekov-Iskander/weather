import { IWeather } from '../../@types/weather'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../services/axios'

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city: string, { rejectWithValue }) => {
  try {
    const { data } = await $api.get('', {
      params: {
        q: city,
        lang: 'ru'
      }
    })
    return { data }
  } catch (e: any) {
    return rejectWithValue(e.message)
  }
})

interface initialStateType {
  weather: IWeather[]
  isLoading: boolean
  isError: string
}

const initialState: initialStateType = {
  weather: [],
  isError: '',
  isLoading: false
}

export const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWeather.pending, state => {
      state.isError = ''
      state.isLoading = true
    })
    builder.addCase(fetchWeather.fulfilled, (state, { payload: { data } }: any) => {
      state.weather = data
      state.isError = ''
      state.isLoading = false
    })
    builder.addCase(fetchWeather.rejected, (state, { payload }: any) => {
      state.isLoading = false
      state.isError = payload
      state.weather = []
    })
  }
})

export default WeatherSlice.reducer
