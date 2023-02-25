import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store";
import { countAction } from "./store/countReducer";
import Header from "./components/header";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.count);

  const increase = () => {
    dispatch(countAction.increase());
  };
  const decrease = () => {
    dispatch(countAction.decrease());
  };

  return (
    <>
      <Header />
      <button className="mr-10" onClick={increase}>
        increase
      </button>
      <button onClick={decrease}>decrease</button>
      <div className="text-5xl text-black underline">{count}</div>
    </>
  );
}

export default App;
