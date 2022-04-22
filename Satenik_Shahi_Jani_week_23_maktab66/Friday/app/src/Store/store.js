import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const loadPreLoadState = () => {
  try {
    const serializedstate = localStorage.getItem("state");
    // console.log(serializedstate)
    if (serializedstate) {
      return JSON.parse(serializedstate);
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};
export const store = configureStore({
  devTools: true,
  preloadedState: loadPreLoadState(),
  reducer: {
    user: userReducer,
  },
});
const savestate = (state) => {
  try {
    const nextState = JSON.stringify(state);
    localStorage.setItem("state", nextState);
  } catch (error) {
    console.log("error");
  }
};

store.subscribe(() => {
  savestate({ user: store.getState()?.user });
});
export default store;
