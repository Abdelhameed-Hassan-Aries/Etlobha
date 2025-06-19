import React, { createContext, useReducer } from "react";

const initialState = {
  loginSignupError: false,
  // Add other state properties as needed
};

function reducer(state, action) {
  switch (action.type) {
    case "loginSignupError":
      return { ...state, loginSignupError: action.payload };
    // Add other cases as needed
    default:
      return state;
  }
}

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <LayoutContext.Provider value={{ data, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
