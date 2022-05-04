import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // action creators
  const deleteTransactions = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransactions = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) =>{
    return (currVal.type === "Expense"? acc - currVal.amount : acc + currVal.amount)
  },0)

  // console.log("transactions", transactions);

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransactions,
        addTransactions,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
