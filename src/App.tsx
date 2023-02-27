import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store";
import { countAction } from "./store/countReducer";
import Header from "./components/header";
import Card from "./components/card";
import HomePage from "./page/homepage";
import View from "./page/view";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.count);

  const increase = () => {
    dispatch(countAction.increase());
  };
  const decrease = () => {
    dispatch(countAction.decrease());
  };

  const date: Date = new Date();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
