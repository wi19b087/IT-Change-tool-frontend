import React, { useReducer } from "react";
// Source: https://itnext.io/react-hooks-with-context-as-a-state-management-solution-526d1c13a07d
const initialState = {
  currentPage: "home",
};

const PageContext = React.createContext(initialState);

const pageReducer = (state, action) => {
  switch (action.type) {
    case "setCurrentPage":
      state.currentPage = action.payload;
      return { ...state };
    default:
      throw new Error();
  }
};

const PageContextProvider = (props) => {
  const [contextState, updateContext] = useReducer(pageReducer, initialState);
  return (
    <PageContext.Provider value={{ contextState, updateContext }}>
      {props.children}
    </PageContext.Provider>
  );
};
export { PageContext, PageContextProvider };
