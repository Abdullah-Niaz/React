import { createSlice } from '@reduxjs/toolkit'
const savedCount = localStorage.getItem("count");
const initialState = {
    value: savedCount ? Number(savedCount) : 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            localStorage.setItem("count", state.value);
        },
        decrement: (state) => {
            if (state.value > 0)
                state.value -= 1
            localStorage.setItem("count", state.value);
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload)
            localStorage.setItem("count", state.value);
        },
        reset: (state) => {
            state.value = 0;
            localStorage.setItem("count", state.value);
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer