import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'
import toast from 'react-hot-toast';
import Past from '../components/Past';
import { jsx } from 'react/jsx-runtime';

const initialState = {
    pastes : localStorage.getItem("Pastes")
    ? JSON.parse(localStorage.getItem("Pastes"))
    :[],
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
     const paste = action.payload;
     state.pastes.push(paste);
     localStorage.setItem("Pastes", JSON.stringify(state.pastes));
     toast("Paste Created Successfully")
      
    },
    updateToPastes: (state,action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) => item._id === paste._id)

      if (index >= 0) {

        state.pastes[index] = paste;

        localStorage.setItem("Pastes" , JSON.stringify(state.pastes))

        toast.success("Paste updated");
      }
    },
    resetAllPastest: (state, action) => {
      state.pastes = [];

      localStorage.removeItem("Pastes");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      console.log("Inside removeFromPastes with ID:", pasteId); // Debugging line
      state.pastes = state.pastes.filter((paste) => paste._id !== pasteId);
      localStorage.setItem("Pastes", JSON.stringify(state.pastes)); // Update localStorage
      toast.success("Paste deleted");
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastest, removeFromPastes } = pasteSlice.actions;

export default pasteSlice.reducer;
