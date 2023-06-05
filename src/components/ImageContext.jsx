import React, { createContext, useReducer } from "react";

// Create the initial state
const initialState = {
  image: null,
};

// Create the reducer function
const imageReducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};

// Create the context
export const ImageContext = createContext();

// Create the provider component
export const ImageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(imageReducer, initialState);

  return (
    <ImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};
