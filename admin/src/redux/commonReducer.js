import { createSlice } from '@reduxjs/toolkit'
import { setItem } from '@utils/localStorage'

export const commonSlice = createSlice({
    name: 'common',
    initialState: {
        data: {
            breadcrumb: {}
        }
    },
    reducers: {
        updateBreadcrumb: (state, action) => {
            return {
                ...state,
                data: {
                    ...state.data,
                    breadcrumb: action.payload
                }
            };
        }
    },
})
export const { updateBreadcrumb } = commonSlice.actions
export default commonSlice.reducer